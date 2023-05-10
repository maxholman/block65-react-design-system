import { Fragment, type FC } from 'react';
import type {
  BackgroundHover,
  BorderHoverVariant,
  BorderVariant,
  BorderWidth,
  Shadow,
} from '../../lib/core.css.js';
import {
  Block,
  Box,
  Code,
  Flex,
  Heading,
  Inline,
  Panel,
  Text,
  type Background,
  type Tone,
} from '../../lib/main.js';

export const CorePage: FC = () => (
  <>
    <Panel variant="ghost">
      <Box component="article">This is a box component as an article</Box>
      <Box component="div">
        This is another box component as a <Code>div</Code>
      </Box>
      <Box component="section">This is also a box component as a section</Box>
    </Panel>

    <Panel variant="ghost">
      <Block>
        <Box component="time" dateTime={new Date().toJSON()}>
          {new Date().toJSON()}
        </Box>
      </Block>
    </Panel>

    <Panel variant="ghost">
      {(
        ['strong', 'normal', 'subtle' /* , 'transparent' */] as BorderVariant[]
      ).map((borderHover) => (
        <Block key={borderHover}>
          {(
            [
              'strong',
              'normal',
              'subtle' /* , 'transparent' */,
            ] as BorderHoverVariant[]
          ).map((border) => (
            <Panel key={border}>
              <Heading>
                border={border}, hover={borderHover}
              </Heading>
              <Inline key={borderHover}>
                {(
                  [
                    'accent',
                    // 'critical',
                    // 'neutral',
                    // 'positive',
                    // 'promo',
                    // 'info',
                    // 'warn',
                  ] as Tone[]
                ).map((tone) => (
                  <Fragment key={tone}>
                    {(['0', '1', '2', '3', '4'] as Background[]).map(
                      (variant) => (
                        <Flex
                          flexDirection="row"
                          tone={tone}
                          background={variant}
                          borderVariant={border}
                          borderHover={borderHover}
                          rounded="medium"
                          padding="5"
                        >
                          {variant}
                        </Flex>
                      ),
                    )}
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
            {(['none', '0', '1', '2', '3', '4'] as Background[]).map(
              (background) =>
                (['none', '0', '1', '2', '3', '4'] as BackgroundHover[]).map(
                  (hover) => (
                    <Flex
                      key={hover}
                      flexDirection="row"
                      tone={tone}
                      background={background}
                      backgroundHover={hover}
                      rounded="medium"
                      paddingBlock="5"
                      paddingInline="7"
                      boxShadow="2"
                    >
                      {tone} bg:{background} ho:{hover}
                    </Flex>
                  ),
                ),
            )}
          </Inline>
        ))}
      </Block>

      <Panel padding="13" space="13" background="1">
        {(['1', '2', '3', '4', '5'] as Shadow[]).map((shadow) => (
          <Flex
            key={shadow}
            flexDirection="row"
            background="0"
            backgroundHover="1"
            borderVariant="normal"
            borderWidth="3"
            borderTone="accent"
            borderHover="strong"
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
              borderTone="accent"
              borderVariant="normal"
              borderHover="strong"
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
