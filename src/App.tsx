import { Link, Route, Router, Routes } from '@block65/mrr';
import { FC, useState } from 'react';
import {
  Block,
  ButtonIcon,
  ColorScheme,
  ContrastScheme,
  DesignSystem,
  Heading,
  Inline,
  Panel,
  Text,
  TextLink,
} from '../lib/main.js';
// import { exampleColorThemeClass } from './App.css.js';
import { CrescentMoonIcon, SunIcon } from './icons.js';
import { ButtonsPage } from './pages/buttons.js';
import { CorePage } from './pages/core.js';
import { FormsPage } from './pages/forms.js';
import { GridPage } from './pages/grid.js';
import { PanelsPage } from './pages/panels.js';
import { TypographyPage } from './pages/typography.js';
import 'the-new-css-reset';

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('auto');
  const [contrastScheme, setContrastScheme] = useState<ContrastScheme>('auto');

  return (
    <DesignSystem
      colorScheme={colorScheme}
      contrastScheme={contrastScheme}
      // className={exampleColorThemeClass}
    >
      <Router>
        <Block style={{ minHeight: '100vh' }}>
          <Block padding="huge">
            <Panel variant="subtle">
              <Inline align="center">
                <ButtonIcon
                  inline
                  label="toggle light mode"
                  role="switch"
                  aria-checked={colorScheme === 'light'}
                  variant={colorScheme === 'light' ? 'standard' : 'ghost'}
                  onClick={() =>
                    setColorScheme(colorScheme === 'light' ? 'auto' : 'light')
                  }
                >
                  <span hidden aria-hidden="true">
                    {colorScheme === 'light' ? 'on' : 'off'}
                  </span>
                  <SunIcon focusable="false" />
                </ButtonIcon>
                <ButtonIcon
                  inline
                  label="toggle dark mode"
                  role="switch"
                  aria-checked={colorScheme === 'dark'}
                  variant={colorScheme === 'dark' ? 'standard' : 'ghost'}
                  onClick={() =>
                    setColorScheme(colorScheme === 'dark' ? 'auto' : 'dark')
                  }
                >
                  <span hidden aria-hidden="true">
                    {colorScheme === 'light' ? 'on' : 'off'}
                  </span>
                  <CrescentMoonIcon />
                </ButtonIcon>
              </Inline>
            </Panel>
            <Panel variant="subtle">
              <Inline align="center">
                <ButtonIcon
                  inline
                  label="toggle more contrast mode"
                  role="switch"
                  aria-checked={contrastScheme === 'more'}
                  variant={contrastScheme === 'more' ? 'standard' : 'ghost'}
                  onClick={() =>
                    setContrastScheme(
                      contrastScheme === 'more' ? 'auto' : 'more',
                    )
                  }
                >
                  <div>More</div>
                </ButtonIcon>
                <ButtonIcon
                  inline
                  label="toggle less contrast mode"
                  role="switch"
                  aria-checked={contrastScheme === 'more'}
                  variant={contrastScheme === 'less' ? 'standard' : 'ghost'}
                  onClick={() =>
                    setContrastScheme(
                      contrastScheme === 'less' ? 'auto' : 'less',
                    )
                  }
                >
                  Less
                </ButtonIcon>
              </Inline>
            </Panel>
            <Panel space="huge" variant="ghost">
              <Inline align="center">
                <Link dest="/">
                  <TextLink>Home</TextLink>
                </Link>
                <Link dest="/core">
                  <TextLink>Core</TextLink>
                </Link>
                <Link dest="/panels">
                  <TextLink>Panels</TextLink>
                </Link>
                <Link dest="/grid">
                  <TextLink>Grid</TextLink>
                </Link>
                <Link dest="/forms">
                  <TextLink>Forms</TextLink>
                </Link>
                <Link dest="/typography">
                  <TextLink>Typography</TextLink>
                </Link>
                <Link dest="/buttons">
                  <TextLink>Buttons</TextLink>
                </Link>
              </Inline>
            </Panel>
            <Block>
              <Routes>
                <Route path="/">
                  <Panel space="huge" variant="ghost">
                    <Heading>Enjoy!</Heading>
                    <Text>Choose something amazing from the nav above</Text>
                  </Panel>
                </Route>
                <Route path="/core">
                  <CorePage />
                </Route>
                <Route path="/panels">
                  <PanelsPage />
                </Route>
                <Route path="/grid">
                  <GridPage />
                </Route>
                <Route path="/forms">
                  <FormsPage />
                </Route>
                <Route path="/typography">
                  <TypographyPage />
                </Route>
                <Route path="/buttons">
                  <ButtonsPage />
                </Route>
                <Route>
                  <Heading>404</Heading>
                </Route>
              </Routes>
            </Block>
          </Block>
        </Block>
      </Router>
    </DesignSystem>
  );
};
