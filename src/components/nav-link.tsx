import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';
import {
  NavLink as ThemeUiLink,
  NavLinkProps as ThemeUiLinkProps,
} from '@theme-ui/components';
import { useRouter } from 'next/router';

type OriginalNavLinkProps = Omit<NextLinkProps, 'passHref'> & ThemeUiLinkProps;
export interface NavLinkProps extends OriginalNavLinkProps {
  activeClassName?: string;
  useCurrentAria?: boolean;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      href,
      as,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      activeClassName,
      useCurrentAria = true,
      ...props
    },
    ref,
  ) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
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
        <ThemeUiLink
          ref={ref}
          {...props}
          {...(isActive &&
            activeClassName && {
              className: `${props.className ?? ''} ${activeClassName}`.trim(),
            })}
          {...(isActive && { 'aria-current': 'page' })}
        />
      </NextLink>
    );
  },
);
