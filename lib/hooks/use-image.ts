import { useCallback, useEffect, useState } from 'react';
import { useBusyError, useWithBusyError } from './use-busy-error.js';
import { useAbortController } from './use-abort-controller.js';

export function useImageStandard(src: string | null) {
  const [{ busy, error }, set] = useBusyError(!!src);

  useEffect(() => {
    if (!src) {
      set(false);
      return;
    }

    const image = new Image();

    function onLoad(this: HTMLImageElement) {
      set(false);
    }

    const onError = (err: ErrorEvent) => {
      set(err.error);
    };

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);

    set(true);
    image.src = src;

    return () => {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [src, set]);

  return {
    src,
    busy,
    error,
  };
}

export function useImage(src: string | null, withCors = false) {
  const [{ busy, error }, exec] = useWithBusyError(!!src);

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const getSignal = useAbortController();

  const fetchImage = useCallback(
    async (s: string) => {
      exec(async () => {
        try {
          const response = await fetch(s, {
            // mode: withCors ? 'cors' : 'no-cors',
            signal: getSignal(),
          });

          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }

          setImageSrc(
            withCors ? URL.createObjectURL(await response.blob()) : s,
          );
        } catch (err) {
          console.error(`Failed to fetch image: ${err}`);
        }
      });
    },
    [exec, getSignal, withCors],
  );

  useEffect(() => {
    if (!src) {
      return;
    }
    fetchImage(src);

    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [src, fetchImage, imageSrc]);

  return {
    src: imageSrc,
    busy,
    error,
  };
}

export function useFavicon(hostname: string | null) {
  const favicon = useImage(
    hostname ? `https://icons.colacube.dev/i/${hostname}` : null,
    // hostname ? `https://icons.duckduckgo.com/ip3/${hostname}.ico` : null,
    // hostname ? `https://www.google.com/s2/favicons?domain=${hostname}` : null,
  );

  return favicon;
}
