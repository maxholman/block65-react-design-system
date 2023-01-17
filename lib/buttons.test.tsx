// import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
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
        class="layout_flexRowVariants_nano__17vpgbaa layout_flexRow__17vpgba0 buttons_buttonVariantClasses_standard__jqajj25 buttons_base__jqajj22 tone_toneVariants_accent__y2da5n2"
        type="button"
      >
        <div>
          <span
            class="core_textOverflowVariants_ellipsis__1rbo53v1a core_textOverflowBase__1rbo53v19"
          >
            Click Me
          </span>
        </div>
      </button>
    `);
  });
});
