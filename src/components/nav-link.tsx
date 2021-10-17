import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';
import {
  NavLink as ThemeUiLink,
  NavLinkProps as ThemeUiLinkProps,
} from '@theme-ui/components';

export type NavLinkProps = Omit<NextLinkProps, 'passHref'> & ThemeUiLinkProps;

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
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
