build:
	./node_modules/.bin/astt router --always --details --filetype ts --approot /v1 --tsconfig tsconfig.json
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
	./node_modules/.bin/astt router --filetype ts --approot /v1 --tsconfig tsconfig.json
	yarn run dev