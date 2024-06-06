import { avatarClassName, avatarImgClass } from './avatar.css.js';
import type { Falsy } from './core.css.js';
import { Box, type BoxProps } from './core.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';
import { capSizeVariantVars, type FontSize } from './typography.css.js';

type CommonAvatarProps = {
  label?: string | Falsy;
  ident?: string | Falsy;
  size?: FontSize | Falsy;
  image?: string | Falsy;
};

export type AvatarProps<T extends keyof ReactHTMLElementsHacked> = Merge<
  BoxProps<T>,
  CommonAvatarProps
>;

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

export const Avatar = <T extends keyof ReactHTMLElementsHacked>({
  size = '1',
  label,
  image,
  className,
  children,
}: AvatarProps<T>) => (
  <Box
    rounded="50"
    fontSize={size}
    fontWeight="heavy"
    className={[className, avatarClassName, size && capSizeVariantVars[size]]}
  >
    {image ? (
      <Box
        component="img"
        rounded="50"
        src={image}
        className={avatarImgClass}
      />
    ) : (
      children || (label && extractInitials(label))
    )}
  </Box>
);
