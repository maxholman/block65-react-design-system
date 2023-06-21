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
        class="typography_fontSizeVariantVars_1__16o63x1c buttons_buttonClassName__jqajj21 layout_flexWrapVariants_nowrap__17vpgba3 layout_alignItemsVariants_center__17vpgba8 layout_justifyContentVariants_center__17vpgbak core_viewport_all_space_2__1rbo53vo3 core_viewport_all_paddingBlock_4__1rbo53vg9 core_viewport_all_paddingInline_5__1rbo53vdn core_textAlignVariants_center__1rbo53v28 core_roundedVariants_medium__1rbo53v2 tone_toneVariants_accent__y2da5n2 core_borderVariants_6__1rbo53vsk core_borderBaseClass__1rbo53vs5 core_borderHoverVariants_6__1rbo53vt0 core_borderWidthVariants_2__1rbo53vs8 core_borderBaseClass__1rbo53vs5 core_backgroundVariants_7__1rbo53v11 core_bgStyle__1rbo53vt core_flexDirectionVariants_row__1rbo53vng"
      >
        <div
          class="typography_textClass__16o63x17 typography_fontSizeVariantVars_1__16o63x1c capsize_capsizeStyle__1d0g9qk4 typography__16o63x1m core_textAlignVariants_center__1rbo53v28"
        >
          Click Me
        </div>
      </button>
    `);
  });
});
