# Remix Icon icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/ri)](https://jsr.io/@preact-icons/ri)

**License** [Apache License Version 2.0](http://www.apache.org/licenses/)

**Project** [https://github.com/Remix-Design/RemixIcon](https://github.com/Remix-Design/RemixIcon)

[See available icons here](https://react-icons.deno.dev/ri)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/ri": "jsr:@preact-icons/ri@^1.0.11/mod.ts",
    "react-icons/ri/": "jsr:@preact-icons/ri@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib ri

```ts
import { RiArrowDownCircleFill2 } from "jsr:preact-icons/ri@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { RiArrowDownCircleFill2 } from "react-icons/ri"
```

## import a single icon, downloading just one icon

```ts
import { RiArrowDownCircleFill2 } from "react-icons/ri/RiArrowDownCircleFill2.ts"
```

or using default export

```ts
import RiArrowDownCircleFill2 from "react-icons/ri/RiArrowDownCircleFill2.ts"
```

