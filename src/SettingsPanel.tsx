import type { FC } from 'react';
import { useLocalStorageState } from '../lib/hooks/use-localstorage-state.js';
import {
  FormInputRadio,
  FormInputRadioGroup,
  Grid,
  Heading,
  type ColorScheme,
  type ContrastScheme,
} from '../lib/main.js';

export const SettingsPanel: FC = () => {
  const [colorScheme, setColorScheme] = useLocalStorageState<ColorScheme>(
    'color-scheme',
    'auto',
  );
  const [contrastScheme, setContrastScheme] =
    useLocalStorageState<ContrastScheme>('contrast-scheme', 'auto');
  return (
    <Grid
      cols={{
        all: 2,
        mobile: 1,
      }}
    >
      <FormInputRadioGroup name="color-scheme">
        <Heading>Color Scheme</Heading>
        <FormInputRadio
          // inline
          label="auto"
          checked={!colorScheme || colorScheme === 'auto'}
          onChange={() => setColorScheme('auto')}
        />
        <FormInputRadio
          // inline
          label="force light mode"
          checked={colorScheme === 'light'}
          onChange={() => setColorScheme('light')}
        />
        <FormInputRadio
          // inline
          label="force dark mode"
          checked={colorScheme === 'dark'}
          onChange={() => setColorScheme('dark')}
        />
      </FormInputRadioGroup>

      <FormInputRadioGroup name="contrast-scheme">
        <Heading>Contrast Scheme</Heading>
        <FormInputRadio
          // inline
          label="auto"
          checked={!contrastScheme || contrastScheme === 'auto'}
          onChange={() => setContrastScheme('auto')}
        />
        <FormInputRadio
          // inline
          label="force less contrast"
          checked={contrastScheme === 'less'}
          onChange={() => setContrastScheme('less')}
        />
        <FormInputRadio
          // inline
          label="force more contrast"
          checked={contrastScheme === 'more'}
          onChange={() => setContrastScheme('more')}
        />
      </FormInputRadioGroup>
    </Grid>
  );
};
