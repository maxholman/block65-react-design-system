
SRCS = $(wildcard lib/**)

.PHONY: all
all: dist types

dist: node_modules
	yarn vite build

.PHONY: types
types: node_modules
	yarn tsc --emitDeclarationOnly

.PHONY: types-watch
types-watch: node_modules
	yarn tsc --emitDeclarationOnly -w

.PHONY: clean
clean: node_modules
	yarn tsc -b --clean

.PHONY: test
test: node_modules
	NODE_OPTIONS=--experimental-vm-modules yarn jest

node_modules: package.json
	yarn install

.PHONY: dev
dev:
	$(MAKE) -j 2 types-watch dev-server

.PHONY: dev-server
dev-server: node_modules
	yarn vite dev --force
