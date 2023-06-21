// import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Button } from './main.js';

describe('Button', () => {
  it('renders a button', async () => {
    // ARRANGE
    render(<Button>Click Me</Button>);

    // ACT
    // // @ts-expect-error
    // await userEvent.click(screen.getByText('Click Me'));

    // ASSERT
    expect(screen.getByRole('button')).toMatchInlineSnapshot(`
      <button
        class="buttons_buttonClassName__jqajj21 layout_flexWrapVariants_nowrap__17vpgba3 layout_alignItemsVariants_center__17vpgba8 layout_justifyContentVariants_center__17vpgbak core_viewport_all_space_2__1rbo53vo2 core_viewport_all_paddingBlock_5__1rbo53vg9 core_viewport_all_paddingInline_5__1rbo53vdm core_roundedVariants_medium__1rbo53v2 tone_toneVariants_accent__y2da5n2 core_borderVariants_6__1rbo53vsj core_borderBaseClass__1rbo53vs4 core_borderHoverVariants_7__1rbo53vt1 core_borderWidthVariants_2__1rbo53vs7 core_borderBaseClass__1rbo53vs4 core_backgroundVariants_6__1rbo53vz core_backgroundHoverVariants_7__1rbo53v1w core_flexDirectionVariants_row__1rbo53vnf typography_fontSizeVariantVars_1__16o63x1c capsize_capsizeStyle__1d0g9qk4 typography__16o63x1m"
      >
        <div
          class="core_textAlignVariants_center__1rbo53v27 core_borderTransparentClass__1rbo53vst typography_fontSizeVariantVars_1__16o63x1c capsize_capsizeStyle__1d0g9qk4 typography__16o63x1m"
        >
          Click Me
        </div>
      </button>
    `);
  });
});
