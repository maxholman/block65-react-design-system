import { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from './use-debounced.js';
import { useWithBusyError } from './use-busy-error.js';
import { useAbortController } from './use-abort-controller.js';

interface Question {
  name: string; // The record name requested
  type: number; // The type of DNS record requested
}

enum RecordType {
  A = 1,
  CNAME = 5,
  AAAA = 28,
}

export const enum ReturnCode {
  NoError = 0,
  FormErr = 1,
  ServFail = 2,
  NXDomain = 3,
  Refused = 5,
}

interface Answer {
  name: string; // The record owner
  type: RecordType; // The type of DNS record
  TTL: number; // The number of seconds the answer can be stored in cache
  data: string; // The value of the DNS record for the given name and type. The data will be in text for standardized record types and in hex for unknown types.
}

interface DoHResponse {
  Status: ReturnCode;
  TC: boolean; // truncated bit was set
  RD: boolean; // Recursive Desired
  RA: boolean; // Recursion Available
  AD: boolean; // verified with DNSSEC
  CD: boolean; // client asked to disable DNSSEC validation
  Question: Question[];
  Answer: Answer[];
}

export function useDoH(name: string | null) {
  const { busy, error, exec } = useWithBusyError();
  const [response, setResponse] = useState<DoHResponse | null>(null);
  const getSignal = useAbortController();

  const dnsLookup = useCallback(
    (signal?: AbortSignal) => {
      if (!name) {
        setResponse(null);
        return;
      }

      const url = Object.assign<URL, Partial<URL>>(
        new URL('https://cloudflare-dns.com/dns-query'),
        {
          search: new URLSearchParams({
            name,
          }).toString(),
        },
      );

      exec(async () => {
        const dohResponse = await fetch(url.toString(), {
          method: 'get',
          headers: {
            accept: 'application/dns-json',
          },
          ...(signal && { signal }),
        }).then((res): Promise<DoHResponse> => {
          if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
          }
          return res.json();
        });
        setResponse(dohResponse);
      });
    },
    [name, exec],
  );

  const dnsLookupDebounced = useDebouncedCallback(dnsLookup, 500);

  useEffect(() => {
    dnsLookupDebounced(getSignal());
  }, [getSignal, dnsLookupDebounced, name]);

  return { busy, error, response };
}
