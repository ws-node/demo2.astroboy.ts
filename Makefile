build:
	./node_modules/.bin/ts-node init.ts
	rm -rf dist
	tsc --project tsconfig.npm.json
	cp tsconfig.npm.json dist
	rm -rf dist/init.js
	rm -rf dist/init.js.map
	rm -rf dist/init.d.ts

update:
	yarn add astroboy.ts@latest

start-dist:
	cd dist && ast dev

dev:
	./node_modules/.bin/ts-node init.ts
	yarn run dev