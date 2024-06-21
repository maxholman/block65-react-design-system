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
        class="button_buttonVariantClassNames_default__1sytq440 button_buttonClassName__1sytq44p layout_flexWrapVariants_nowrap__17vpgba3 layout_alignItemsVariants_center__17vpgba8 layout_justifyContentVariants_center__17vpgbak box_viewportStyleVariants_2__fg8qdbmg box_viewportStyleVariants_5__fg8qdben box_viewportStyleVariants_6__fg8qdbc1 box_flexDirectionVariants_row__fg8qdblt"
        type="button"
      >
        <span
          class="box_textAlignVariants_center__fg8qdbr typography_capSizeVariantClassNames_1__16o63xj"
        >
          Click Me
        </span>
      </button>
    `);
  });
});
