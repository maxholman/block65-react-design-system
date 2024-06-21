import { clsx } from 'clsx';
import { forwardRef, type SVGProps } from 'react';
import { iconClassName } from './icons.css.js';

export type IconProps = SVGProps<SVGSVGElement>;

export const InfoIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      fill="currentColor"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2 2 20 20"
      className={clsx([className, iconClassName])}
      {...props}
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>{' '}
      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
    </svg>
  ),
);

export const AttentionIcon = InfoIcon;
export const CriticalIcon = InfoIcon;
export const PositiveIcon = InfoIcon;

export const HelpIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className={clsx([className, iconClassName])}
      fill="currentColor"
      viewBox="2 2 20 20"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 8c0-2.21-1.79-4-4-4s-4 1.79-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2a1 1 0 0 0-1 1v2h2v-1.14A3.993 3.993 0 0 0 16 10zm-3 6h-2v2h2v-2z"></path>{' '}
    </svg>
  ),
);

export const CloseIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className={clsx([className, iconClassName])}
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z" />
    </svg>
  ),
);

// Trimmed version of IoMenu
export const MenuIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className={clsx([className, iconClassName])}
      viewBox="64 128 384 256"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      {...props}
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="M88 152h336M88 256h336M88 360h336"
      ></path>
    </svg>
  ),
);

export const ArrowBackIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className={clsx([className, iconClassName])}
      viewBox="0 0 512 512"
      {...props}
    >
      <polyline
        points="244 400 100 256 244 112"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '48px',
        }}
      />
      <line
        x1="120"
        y1="256"
        x2="412"
        y2="256"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '48px',
        }}
      />
    </svg>
  ),
);

export const ArrowForwardIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className={clsx([className, iconClassName])}
      viewBox="0 0 512 512"
      {...props}
    >
      <polyline
        points="268 112 412 256 268 400"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '48px',
        }}
      />
      <line
        x1="392"
        y1="256"
        x2="100"
        y2="256"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '48px',
        }}
      />
    </svg>
  ),
);

export const ClipboardIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      className={clsx([className, iconClassName])}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M11.3495 3.83619C11.2848 4.04602 11.25 4.26894 11.25 4.5C11.25 4.91421 11.5858 5.25 12 5.25H16.5C16.9142 5.25 17.25 4.91421 17.25 4.5C17.25 4.26894 17.2152 4.04602 17.1505 3.83619M11.3495 3.83619C11.6328 2.91757 12.4884 2.25 13.5 2.25H15C16.0116 2.25 16.8672 2.91757 17.1505 3.83619M11.3495 3.83619C10.9739 3.85858 10.5994 3.88529 10.2261 3.91627C9.09499 4.01015 8.25 4.97324 8.25 6.10822V8.25M17.1505 3.83619C17.5261 3.85858 17.9006 3.88529 18.2739 3.91627C19.405 4.01015 20.25 4.97324 20.25 6.10822V16.5C20.25 17.7426 19.2426 18.75 18 18.75H15.75M8.25 8.25H4.875C4.25368 8.25 3.75 8.75368 3.75 9.375V20.625C3.75 21.2463 4.25368 21.75 4.875 21.75H14.625C15.2463 21.75 15.75 21.2463 15.75 20.625V18.75M8.25 8.25H14.625C15.2463 8.25 15.75 8.75368 15.75 9.375V18.75M7.5 15.75L9 17.25L12 13.5"
        stroke="#0F172A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

// BiHide
export const PasswordVisibleIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      className={clsx([className, iconClassName])}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z"></path>
      <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>{' '}
    </svg>
  ),
);

// BiShowAlt
export const PasswordInvisibleIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      className={clsx([className, iconClassName])}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path>
    </svg>
  ),
);

