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
        class="tone_toneVariants_accent__y2da5n3 buttons_buttonVariantClasses_standard__jqajj23 buttons_base__jqajj21 layout_flexWrapVariants_nowrap__17vpgba3 layout_justifyContentVariants_center__17vpgbak core_viewport_all_paddingBlock_3__1rbo53vdh core_viewport_all_paddingInline_4__1rbo53vb0 core_textAlignVariants_center__1rbo53v7 core_roundedVariants_medium__1rbo53v2 core_flexDirectionVariants_row__1rbo53vkl core_viewport_all_space_2__1rbo53vl7"
        type="button"
      >
        <div
          class="core_flexDirectionVariants_row__1rbo53vkl core_viewport_all_space_2__1rbo53vl7"
        >
          Click Me
        </div>
      </button>
    `);
  });
});
