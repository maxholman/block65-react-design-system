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
        class="buttons_buttonClassName__jqajj21 layout_flexWrapVariants_nowrap__17vpgba3 layout_alignItemsVariants_center__17vpgba8 layout_justifyContentVariants_center__17vpgbak core_viewportStyleVariants_2__1rbo53vmg core_viewportStyleVariants_6__1rbo53veo core_viewportStyleVariants_7__1rbo53vc2 core_borderWidthVariants_2__1rbo53vqi core_borderBaseClass__1rbo53vqf core_flexDirectionVariants_row__1rbo53vlt typography_capSizeVariants_1__16o63x2v typography_capSizeVariantVars_1__16o63x1z typography_fontSizeVariantTextStyles_1__16o63x1f typography__16o63x1e capsize_capsizeStyle__1czb7fk4 typography__16o63x1d"
      >
        <div
          class="core_textAlignVariants_center__1rbo53vr typography_capSizeVariants_1__16o63x2v typography_capSizeVariantVars_1__16o63x1z typography_fontSizeVariantTextStyles_1__16o63x1f typography__16o63x1e capsize_capsizeStyle__1czb7fk4 typography__16o63x1d"
        >
          Click Me
        </div>
      </button>
    `);
  });
});
