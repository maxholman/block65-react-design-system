// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { FC, PropsWithChildren } from 'react';
import { describe, expect, it } from 'vitest';
import { DesignSystem } from '../main.js';
import { useStringLikeDetector } from './use-string-like.js';

const IsStringLikeTester: FC<PropsWithChildren> = (props) => {
  const isStringLike = useStringLikeDetector();
  return <div data-testid="result">{String(isStringLike(props.children))}</div>;
};

const StringMcStringFace: FC<PropsWithChildren> = (props) => (
  <div>{props.children}</div>
);

describe('Hooks', () => {
  it('passes string is string like', async () => {
    // ARRANGE
    render(
      <DesignSystem>
        <IsStringLikeTester>test</IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('true');
  });

  it('passes fragments with strings', async () => {
    // ARRANGE
    render(
      <DesignSystem>
        <IsStringLikeTester>
          <>test</>
          <>test</>
        </IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('true');
  });

  it('passes fragments with primitives', async () => {
    // ARRANGE
    render(
      <DesignSystem>
        <IsStringLikeTester>
          <>123</>
          <>test</>
          <>{null}</>
          <>{undefined}</>
          {undefined}
          {null}
          {true}
        </IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('true');
  });

  it('passes nested fragments with strings', async () => {
    // ARRANGE
    render(
      <DesignSystem>
        <IsStringLikeTester>
          <>
            <>
              <>test</>
            </>
          </>
        </IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('true');
  });

  it('fails with element', async () => {
    // ARRANGE
    render(
      <DesignSystem>
        <IsStringLikeTester>
          <h1>NOT STRING LIKE</h1>
        </IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('false');
  });

  it('fails nested fragments with element', async () => {
    // ARRANGE
    render(
      <DesignSystem>
        <IsStringLikeTester>
          <>
            <>
              <>
                <h1>BAD</h1>
              </>
            </>
          </>
        </IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('false');
  });

  it('passes with custom string like', async () => {
    // ARRANGE
    render(
      <DesignSystem stringLikeComponents={[StringMcStringFace]}>
        <IsStringLikeTester>
          <StringMcStringFace>WORKS</StringMcStringFace>
        </IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('true');
  });

  it('passes with fragment nested custom string like', async () => {
    // ARRANGE
    render(
      <DesignSystem stringLikeComponents={[StringMcStringFace]}>
        <IsStringLikeTester>
          <>
            <>
              <StringMcStringFace>WORKS</StringMcStringFace>
            </>
          </>
        </IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('true');
  });

  it('fails with fragment nested custom string like + bad', async () => {
    // ARRANGE
    render(
      <DesignSystem stringLikeComponents={[StringMcStringFace]}>
        <IsStringLikeTester>
          <>
            <>
              <StringMcStringFace>GOOD</StringMcStringFace>
              <h1>BAD</h1>
            </>
          </>
        </IsStringLikeTester>
      </DesignSystem>,
    );

    // ASSERT
    expect(screen.getByTestId('result')).toHaveTextContent('false');
  });
});
