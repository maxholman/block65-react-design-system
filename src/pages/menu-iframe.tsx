import { Link } from '@block65/mrr';
import { type FC } from 'react';
import {
  Avatar,
  Grid,
  Inline,
  Menu,
  MenuItem,
  TextLink,
  UnstyledButton,
  type MenuActivatorProps,
  type MenuProps,
} from '../../lib/main.js';
import type {} from '../../lib/menu.js';

const RandomMenu: FC<Omit<MenuProps, 'label'>> = (props) => (
  <Menu
    label="Menu Yeah!"
    initialPlacement="bottom"
    menuDropdownProps={{
      padding: '0',
      boxShadow: '6',
      space: '0',
    }}
    {...props}
  >
    {Array.from({ length: 99 }).map((_, idx, arr) => (
      <MenuItem key={idx} label={(arr.length - idx).toString()}>
        <Link href="/modals">
          <TextLink weight="weak" backgroundHover="2" padding="3" tone="accent">
            {arr.length - idx} Bottles
          </TextLink>
          {/* <ButtonLink rounded="none">{arr.length - idx} Bottles</ButtonLink> */}
        </Link>
      </MenuItem>
    ))}
  </Menu>
);

const CustomActivatorMenu: FC<Omit<MenuProps, 'label'>> = (props) => (
  <Menu
    activator={({ variant, ...p }: MenuActivatorProps) => (
      // <Button rounded="maximum" {...p} />
      <UnstyledButton {...p}>
        <Avatar ident="poop" label="lol" />
      </UnstyledButton>
    )}
    menuDropdownProps={{
      padding: '0',
      boxShadow: '6',
      space: '0',
    }}
    {...props}
  >
    {Array.from({ length: 99 }).map((_, idx, arr) => (
      <MenuItem key={idx} label={(arr.length - idx).toString()}>
        <Link href="/modals">
          <TextLink weight="weak" backgroundHover="2" padding="3" tone="accent">
            {arr.length - idx} Bottles
          </TextLink>
          {/* <ButtonLink rounded="none">{arr.length - idx} Bottles</ButtonLink> */}
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
      <CustomActivatorMenu />
    </Inline>
    <Inline justifySelf="center">
      <RandomMenu variant="subtle" />
    </Inline>
    <Inline justifySelf="end">
      <RandomMenu variant="transparent" />
    </Inline>
    <Inline justifySelf="start">
      <RandomMenu variant="none" />
    </Inline>
    <Inline justifySelf="center">
      <RandomMenu tone="accent" />
    </Inline>
    <Inline justifySelf="end">
      <RandomMenu tone="promo" />
    </Inline>
    <Inline justifySelf="start">
      <RandomMenu tone="positive" />
    </Inline>
    <Inline justifySelf="center">
      <RandomMenu />
    </Inline>
    <Inline justifySelf="end">
      <RandomMenu />
    </Inline>
  </Grid>
);
