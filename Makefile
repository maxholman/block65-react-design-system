
SRCS = $(wildcard lib/**)

.DEFAULT_GOAL := build types

node_modules: package.json pnpm-lock.yaml
	pnpm install
	touch $@

bin/token.js: dist build

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

dist-watch: node_modules tsconfig.json
	pnpm exec tsc --emitDeclarationOnly --noEmit null -w --preserveWatchOutput

.PHONY: dev
dev:
	NODE_ENV=development $(MAKE) -j 3 build-watch dev-server dist-watch

.PHONY: debug
debug:
	DEBUG_BUILD=1 $(MAKE)

dist: node_modules tsconfig.json
	pnpm exec tsc --emitDeclarationOnly --noEmit null

.PHONY: clean
clean: node_modules tsconfig.json
	pnpm exec tsc -b --clean
	pnpm exec tsc -b tsconfig.node.json --clean
	rm -rf build dist

.PHONY: clean
distclean: clean
	rm -rf node_modules

.PHONY: test
test: node_modules tsconfig.json vite.config.ts
	$(MAKE) lint
	pnpm exec tsc --noEmit
	DEBUG_BUILD=true pnpm vitest run
	$(MAKE) build
	pnpm exec bundlesize

.PHONY: pretty
pretty: node_modules
	pnpm exec eslint --fix .
	pnpm exec prettier --write .
