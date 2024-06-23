import { Link } from '@block65/mrr';
import type { FC } from 'react';
import {
  Avatar,
  Paragraph,
  Grid,
  Inline,
  Menu,
  MenuItem,
  type MenuProps,
  TextLink,
  UnstyledButton,
} from '../../lib/main.js';

type ThisMenuProps = MenuProps & {
  // variant?: BoxVariant | Falsy;
  label?: never;
};

const RandomMenu: FC<ThisMenuProps> = (props) => (
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
        <Paragraph>
          <Link href="/modals">
            <TextLink variant="weak" padding="3">
              {arr.length - idx} Bottles
            </TextLink>
            {/* <ButtonLink rounded="none">{arr.length - idx} Bottles</ButtonLink> */}
          </Link>
        </Paragraph>
      </MenuItem>
    ))}
  </Menu>
);

const CustomActivatorMenu: FC<ThisMenuProps> = (props) => (
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
        <Paragraph>
          <Link href="/modals">
            <TextLink variant="weak" padding="3">
              {arr.length - idx} Bottles
            </TextLink>
          </Link>
        </Paragraph>
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
