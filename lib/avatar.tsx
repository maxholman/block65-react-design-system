import {
  avatarClassName,
  avatarImgClass,
  identClasses,
  type AvatarVariant,
} from './avatar.css.js';
import { Box, type BoxProps } from './core.js';
import { Flex, type InlineProps } from './layout.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import { fontSizeVariantVars, type FontSize } from './typography.css.js';

type CommonAvatarProps = {
  label: string;
  ident?: string;
  variant?: AvatarVariant;
  size?: FontSize;
  image?: string;
};

export type AvatarProps<T extends keyof ReactHTMLAttributesHacked> = Merge<
  InlineProps<T>,
  CommonAvatarProps
>;

function getIdentClassName(ident: string) {
  const colourIndex: number =
    ident.split('').reduce(
      (accum, char) =>
        // eslint-disable-next-line no-bitwise
        char.charCodeAt(0) + accum,
      0,
    ) % identClasses.length;

  return identClasses[colourIndex];
}

function extractInitials(text: string): string {
  // if its an email address, strip off the domain
  const withoutDomain = text.match(/^([^@]+)@[^@]+.[^@]+$/)?.[1] || text;
  const regex = /(?:^|\s|\b)([\p{L}\p{N}\p{Emoji}])/gu;
  const candidates = withoutDomain.match(regex) || [];

  return (
    candidates
      .map((x) => x.trim())
      .filter(Boolean)
      .slice(0, 3)
      .join('') || withoutDomain.slice(0, 3)
  );
}

function getAvatarVariantProps(variant: AvatarVariant) {
  const variantProps = {
    vibrant: {
      background: '10',
      foreground: '0',
    },
    subtle: {
      background: '5',
      foreground: '12',
    },
    image: {
      background: '0',
    },
    ghost: {
      borderWidth: '4',
      border: '6',
      foreground: '6',
      background: null,
    },
    solid: {
      background: '6',
      foreground: '0',
    },
    transparent: {
      background: null,
    },
  } satisfies Record<AvatarVariant, BoxProps>;

  return variantProps[variant];
}

export const Avatar = <T extends keyof ReactHTMLAttributesHacked>({
  size = '1',
  variant = 'solid',
  label,
  ident = label,
  image,
  className,
  children,
}: AvatarProps<T>) => (
  <Flex
    rounded="maximum"
    fontSize={size}
    fontWeight="heavy"
    tone={null} // we provide our own tone via the ident colour
    className={[
      className,
      avatarClassName,
      fontSizeVariantVars[size],
      getIdentClassName(ident),
    ]}
    {...getAvatarVariantProps(variant)}
  >
    {image ? (
      <Box
        component="img"
        rounded="maximum"
        src={image}
        className={avatarImgClass}
      />
    ) : (
      children || (
        <Text fontSize={size} tone={null}>
          {extractInitials(label)}
        </Text>
      )
    )}
  </Box>
);
