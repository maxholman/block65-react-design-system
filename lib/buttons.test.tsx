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
        class="buttons_buttonClassName__jqajj21 layout_flexWrapVariants_nowrap__17vpgba3 layout_alignItemsVariants_center__17vpgba8 layout_justifyContentVariants_center__17vpgbak core_viewport_all_space_2__1rbo53voa core_viewport_all_paddingBlock_5__1rbo53vgh core_viewport_all_paddingInline_5__1rbo53vdu core_roundedVariants_medium__1rbo53va core_toneVariants_accent__1rbo53v2 core_borderVariants_6__1rbo53vsr core_borderBaseClass__1rbo53vsc core_borderHoverVariants_7__1rbo53vt9 core_borderWidthVariants_2__1rbo53vsf core_borderBaseClass__1rbo53vsc core_foregroundVariants_1__1rbo53v1i core_backgroundVariants_6__1rbo53v17 core_backgroundHoverVariants_7__1rbo53v24 core_flexDirectionVariants_row__1rbo53vnn typography_fontSizeVariantVars_1__16o63x1c capsize_capsizeStyle__1d0g9qk4 typography__16o63x1m"
      >
        <div
          class="core_textAlignVariants_center__1rbo53v2f core_borderTransparentClass__1rbo53vt1 typography_fontSizeVariantVars_1__16o63x1c capsize_capsizeStyle__1d0g9qk4 typography__16o63x1m"
        >
          Click Me
        </div>
      </button>
    `);
  });
});
