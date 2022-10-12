
SRCS = $(wildcard lib/**)

.PHONY: all
all: dist types

dist: node_modules
	yarn vite build

.PHONY: types
types: node_modules
	yarn tsc --emitDeclarationOnly

.PHONY: clean
clean: node_modules
	yarn tsc -b --clean

.PHONY: test
test: node_modules
	NODE_OPTIONS=--experimental-vm-modules yarn jest

node_modules: package.json
	yarn install


.PHONY: dev
dev: node_modules
	yarn vite dev --force
