import { forwardRef, useMemo, useState } from 'react';
import type { Falsy } from './core.css.js';
import { Box } from './core.js';
import { defaultFormInputSpace, formInputProps } from './forms-common.js';
import {
  formInputInnerClassName,
  formInputNotCheckRadioClassName,
  formInputHack,
  formInputOriginIcon,
  formInputOuterClassName,
} from './forms.css.js';
import {
  FormInputLabel,
  FormInputMessage,
  type FormInputProps,
} from './forms.js';
import { useAutoFocus } from './hooks/use-auto-focus.js';
import { useCombinedRefs } from './hooks/use-combined-refs.js';
import { useCustomValidity } from './hooks/use-custom-validity.js';
import { ReturnCode, useDoH } from './hooks/use-doh.js';
import { useIdWithDefault } from './hooks/use-id-with-default.js';
import { useFavicon } from './hooks/use-image.js';
import { useInputIsValid } from './hooks/use-input-is-valid.js';
import { GlobeColorIcon } from './icons.js';
import { Block, Inline } from './layout.js';
import { Spinner } from './loaders.js';
import type { Merge } from './types.js';

function guessUrl(url: string) {
  if (!url) {
    return null;
  }
  try {
    // NOTE: this is just a generic function, so we allow http://
    // You should check for https elsewhere if it's part of the validation
    const fqUrl = new URL(url.match(/^https?:\/\//) ? url : `https://${url}`);
    if (fqUrl.hostname.match(/\..{2,255}/) !== null) {
      return fqUrl;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(`URL "${String(url)}" caused ${Object(err).message}`);
  }
  return null;
}

export const FormInputOrigin = forwardRef<
  HTMLInputElement,
  Merge<
    Omit<FormInputProps, 'type'>,
    {
      value?: string;
      defaultValue?: string;
      validateOnLoad?: boolean;
      failOnError?: boolean;
      httpsOnly?: boolean;
      customValidity?: string | Falsy;
    }
  >
>(
  (
    {
      className,
      label,
      description,
      secondaryLabel,
      tertiaryLabel,
      message,
      messageTone,
      autoFocus,
      defaultValue,
      customValidity,
      onChange,
      ...props
    },
    incomingRef,
  ) => {
    const id = useIdWithDefault(props.id);
    const definitelyAutoFocus = useAutoFocus(autoFocus);

    const ourRef = useCustomValidity<HTMLInputElement>(customValidity);
    const ref = useCombinedRefs(incomingRef, ourRef);

    const {
      borderTone,
      borderWidth,
      background,
      paddingInline,
      tone,
      ...inputTypeProps
    } = formInputProps({
      type: 'url',
      ...props,
    });

    const fakeInputProps = {
      borderTone,
      borderWidth,
      background,
      paddingInline,
      tone,
    };

    const [value, setValue] = useState<string>(
      props.value || defaultValue || '',
    );

    const syntacticallyValidValueAsUrl = useMemo(
      () => guessUrl(value),
      [value],
    );

    const isValid = useInputIsValid(ourRef);

    const dns = useDoH(
      syntacticallyValidValueAsUrl
        ? syntacticallyValidValueAsUrl.hostname
        : null,
    );

    const finalValidity = useMemo(() => {
      if (syntacticallyValidValueAsUrl && !dns.busy && dns.response) {
        // eslint-disable-next-line default-case
        switch (dns.response.Status) {
          case ReturnCode.NoError:
            break;
          case ReturnCode.NXDomain:
          case ReturnCode.ServFail:
            return `${syntacticallyValidValueAsUrl.hostname} not found`;
          default:
            return `Error ${dns.response.Status}`;
        }
      }

      return customValidity || '';
    }, [customValidity, dns.busy, dns.response, syntacticallyValidValueAsUrl]);

    const favicon = useFavicon(
      syntacticallyValidValueAsUrl &&
        !dns.busy &&
        dns.response?.Question[0]?.name ===
          syntacticallyValidValueAsUrl.hostname
        ? syntacticallyValidValueAsUrl.hostname
        : null,
    );

    return (
      <Block className={className} space={defaultFormInputSpace}>
        {label && (
          <FormInputLabel
            htmlFor={id}
            secondary={secondaryLabel}
            tertiary={tertiaryLabel}
          >
            {label}
          </FormInputLabel>
        )}
        {description}

        <Inline
          rounded="medium"
          className={[formInputOuterClassName, formInputNotCheckRadioClassName]}
          flexWrap="nowrap"
          alignItems={null}
          {...fakeInputProps}
        >
          <Box
            component="input"
            ref={ref}
            // we switch to a text input if the value can be parsed into a valud
            // URL, so that we can accept values without leading https://
            type={syntacticallyValidValueAsUrl ? 'text' : 'url'}
            rounded="medium"
            padding="5"
            className={[
              formInputInnerClassName,
              formInputHack,
              formInputNotCheckRadioClassName,
            ]}
            autoFocus={definitelyAutoFocus}
            {...inputTypeProps}
            onChange={(e) => {
              onChange?.(e);
              setValue(e.target.value);
            }}
            value={value}
            {...props}
            id={id}
          />

          <Block
            component="div"
            rounded="medium"
            alignItems="center"
            justifyContent="center"
            paddingInline="5"
          >
            {dns.busy && <Spinner className={formInputOriginIcon} />}

            {!dns.busy && !favicon.error && favicon.src && (
              <img className={formInputOriginIcon} src={favicon.src} />
            )}

            {!dns.busy && (!favicon.src || favicon.error) && (
              <GlobeColorIcon className={formInputOriginIcon} />
            )}
          </Block>
        </Inline>

        {message && (
          <FormInputMessage
            messageTone={!isValid || finalValidity ? 'warn' : messageTone}
            message={finalValidity || message}
          />
        )}
      </Block>
    );
  },
);
