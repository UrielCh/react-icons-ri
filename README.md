# Remix Icon icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/ri)](https://jsr.io/@preact-icons/ri)

**License** [Apache License Version 2.0](http://www.apache.org/licenses/)

**Project** [https://github.com/Remix-Design/RemixIcon](https://github.com/Remix-Design/RemixIcon)

[See available icons here](https://react-icons.deno.dev/ri)

## install the module

```bash
deno add @preact-icons/ri
dnpx jsr add @preact-icons/ri
pnpm dlx jsr add @preact-icons/ri
bunx jsr add @preact-icons/ri
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { RiArrowDownCircleFill2 } from "@preact-icons/ri"
```

## import a single icon, downloading just one icon

```ts
import { RiArrowDownCircleFill2 } from "react-icons/ri/RiArrowDownCircleFill2"
```

or using default export

```ts
import RiArrowDownCircleFill2 from "react-icons/ri/RiArrowDownCircleFill2.ts"
```
