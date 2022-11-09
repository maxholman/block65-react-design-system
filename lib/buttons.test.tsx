import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { Button } from './buttons.js';

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
        class="buttons_buttonVariantClasses_standard__jqajj23 buttons_base__jqajj21"
      >
        <span
          class="layout_inlineClass__17vpgbah layout_flexRowVariants_small__17vpgbaa layout_flexRow__17vpgba0"
        >
          Click Me
        </span>
      </button>
    `);
  });
});
