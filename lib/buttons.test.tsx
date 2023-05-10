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
        class="tone_toneVariants_accent__y2da5n3 buttons_buttonClassName__jqajj21 layout_flexWrapVariants_nowrap__17vpgba3 layout_alignItemsVariants_center__17vpgba8 layout_justifyContentVariants_center__17vpgbak core_viewport_all_paddingBlock_3__1rbo53vf3 core_viewport_all_paddingInline_5__1rbo53vci core_textAlignVariants_center__1rbo53v13 core_roundedVariants_medium__1rbo53v2 tone_borderToneVariants_accent__y2da5nc core_borderWidthVariants_2__1rbo53vml core_borderBaseClass__1rbo53vma core_borderVariants_strong__1rbo53vme core_borderBaseClass__1rbo53vma core_borderHoverVariants_strong__1rbo53vmi core_borderBaseClass__1rbo53vma core_backgroundVariants_3__1rbo53vs core_flexDirectionVariants_row__1rbo53vmr core_viewport_all_space_2__1rbo53vne"
        type="button"
      >
        <div
          class="layout_alignItemsVariants_center__17vpgba8 layout_justifyContentVariants_center__17vpgbak core_flexDirectionVariants_row__1rbo53vmr core_viewport_all_space_2__1rbo53vne"
        >
          Click Me
        </div>
      </button>
    `);
  });
});
