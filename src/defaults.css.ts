import { createGlobalTheme } from '@vanilla-extract/css';
import { tokens, vars } from '../lib/vars.js';

createGlobalTheme(':root', vars, tokens);
