import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';
import {
  Image as ThemeUiImage,
  ImageProps as ThemeUiImageProps,
} from '@theme-ui/components';

export type ImageProps = Omit<NextImageProps, 'passHref'> & ThemeUiImageProps;

export const Image = React.forwardRef<HTMLAnchorElement, ImageProps>(
  (props, ref) => (
    <ThemeUiImage
      as={NextImage}
      // @ts-expect-error ref is not the same on ThemeUIImage
      ref={ref}
      {...props}
    />
  ),
);
