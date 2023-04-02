
SRCS = $(wildcard lib/**)

.PHONY: all
all: types build build/tokens.scss

node_modules: package.json pnpm-lock.yaml
	pnpm install
	touch $@

.PHONY: deps
deps:
	$(MAKE) node_modules

build/tokens.scss: node_modules build bin/token.ts
	node --loader=ts-node/esm bin/token.ts > build/tokens.scss

build: $(SRCS) node_modules vite.config.ts
	NODE_ENV=production pnpm vite build

.PHONY: types
types: node_modules
	pnpm tsc --emitDeclarationOnly

.PHONY: types-watch
types-watch: node_modules
	pnpm tsc --emitDeclarationOnly -w

.PHONY: clean
clean: node_modules
	pnpm tsc -b --clean || true
	rm -rf build dist

.PHONY: clean
distclean: clean
	rm -rf node_modules

.PHONY: test
test: node_modules vite.config.ts
	pnpm vitest run



.PHONY: dev
dev:
	$(MAKE) -j 2 types-watch dev-server

.PHONY: dev-server
dev-server: node_modules vite.config.ts
	pnpm vite dev
