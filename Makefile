
SRCS = $(wildcard lib/**)

.PHONY: all
all: node_modules types
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

dist: node_modules tsconfig.json $(SRCS)
	yarn tsc

.PHONY: dev
dev: node_modules
	yarn vite dev --force
