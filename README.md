# Theme-UI Components for Next.js

This package contains a few small components to help using Theme UI with
Next.js.

Specifically, this means `<Link>` and `<NavLink>`. If you use the components
from this package, the components will be using `<Link />` components from
`next/link` instead of a regular `<a />`.

## Quickstart

```shell
▶ yarn add next-theme-ui
```

Replace these imports:

```typescript
import { Link } from '@theme-ui/components';
import { NavLink } from '@theme-ui/components';
```

with

```typescript
import { Link } from 'next-theme-ui';
import { NavLink } from 'next-theme-ui';
```

## Contribute

Please open issues if you have questions or issues. I'm trying to keep this
package as small as possible, so before adding any components, please open an
issue we can discuss.