// FcGlobe
export const GlobeColorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx([className, iconClassName])}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="3 3 42 42"
      ref={ref}
      {...props}
    >
      <path
        fill="#7CB342"
        stroke="none"
        d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z"
      ></path>
      <path
        fill="#0277BD"
        stroke="none"
        d="M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24 12.3 3 24 3s21 9.3 21 21zm-21.2 9.7c0-.4-.2-.6-.6-.8-1.3-.4-2.5-.4-3.6-1.5-.2-.4-.2-.8-.4-1.3-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7 0-.2 0-.6-.4-.6-.4-.2-.8.2-1.3 0-.2-.2-.2-.4-.2-.6 0-.6.4-1.3.8-1.7.6-.4 1.3.2 1.9.2.2 0 .2 0 .4.2.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2.2-1.1.2-2.1.4-3.2 0-1.3 1.3-2.5 2.3-2.9.4-.2.6.2 1.1 0 1.3-.4 4.4-1.7 3.8-3.4-.4-1.5-1.7-2.9-3.4-2.7-.4.2-.6.4-1 .6-.6.4-1.9 1.7-2.5 1.7-1.1-.2-1.1-1.7-.8-2.3.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2.2 0 .4 0 .6-.2.2-.2.2-.2.2-.4 0-.6-.6-1.3-1-1.7-.4-.4-1.1-.8-1.7-1.1-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4-.2 1-.4 1.9.2 2.9.6 1.3 1.9 2.5 3.2 3.4.8.6 2.5.6 3.4 1.7.6.8.4 1.9.4 2.9 0 1.3.8 2.3 1.3 3.4.2.6.4 1.5.6 2.1 0 .2.2 1.5.2 1.7 1.3.6 2.3 1.3 3.8 1.7.2 0 1-1.3 1-1.5.6-.6 1.1-1.5 1.7-1.9.4-.2.8-.4 1.3-.8.4-.4.6-1.3.8-1.9.1-.5.3-1.3.1-1.9zm.4-19.4c.2 0 .4-.2.8-.4.6-.4 1.3-1.1 1.9-1.5.6-.4 1.3-1.1 1.7-1.5.6-.4 1.1-1.3 1.3-1.9.2-.4.8-1.3.6-1.9-.2-.4-1.3-.6-1.7-.8-1.7-.4-3.1-.6-4.8-.6-.6 0-1.5.2-1.7.8-.2 1.1.6.8 1.5 1.1 0 0 .2 1.7.2 1.9.2 1-.4 1.7-.4 2.7 0 .6 0 1.7.4 2.1h.2zM41.8 29c.2-.4.2-1.1.4-1.5.2-1 .2-2.1.2-3.1 0-2.1-.2-4.2-.8-6.1-.4-.6-.6-1.3-.8-1.9-.4-1.1-1-2.1-1.9-2.9-.8-1.1-1.9-4-3.8-3.1-.6.2-1 1-1.5 1.5-.4.6-.8 1.3-1.3 1.9-.2.2-.4.6-.2.8 0 .2.2.2.4.2.4.2.6.2 1 .4.2 0 .4.2.2.4 0 0 0 .2-.2.2-1 1.1-2.1 1.9-3.1 2.9-.2.2-.4.6-.4.8 0 .2.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6-.2.4 0 1.1-.2 1.5-.2 1.1-.8 1.9-1.3 2.9-.4.6-.6 1.3-1 1.9 0 .8-.2 1.5.2 2.1 1 1.5 2.9.6 4.4 1.3.4.2.8.2 1.1.6.6.6.6 1.7.8 2.3.2.8.4 1.7.8 2.5.2 1 .6 2.1.8 2.9 1.9-1.5 3.6-3.1 4.8-5.2 1.5-1.3 2.1-3 2.7-4.7z"
      ></path>
    </svg>
  ),
);

// IoMdArrowDropdown
export const MenuDropdownArrowIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="6 10 10 2"
      ref={ref}
      {...props}
    >
      <g stroke="none">
        <path d="m12 12-4-4h8z"></path>
      </g>
    </svg>
  ),
);
