import { Fragment, type FC } from 'react';
import {
  Block,
  DesignSystem,
  Grid,
  Heading,
  Text,
  type ColorScheme,
  type Tone,
  type Swatch,
  Flex,
  Inline,
  Panel,
  type BorderWidth,
  type Shadow,
} from '../../lib/main.js';

const swatches = [...Array(10)].map((_, idx) => `${idx}` as Swatch);

export const SwatchesPage: FC = () => (
  <>
    <Grid cols={1}>
      {(['light', 'dark'] satisfies ColorScheme[]).map((scheme) => (
        <Block key={scheme}>
          <Heading>{scheme}</Heading>
          <DesignSystem colorScheme={scheme} padding="10" background="0">
            <Grid>
              {(
                [
                  'neutral',
                  'accent',
                  'critical',
                  'info',
                  'positive',
                  'promo',
                  'warn',
                ] satisfies Tone[]
              ).map((tone) => (
                <Block key={tone}>
                  <Heading>{tone}</Heading>
                  <Grid cols={1} key={tone}>
                    {(
                      [
                        // special
                        '0',

                        // muted
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',

                        // standard
                        '6',
                        '7',
                        '8',
                        '9',
                        '10',

                        // vibrant
                        '11',
                        '12',
                        '13',
                        '14',
                        '15',
                      ] as Swatch[]
                    ).map((swatch) => (
                      <Fragment key={swatch}>
                        <Block
                          padding="5"
                          background={swatch}
                          boxShadow="1"
                          backgroundHover={(+swatch + 1).toString() as Swatch}
                          tone={tone}
                        >
                          <Heading>Swatch {swatch}</Heading>
                          <Text>Yeah, swatch {swatch}</Text>
                        </Block>
                      </Fragment>
                    ))}
                  </Grid>
                </Block>
              ))}
            </Grid>
          </DesignSystem>
        </Block>
      ))}
    </Grid>

    <Panel variant="ghost">
      {swatches.map((borderHover) => (
        <Block key={borderHover}>
          {swatches.map((border) => (
            <Panel key={border}>
              <Heading>
                border={border}, hover={borderHover}
              </Heading>
              <Inline key={borderHover}>
                {(
                  [
                    'accent',
                    'critical',
                    'neutral',
                    'positive',
                    'promo',
                    'info',
                    'warn',
                  ] as Tone[]
                ).map((tone) => (
                  <Fragment key={tone}>
                    {swatches.map((variant) => (
                      <Flex
                        key={variant}
                        flexDirection="row"
                        tone={tone}
                        background={variant}
                        border={border}
                        borderHover={borderHover}
                        rounded="medium"
                        padding="5"
                      >
                        {variant}
                      </Flex>
                    ))}
                  </Fragment>
                ))}
              </Inline>
            </Panel>
          ))}
        </Block>
      ))}
    </Panel>

    <Panel>
      <Heading>background</Heading>
      <Block>
        {(
          [
            'accent',
            'critical',
            'neutral',
            'positive',
            'promo',
            'info',
            'warn',
          ] as Tone[]
        ).map((tone) => (
          <Inline key={tone}>
            {swatches.map((background) =>
              swatches.map((backgroundHover) => (
                <Flex
                  key={backgroundHover}
                  flexDirection="row"
                  tone={tone}
                  background={background}
                  backgroundHover={backgroundHover}
                  rounded="medium"
                  paddingBlock="5"
                  paddingInline="7"
                  boxShadow="2"
                >
                  {tone} bg:{background} ho:{backgroundHover}
                </Flex>
              )),
            )}
          </Inline>
        ))}
      </Block>

      <Panel padding="13" space="13">
        {(['1', '2', '3', '4', '5'] as Shadow[]).map((shadow) => (
          <Flex
            key={shadow}
            flexDirection="row"
            background="0"
            backgroundHover="1"
            border="3"
            borderWidth="3"
            tone="accent"
            borderHover="3"
            boxShadow={shadow}
            rounded="medium"
            paddingBlock="5"
            paddingInline="7"
          >
            <Text>boxShadow={shadow}</Text>
          </Flex>
        ))}
      </Panel>

      <Inline space="2">
        {(['0', '1', '2', '3', '4', '5', '6', '7'] as BorderWidth[]).map(
          (borderWidth) => (
            <Flex
              key={borderWidth}
              flexDirection="row"
              background="0"
              backgroundHover="1"
              borderWidth={borderWidth}
              tone="accent"
              border="2"
              borderHover="5"
              boxShadow="2"
              rounded="medium"
              paddingBlock="5"
              paddingInline="7"
              justifyContent="center"
            >
              <Text>{borderWidth}</Text>
            </Flex>
          ),
        )}
      </Inline>
    </Panel>
  </>
);
