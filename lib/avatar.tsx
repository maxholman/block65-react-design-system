import {
  avatarClassName,
  avatarImgClass,
  avatarVariants,
  identClasses,
  type AvatarVariant,
} from './avatar.css.js';
import { Box } from './core.js';
import { type InlineProps } from './layout.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import { fontSizeVariantVars } from './typography.css.js';
import { Text, type FontSize } from './typography.js';

type CommonAvatarProps = {
  label: string;
  ident: string;
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

export const Avatar = <T extends keyof ReactHTMLAttributesHacked>({
  variant = 'normal',
  size = '1',
  ident,
  label,
  image,
  className,
  children,
}: AvatarProps<T>) => {
  return (
    <Box
      rounded="maximum"
      className={[
        avatarClassName,
        fontSizeVariantVars[size],
        avatarVariants[variant],
        getIdentClassName(ident),
        className,
      ]}
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
};
