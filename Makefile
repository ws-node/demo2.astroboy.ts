build:
	./node_modules/.bin/atc router --always --details --filetype ts --approot /v1 --tsconfig tsconfig.json
	rm -rf dist
	tsc --project tsconfig.npm.json
	cp tsconfig.npm.json dist

update:
	yarn add astroboy.ts@latest

start-dist:
	cd dist && ast dev

routers:
	./node_modules/.bin/atc router --always --details --filetype ts --approot /v1 --tsconfig tsconfig.json

dev:
	./node_modules/.bin/atc router --filetype ts --approot /v1 --tsconfig tsconfig.json
	./node_modules/.bin/atc dev --ts --inspect=64001 --tsconfig tsconfig.json