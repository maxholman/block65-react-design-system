
SRCS = $(wildcard lib/**)

.DEFAULT_GOAL := all

.PHONY: all
all: build dist build/global.scss build/global.css

node_modules: package.json pnpm-lock.yaml
	pnpm install
	touch $@

dist/bin/token.js: build bin/token.ts ${SRCS}
	pnpm exec tsc -b

build/global.css: dist/bin/token.js
	node dist/bin/token.js -t css > $@

build/global.scss: dist/bin/token.js
	node dist/bin/token.js -t scss > $@

tsconfig.json: tsconfig-vite.src.json
	pnpm exec tsc -p tsconfig-vite.src.json --showConfig 1> $@

src/rds.module.scss: bin/token.js build
	node $< > $@
	prettier --write $@

build: $(SRCS) node_modules vite.config.ts vite-env.d.ts
	NODE_ENV=production pnpm exec vite build
	touch $@

.PHONY: build-watch
build-watch: $(SRCS) node_modules vite.config.ts vite-env.d.ts
	pnpm exec vite build --mode=development --clearScreen false
	touch -c build

.PHONY: dev-server
dev-server: node_modules vite.config.ts
	pnpm exec vite dev --mode=development --clearScreen false

PHONY: typecheck
typecheck: node_modules tsconfig.json
	pnpm exec tsc  -w --preserveWatchOutput

.PHONY: dev
dev:
	NODE_ENV=development $(MAKE) -j 3 build-watch dev-server typecheck

.PHONY: debug
debug:
	DEBUG_BUILD=1 $(MAKE)

dist: node_modules tsconfig.json
	pnpm exec tsc

.PHONY: clean
clean: node_modules tsconfig.json
	pnpm exec tsc -b --clean
	pnpm exec tsc -b tsconfig.node.json --clean
	rm -rf build dist

.PHONY: clean
distclean: clean
	rm -rf node_modules

.PHONY: test
test: lint dist build
	DEBUG_BUILD=true pnpm vitest run
	DEBUG_BUILD=true pnpm vitest run
	pnpm exec bundlesize

.PHONY: lint
lint: node_modules
	pnpm exec eslint .
	pnpm exec prettier --check .

.PHONY: pretty
pretty: node_modules
	pnpm exec eslint --fix .
	pnpm exec prettier --write .
