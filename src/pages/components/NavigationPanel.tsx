import { Link } from '@block65/mrr';
import type { FC } from 'react';
import { Inline, Panel, TextLink } from '../../../lib/main.js';

export const NavigationPanel: FC = () => (
  <Panel variant="ghost">
    <Inline space="5" flexWrap justifyContent="center">
      <Link href="/">
        <TextLink>Core</TextLink>
      </Link>
      <Link href="/layout">
        <TextLink>Layout</TextLink>
      </Link>
      <Link href="/panels">
        <TextLink>Panels</TextLink>
      </Link>
      <Link href="/grid">
        <TextLink>Grid</TextLink>
      </Link>
      <Link href="/forms">
        <TextLink>Forms</TextLink>
      </Link>
      <Link href="/typography">
        <TextLink>Typography</TextLink>
      </Link>
      <Link href="/buttons">
        <TextLink>Buttons</TextLink>
      </Link>
      <Link href="/list">
        <TextLink>List</TextLink>
      </Link>
      <Link href="/badges">
        <TextLink>Badges</TextLink>
      </Link>
      <Link href="/loaders">
        <TextLink>Loaders</TextLink>
      </Link>
      <Link href="/callout">
        <TextLink>Callout</TextLink>
      </Link>
      <Link href="/media-query">
        <TextLink>Media Query</TextLink>
      </Link>
      <Link href="/modals">
        <TextLink>Modals</TextLink>
      </Link>
      <Link href="/icons">
        <TextLink>Icons</TextLink>
      </Link>
      <Link href="/dropdown-menu">
        <TextLink>Dropdowns</TextLink>
      </Link>
      <Link href="/patterns">
        <TextLink>Patterns</TextLink>
      </Link>
      <Link href="/swatches">
        <TextLink>Swatches</TextLink>
      </Link>
      <Link href="/avatars">
        <TextLink>Avatars</TextLink>
      </Link>
      <Link href="/hooks">
        <TextLink>Hooks</TextLink>
      </Link>
    </Inline>
  </Panel>
);
