build:
	npx atc router -A
	rm -rf dist
	tsc --project tsconfig.npm.json
	cp -R config dist/
	cp -R app/views dist/app/

update:
	yarn add astroboy.ts@latest

start-dist:
	cd dist && ast dev

routers:
	npx atc router -A

configs:
	npx atc config --force

dev:
	npx atc config --force
	npx atc router
	npx atc dev

pkg:
	npx atc router -A
	rm -rf package
	tsc --project tsconfig.pkg.json
	rm -rf package/atc.config.js
	rm -rf package/atc.config.js.map
	cp -R config package/
	cp -R app/views package/app/
	cp package.json package

publish-pkg:
	cd package && npm publish