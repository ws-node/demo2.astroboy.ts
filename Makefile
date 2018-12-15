build:
	./node_modules/.bin/atc router -A
	rm -rf dist
	tsc --project tsconfig.npm.json
	cp tsconfig.npm.json dist

update:
	yarn add astroboy.ts@latest

start-dist:
	cd dist && ast dev

routers:
	./node_modules/.bin/atc router -A

dev:
	./node_modules/.bin/atc router
	./node_modules/.bin/atc dev