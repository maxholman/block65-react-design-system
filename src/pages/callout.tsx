import { Fragment, type FC } from 'react';
import { Callout, HelpIcon } from '../../lib/main.js';
import type { PurposeVariant } from '../../lib/purpose.css.js';

export const CalloutPage: FC = () => (
  <>
    {(
      [
        'default',
        'info',
        'attention',
        'critical',
        'positive',
      ] satisfies PurposeVariant[]
    ).map((variant) => (
      <Fragment key={variant}>
        <Callout variant={variant}>{variant}</Callout>
        <Callout variant={variant}>pqLOOIIjjjIIFFFliIpyyyy</Callout>
        <Callout icon={<HelpIcon />} variant={variant}>
          {variant}. {variant}. {variant}. {variant}. {variant}. {variant}.{' '}
          {variant}. {variant}. {variant}. {variant}. {variant}. {variant}.{' '}
          {variant}. {variant}. {variant}. {variant}. {variant}. {variant}.{' '}
          {variant}. {variant}. {variant}. {variant}.
        </Callout>
      </Fragment>
    ))}
  </>
);
