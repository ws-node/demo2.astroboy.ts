update:
	yarn add astroboy.ts@latest

routers:
	npx atc router -A

configs:
	npx atc config --force

middlewares:
	npx atc middleware --force

dev: configs middlewares
	npx atc router
	npx atc dev

build: configs middlewares routers
	npx atc router -A
	rm -rf dist
	tsc --project tsconfig.npm.json
	cp -R config dist/
	cp -R app/views dist/app/

start-dist:
	cd dist && ast dev

pkg: configs middlewares routers
	rm -rf package
	tsc --project tsconfig.pkg.json
	rm -rf package/atc.config.js
	rm -rf package/atc.config.js.map
	cp -R config package/
	cp -R app/views package/app/
	cp README.md package

publish: pkg
	npx bmpub publish -C ./scripts/pkg.rc.js

locale-routers:
	npx ts-node ../astroboy.ts/src/cmd/index.ts router -A

locale-configs:
	npx ts-node ../astroboy.ts/src/cmd/index.ts config --force

locale-middlewares:
	npx ts-node ../astroboy.ts/src/cmd/index.ts middleware --force

locale-dev: locale-configs locale-middlewares locale-routers
	npx ts-node ../astroboy.ts/src/cmd/index.ts dev

locale-pkg: locale-configs locale-middlewares locale-routers
	rm -rf package
	tsc --project tsconfig.pkg.json
	rm -rf package/atc.config.js
	rm -rf package/atc.config.js.map
	cp -R config package/
	cp -R app/views package/app/
	cp README.md package