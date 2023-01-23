import React from 'react';

// Credit @ford04 https://stackoverflow.com/questions/58469229
declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: ForwardedRef<T>) => ReactElement | null,
  ): (props: P & RefAttributes<T>) => ReactElement | null;
}
