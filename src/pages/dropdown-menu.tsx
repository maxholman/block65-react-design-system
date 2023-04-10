import { useRef, useState, type FC, useEffect } from 'react';
import { Block, Heading, Panel } from '../../lib/main.js';

export const DropdownMenuPage: FC = () => {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const el = ref.current?.contentWindow;

    const fn = () => {
      if (el) {
        setHeight(el.document.body.scrollHeight);
      }
    };

    el?.addEventListener('load', fn);
    el?.addEventListener('resize', fn);

    return () => {
      el?.removeEventListener('load', fn);
      el?.removeEventListener('resize', fn);
    };
  }, []);

  return (
    <Panel variant="ghost" flexGrow>
      <Heading level="1">Best dropdown eva</Heading>
      <Block
        component="iframe"
        seamless
        frameBorder=""
        src="/dropdown-menu-iframe"
        ref={ref}
        {...{ ...(height && { height: `${height}px` }) }}
      />
    </Panel>
  );
};
