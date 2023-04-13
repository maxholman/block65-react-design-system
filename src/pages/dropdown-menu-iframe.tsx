import { Link } from '@block65/mrr';
import { type FC } from 'react';
import {
  Grid,
  Inline,
  Menu,
  MenuItem,
  TextLink,
  type MenuProps,
} from '../../lib/main.js';

const RandomMenu: FC<MenuProps> = (props) => (
  <Menu label="Menu" initialPlacement="bottom" {...props}>
    <MenuItem>
      <Link href="/modals">
        <TextLink>Long text is long</TextLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href="/modals">
        <TextLink>Med is avg</TextLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href="/modals">
        <TextLink>Short not</TextLink>
      </Link>
    </MenuItem>

    <MenuItem>
      <Link href="/modals">
        <TextLink>Last lost</TextLink>
      </Link>
    </MenuItem>

    {/* <Menu label="Copy as">
  <MenuItem>
    <Link dest="/modals">
      <TextLink>Modals</TextLink>
    </Link>
  </MenuItem>
  <MenuItem>
    <Link dest="/modals">
      <TextLink>Modals</TextLink>
    </Link>
  </MenuItem>
  <Menu label="Image">
    <MenuItem>
      <Link dest="/modals">
        <TextLink>Modals</TextLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link dest="/modals">
        <TextLink>Modals</TextLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link dest="/modals">
        <TextLink>Modals</TextLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link dest="/modals">
        <TextLink>Modals</TextLink>
      </Link>
    </MenuItem>
  </Menu>
  <MenuItem children="Audio" />
</Menu>
<Menu label="Share">
  <MenuItem children="Mail" />
  <MenuItem children="Instagram" />
</Menu> */}
  </Menu>
);

export const DropdownMenuIframe: FC = () => (
  <Grid cols={3} space="15" style={{ width: '100%', height: '100%' }}>
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
