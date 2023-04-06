import { Link } from '@block65/mrr';
import type { FC } from 'react';
import {
  Heading,
  Inline,
  Menu,
  MenuItem,
  Panel,
  TextLink,
} from '../../lib/main.js';

export const DropdownMenuPage: FC = () => (
  <Panel variant="ghost">
    <Heading level="1">Best dropdown eva</Heading>
    <Inline>
      <Inline>
        <Menu label="Edit">
          <MenuItem>
            <Link dest="/modals">
              <TextLink>neeps (modals)</TextLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link dest="/modals">
              <TextLink>neeps (modals)</TextLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link dest="/modals">
              <TextLink>neeps (modals)</TextLink>
            </Link>
          </MenuItem>
          {/* <Menu label="Copy as">
          <MenuItem>
            <Link dest="/modals">
              <TextLink>neeps (modals)</TextLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link dest="/modals">
              <TextLink>neeps (modals)</TextLink>
            </Link>
          </MenuItem>
          <Menu label="Image">
            <MenuItem>
              <Link dest="/modals">
                <TextLink>neeps (modals)</TextLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link dest="/modals">
                <TextLink>neeps (modals)</TextLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link dest="/modals">
                <TextLink>neeps (modals)</TextLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link dest="/modals">
                <TextLink>neeps (modals)</TextLink>
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
      </Inline>
      <Inline justifySelf="end">
        <Menu label="Edit">
          <MenuItem>
            <Link dest="/modals">
              <TextLink>neeps (modals)</TextLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link dest="/modals">
              <TextLink>neeps (modals)</TextLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link dest="/modals">
              <TextLink>neeps (modals)</TextLink>
            </Link>
          </MenuItem>
        </Menu>
      </Inline>
    </Inline>
  </Panel>
);
