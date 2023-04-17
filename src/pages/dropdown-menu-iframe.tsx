import { Link } from '@block65/mrr';
import { type FC } from 'react';
import {
  ButtonLink,
  Grid,
  Inline,
  Menu,
  MenuItem,
  type MenuProps,
} from '../../lib/main.js';

const RandomMenu: FC<Omit<MenuProps, 'label'>> = (props) => (
  <Menu label="Menu" initialPlacement="bottom" {...props}>
    {Array.from({ length: 99 }).map((_, idx, arr) => (
      <MenuItem label={(arr.length - idx).toString()}>
        <Link href="/modals">
          <ButtonLink>{arr.length - idx} Bottles </ButtonLink>
        </Link>
      </MenuItem>
    ))}
  </Menu>
);

export const DropdownMenuIframe: FC = () => (
  <Grid
    cols={{
      tablet: 2,
      mobile: 1,
      all: 3,
    }}
    space="2"
    style={{ width: '100%', height: '100%' }}
  >
    <Inline justifySelf="start">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="center">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="end">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="start">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="center">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="end">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="start">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="center">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="end">
      <RandomMenu />
    </Inline>
  </Grid>
);
