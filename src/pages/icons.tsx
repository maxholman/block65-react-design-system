import type { FC } from 'react';
import {
  Grid,
  HelpIcon,
  InfoIcon,
  MenuIcon,
  CloseIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  ClipboardIcon,
  PasswordVisibleIcon,
  PasswordInvisibleIcon,
  GlobeColorIcon,
  MenuDropdownArrowIcon,
} from '../../lib/main.js';

export const IconsPage: FC = () => (
  <Grid cols={3} space="15">
    <HelpIcon />
    <InfoIcon />
    <MenuIcon />
    <CloseIcon />
    <ArrowBackIcon />
    <ArrowForwardIcon />
    <ClipboardIcon />
    <PasswordVisibleIcon />
    <PasswordInvisibleIcon />
    <GlobeColorIcon />
    <MenuDropdownArrowIcon />
  </Grid>
);
