import { Fragment, type FC } from 'react';
import { Callout, HelpIcon, type CalloutVariant } from '../../lib/main.js';

export const CalloutPage: FC = () => (
  <>
    {(
      ['info', 'warning', 'critical', 'success'] satisfies CalloutVariant[]
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
