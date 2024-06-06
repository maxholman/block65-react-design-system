import { Link } from '@block65/mrr';
import type { FC } from 'react';
import {
  Avatar,
  Grid,
  Inline,
  Menu,
  MenuItem,
  TextLink,
  UnstyledButton,
  type Falsy,
  type MenuProps,
} from '../../lib/main.js';
import type { BoxVariant, Tone } from '../reference-impl/main.js';
import { Text } from '../reference-impl/main.js';

type ThisMenuProps = MenuProps & {
  variant?: BoxVariant | Falsy;
  tone?: Tone | Falsy;
};

const RandomMenu: FC<Omit<ThisMenuProps, 'label'>> = (props) => (
  <Menu
    label="Menu Yeah!"
    initialPlacement="bottom"
    menuDropdownProps={{
      padding: '0',
      space: '0',
    }}
    {...props}
  >
    {Array.from({ length: 99 }).map((_, idx, arr) => (
      <MenuItem key={idx} label={(arr.length - idx).toString()}>
        <Text tone="accent">
          <Link href="/modals">
            <TextLink weight="weak" padding="3">
              {arr.length - idx} Bottles
            </TextLink>
            {/* <ButtonLink rounded="none">{arr.length - idx} Bottles</ButtonLink> */}
          </Link>
        </Text>
      </MenuItem>
    ))}
  </Menu>
);

const CustomActivatorMenu: FC<Omit<ThisMenuProps, 'label'>> = (props) => (
  <Menu
    activator={(p) => (
      <UnstyledButton {...p}>
        <Avatar ident="fffff" label="lol" />
      </UnstyledButton>
    )}
    menuDropdownProps={{
      padding: '0',
      space: '0',
    }}
    {...props}
  >
    {Array.from({ length: 99 }).map((_, idx, arr) => (
      <MenuItem key={idx} label={(arr.length - idx).toString()}>
        <Text tone="accent">
          <Link href="/modals">
            <TextLink weight="weak" padding="3">
              {arr.length - idx} Bottles
            </TextLink>
          </Link>
        </Text>
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
      <RandomMenu />
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
