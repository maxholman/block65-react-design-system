import { createGlobalTheme } from '@vanilla-extract/css';
import openPropsTokens from 'open-props/style-dictionary-tokens';
import { badgeVars } from './badge.css.js';
import { buttonVars } from './button.css.js';
import { calloutVars } from './callout.css.js';
import { formControlVars } from './forms.css.js';
import { panelVars } from './panel.css.js';

const defaultsSelector = ':root';

createGlobalTheme(defaultsSelector, buttonVars, {
  border: {
    radius: openPropsTokens.radius[2].value,
    width: openPropsTokens.border.size[1].value,
  },
});

createGlobalTheme(defaultsSelector, badgeVars, {
  border: {
    radius: openPropsTokens.radius[2].value,
    width: openPropsTokens.border.size[1].value,
  },
});

createGlobalTheme(defaultsSelector, calloutVars, {
  border: {
    radius: openPropsTokens.radius[2].value,
    width: openPropsTokens.border.size[1].value,
  },
  padding: openPropsTokens.size[2].value,
});

createGlobalTheme(defaultsSelector, panelVars, {
  border: {
    radius: openPropsTokens.radius[2].value,
    width: openPropsTokens.border.size[1].value,
  },
  padding: {
    inline: openPropsTokens.size[3].value,
    block: openPropsTokens.size[3].value,
  },
});

createGlobalTheme(defaultsSelector, formControlVars, {
  border: {
    radius: openPropsTokens.radius[2].value,
    width: openPropsTokens.border.size[1].value,
  },
  outline: {
    width: openPropsTokens.border.size[1].value,
  },
});
