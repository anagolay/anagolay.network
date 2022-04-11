# Anagolay website

---

Anagolay presentation website that goes to https://anagolay.network

## Get started

Install the dependencies...

```bash
pnpm install
```

To launch the website run the following command:

```bash
pnpm dev
```

Navigate to [localhost:7776](http://localhost:7776). You should see the app running. Edit a component file in `src`, save it to see your changes.

## Deploying to the web

In the project root folder, run

```
pnpm build
```

In folder `/build`, run the following command to set relative base path:

```
sed -i 's/"\//"\.\//g' $(find . -name "*.html" )
```

There's an issue because svelte does not set relative base path when compiling:
https://github.com/sveltejs/kit/issues/3376

Execute this command from the root folder of the project:

```
ipfs add --cid-version=1 --pin=false --recursive build
```

`--pin=false` means the changes will be temporary.
