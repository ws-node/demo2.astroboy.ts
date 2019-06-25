SUBDIRS = configs middlewares app
.PHONY: subdirs $(SUBDIRS)
subdirs: $(SUBDIRS)

routers:
	npx exoskeleton router -A

configs:
	npx exoskeleton config --force

middlewares:
	npx exoskeleton middleware --force

dev:
	npx exoskeleton dev

dev-only:
	npx exoskeleton dev

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

locale-routers:
	npx ts-node ../../exoskeleton/cli/src/index.ts router 

locale-configs:
	npx ts-node ../../exoskeleton/cli/src/index.ts config 

locale-middlewares:
	npx ts-node ../../exoskeleton/cli/src/index.ts middleware

locale-dev:
	npx ts-node ../../exoskeleton/cli/src/index.ts dev

locale-dev-js:
	node ../astroboy.ts/dist/src/cmd/index.js dev -C atc.npm.js

locale-compile:
	npx ts-node ../../exoskeleton/cli/src/index.ts compile

locale-pkg: locale-compile
	rm -rf package
	tsc --project tsconfig.pkg.json
	rm -rf package/atc.config.js
	rm -rf package/atc.config.js.map
	cp -R config package/
	cp -R app/views package/app/
	cp README.md package