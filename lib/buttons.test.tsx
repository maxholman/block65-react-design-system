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
        class="core_roundedVariants_medium__1rbo53v2 layout_alignItemsVariants_center__17vpgba5 layout_justifyContentVariants_center__17vpgbah core_flexDirectionVariants_row__1rbo53vkf core_viewport_all_space_2__1rbo53vl1 buttons_buttonVariantClasses_standard__jqajj25 buttons_base__jqajj22 tone_toneVariants_accent__y2da5n2"
        type="button"
      >
        <div>
          <span
            class="core_textOverflowVariants_ellipsis__1rbo53vk1 core_textOverflowBase__1rbo53vk0"
          >
            Click Me
          </span>
        </div>
      </button>
    `);
  });
});
