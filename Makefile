
SRCS = $(wildcard lib/**)

.PHONY: all
all: types build build/tokens.scss

build/tokens.scss: node_modules bin/token.ts
	node --loader=ts-node/esm bin/token.ts > build/tokens.scss

build: node_modules vite.config.ts
	NODE_ENV=production yarn vite build

.PHONY: types
types: node_modules
	yarn tsc --emitDeclarationOnly

.PHONY: types-watch
types-watch: node_modules
	yarn tsc --emitDeclarationOnly -w

.PHONY: clean
clean: node_modules
	yarn tsc -b --clean
	rm -rf build dist

.PHONY: test
test: node_modules vite.config.ts
	yarn vitest run

node_modules: package.json yarn.lock
	yarn install
	touch yarn.lock node_modules

.PHONY: dev
dev:
	$(MAKE) -j 2 types-watch dev-server

.PHONY: dev-server
dev-server: node_modules vite.config.ts
	yarn vite dev --force
