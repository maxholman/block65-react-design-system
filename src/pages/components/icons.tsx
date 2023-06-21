import type { FC, SVGProps } from 'react';

export const SunIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

export const CrescentMoonIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="1.2 1 48 48"
  >
    <path d="M25.1 2a23 23 0 1 0 .2 0zm0 3a20 20 0 1 1 0 40 25 25 0 0 0 0-40" />
  </svg>
);
