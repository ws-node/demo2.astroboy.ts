build:
	./node_modules/.bin/atc router -A -D
	rm -rf dist
	tsc --project tsconfig.npm.json
	cp tsconfig.npm.json dist

update:
	yarn add astroboy.ts@latest

start-dist:
	cd dist && ast dev

routers:
	./node_modules/.bin/atc router -A -D

dev:
	./node_modules/.bin/atc router
	./node_modules/.bin/atc dev -I -T tsconfig.json