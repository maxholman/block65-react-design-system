import type { FC, SVGAttributes } from 'react';

export const InfoIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    fill="currentColor"
    strokeWidth="0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="2 2 20 20"
    {...props}
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>{' '}
    <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
  </svg>
);

export const HelpIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="2 2 20 20"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>{' '}
    <path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 8c0-2.21-1.79-4-4-4s-4 1.79-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2a1 1 0 0 0-1 1v2h2v-1.14A3.993 3.993 0 0 0 16 10zm-3 6h-2v2h2v-2z"></path>{' '}
  </svg>
);
