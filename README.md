# Remix Icon icons for deno / Preact

**License** [Apache License Version 2.0](http://www.apache.org/licenses/)

**Project** [https://github.com/Remix-Design/RemixIcon](https://github.com/Remix-Design/RemixIcon)

[See available icons here](https://react-icons.deno.dev/ri)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/ri":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-ri@1.0.10/mod.ts",
    "react-icons/ri/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-ri@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib ri

```ts
import { RiArrowDownCircleFill2 } from "https://deno.land/x/react_icons_ri@1.0.10/mod.ts"
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

