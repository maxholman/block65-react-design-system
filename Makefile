
SRCS = $(wildcard lib/**)

.PHONY: all types
all:
	yarn vite build

.PHONY: types
types:
	yarn tsc --emitDeclarationOnly

.PHONY: clean
clean:
	yarn tsc -b --clean

.PHONY: test
test:
	NODE_OPTIONS=--experimental-vm-modules yarn jest

node_modules: package.json
	yarn install

dist: node_modules tsconfig.json $(SRCS)
	yarn tsc

.PHONY: dev
dev:
	yarn vite dev --force
