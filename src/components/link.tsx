import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';
import {
  Link as ThemeUiLink,
  LinkProps as ThemeUiLinkProps,
} from '@theme-ui/components';

export type LinkProps = Omit<NextLinkProps, 'passHref'> & ThemeUiLinkProps;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, as, replace, scroll, shallow, prefetch, locale, ...props }, ref) => (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      passHref
    >
      <ThemeUiLink ref={ref} {...props} />
    </NextLink>
  ),
);
