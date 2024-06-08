
SRCS = $(wildcard lib/**)

.PHONY: all
all: types build build/tokens.scss

node_modules: package.json pnpm-lock.yaml
	pnpm install
	touch $@

.PHONY: deps
deps:
	$(MAKE) node_modules

bin/token.js: bundle tsconfig-node.json
	pnpm exec tsc -p tsconfig-node.json

build/tokens.scss: bin/token.js bundle
	node $< > $@
	pnpm exec tsc -b tsconfig-node.json --clean

.PHONY: bundle
bundle: $(SRCS) node_modules vite.config.ts
	NODE_ENV=production pnpm vite build
	touch build

build: bundle build/tokens.scss

debug:
	DEBUG_BUILD=1 $(MAKE)

.PHONY: types
types: node_modules tsconfig.json
	pnpm exec tsc --emitDeclarationOnly

.PHONY: types-watch
types-watch: node_modules tsconfig.json
	pnpm exec tsc --emitDeclarationOnly -w

.PHONY: clean
clean: node_modules tsconfig.json
	pnpm exec tsc -b --clean
	pnpm exec tsc -b tsconfig-node.json --clean
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
	pnpm bundlesize

.PHONY: dev
dev:
	$(MAKE) -j 2 types-watch dev-server

.PHONY: dev-server
dev-server: node_modules vite.config.ts
	pnpm vite dev

.PHONY: lint
lint: node_modules
	pnpm eslint  .
	pnpm prettier --check .

.PHONY: pretty
pretty: node_modules
	pnpm eslint --fix .
	pnpm prettier --write .

tsconfig.json: tsconfig-vite.src.json
	pnpm exec tsc -p tsconfig-vite.src.json --showConfig > $@