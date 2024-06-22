import { style } from '@vanilla-extract/css';

export const avatarClassName = style({
  display: 'inline-grid',
  aspectRatio: '1/1',
  width: '4em',
  height: '4em',
  placeItems: 'center',
  textTransform: 'uppercase',
});

export const avatarImgClass = style({
  objectFit: 'cover',
  objectPosition: 'center',
  overflow: 'hidden',
  aspectRatio: '1/1',
});
