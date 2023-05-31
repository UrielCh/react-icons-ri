# Remix Icon icons for deno / Preact

**License** [Apache License Version 2.0](http://www.apache.org/licenses/)

**Project** [https://github.com/Remix-Design/RemixIcon](https://github.com/Remix-Design/RemixIcon)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=ri)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/ri":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-ri@1.0.3/mod.ts",
    "react-icons/ri/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-ri/ico/",
  }
}
```

## Direct import sample

```ts
import { RiAncientGateFill } from "https://deno.land/x/react_icons_ri@1.0.3/mod.ts"
```

## import_map import sample

```ts
import { RiAncientGateFill } from "react-icons/ri"
```

## minimal import

```ts
import { RiAncientGateFill } from "react-icons/ri/RiAncientGateFill.ts"
```

## minimal import using default export

```ts
import RiAncientGateFill from "react-icons/ri/RiAncientGateFill.ts"
```

