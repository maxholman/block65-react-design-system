import {
  avatarClassName,
  avatarImgClass,
  avatarVariants,
  identClasses,
  type AvatarVariant,
} from './avatar.css.js';
import { Box } from './core.js';
import { Inline, type InlineProps } from './layout.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import { fontSizeVariantVars } from './typography.css.js';
import { type FontSize } from './typography.js';

type CommonAvatarProps = {
  name: string;
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
  ident,
  name,
  image,
  className,
  size = '1',
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
        extractInitials(name)
      )}
    </Box>
  );
};

export const AvatarOld = <T extends keyof ReactHTMLAttributesHacked>({
  variant = 'normal',
  size: fontSize = '1',
  ident,
  name,
  image,
  className,
  ...props
}: AvatarProps<T>) => {
  return (
    <Inline
      component="span"
      rounded="maximum"
      // padding="2"
      className={[
        className,
        fontSizeVariantVars[fontSize],
        getIdentClassName(ident),
        !image ? avatarVariants[variant] : avatarVariants.image,
      ]}
      title={name}
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {image ? (
        <Box
          component="img"
          rounded="maximum"
          src={image}
          className={avatarImgClass}
        />
      ) : (
        <svg width="3em" height="1em" enableBackground="red">
          <text
            x="0"
            y="1em"
            width="3em"
            height="1em"
            color="currentColor"
            fill="red"
          >
            {extractInitials(name)}
          </text>
        </svg>
      )}
    </Inline>
  );
};
