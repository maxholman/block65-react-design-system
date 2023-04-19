import {
  avatarVariants,
  type AvatarVariant,
  identClasses,
  avatarImgClass,
} from './avatar.css.js';
import { Box } from './core.js';
import { Inline, type InlineProps } from './layout.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import { fontSizeVariants } from './typography.css.js';
import { type FontSize } from './typography.js';

type CommonAvatarProps = {
  name: string;
  ident: string;
  variant?: AvatarVariant;
  fontSize?: FontSize;
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
  variant = 'standard',
  fontSize = '1',
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
      boxShadow="2"
      className={[
        className,
        fontSizeVariants[fontSize],
        getIdentClassName(ident),
        !image ? avatarVariants[variant] : avatarVariants.image,
      ]}
      title={name}
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
        extractInitials(name)
      )}
    </Inline>
  );
};
