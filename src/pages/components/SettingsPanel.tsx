import type { FC } from 'react';
import {
  FormInputRadio,
  FormInputRadioGroup,
  Grid,
  Heading,
} from '../../../lib/main.js';
import { useSettings } from './use-settings.js';

export const SettingsPanel: FC = () => {
  const [{ colorScheme, colorTheme }, { setColorScheme, setColorTheme }] =
    useSettings();

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
          checked={!colorTheme || colorTheme === 'auto'}
          onChange={() => setColorTheme('auto')}
        />
        <FormInputRadio
          // inline
          label="force less contrast"
          checked={colorTheme === 'low-contrast'}
          onChange={() => setColorTheme('low-contrast')}
        />
        <FormInputRadio
          // inline
          label="force high contrast"
          checked={colorTheme === 'high-contrast'}
          onChange={() => setColorTheme('high-contrast')}
        />
      </FormInputRadioGroup>
    </Grid>
  );
};
