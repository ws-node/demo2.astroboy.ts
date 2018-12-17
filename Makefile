build:
	./node_modules/.bin/atc router -A
	rm -rf dist
	cp tsconfig.npm.json dist
	cp -R config dist/

update:
	yarn add astroboy.ts@latest

start-dist:
	cd dist && ast dev

routers:
	./node_modules/.bin/atc router -A

dev:
	./node_modules/.bin/atc router
	./node_modules/.bin/atc dev

pkg:
	./node_modules/.bin/atc router -A
	rm -rf package
	tsc --project tsconfig.pkg.json
	rm -rf package/atc.config.js
	rm -rf package/atc.config.js.map
	cp -R config package/
	cp package.json package

publish-pkg:
	cd package && npm publish