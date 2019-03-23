update:
	yarn add astroboy.ts@latest

routers:
	npx atc router -A

configs:
	npx atc config --force

middlewares:
	npx atc middleware --force

dev:
	npx atc router -A
	npx atc dev

dev-only:
	npx atc dev

build: configs middlewares routers
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

locale-configs:
	npx ts-node ../astroboy.ts/src/cmd/index.ts config 

locale-middlewares:
	npx ts-node ../astroboy.ts/src/cmd/index.ts middleware

locale-dev: locale-configs locale-middlewares routers
	npx ts-node ../astroboy.ts/src/cmd/index.ts dev

locale-dev-only:
	npx ts-node ../astroboy.ts/src/cmd/index.ts dev
	# node ../astroboy.ts/dist/src/cmd/index.js dev

locale-pkg: locale-configs locale-middlewares routers
	rm -rf package
	tsc --project tsconfig.pkg.json
	rm -rf package/atc.config.js
	rm -rf package/atc.config.js.map
	cp -R config package/
	cp -R app/views package/app/
	cp README.md package