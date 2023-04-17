import type { FC } from 'react';
import {
  Block,
  Box,
  Code,
  Flex,
  Heading,
  Inline,
  Panel,
  type Tone,
  type Background,
  Text,
} from '../../lib/main.js';
import type { Shadow } from '../../lib/core.css.js';

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
      <Heading>borderWeight</Heading>
      <Block>
        <Box tone="critical" borderWeight="none" rounded="medium" padding="3">
          <Code>borderWeight="none"</Code>
        </Box>
        <Box tone="critical" borderWeight="strong" rounded="medium" padding="3">
          <Code>borderWeight="strong"</Code>
        </Box>
        <Box tone="promo" borderWeight="strong" rounded="medium" padding="3">
          <Code>borderWeight="strong"</Code>
        </Box>
        <Box tone="positive" borderWeight="subtle" rounded="medium" padding="3">
          <Code>borderWeight="subtle"</Code>
        </Box>
      </Block>
    </Panel>

    <Panel variant="ghost">
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
          <Inline>
            {(
              [
                'bright',
                'standard',
                'subtle',
                'sheer',
                'transparent',
              ] as Background[]
            ).map((background) => (
              <Flex
                flexDirection="row"
                tone={tone}
                background={background}
                rounded="medium"
                paddingBlock="5"
                paddingInline="7"
                boxShadow="2"
              >
                {background} {tone}
              </Flex>
            ))}
          </Inline>
        ))}
      </Block>

      <Panel padding="13" space="13">
        {(['1', '2', '3', '4', '5'] as Shadow[]).map((shadow) => (
          <Flex
            flexDirection="row"
            boxShadow={shadow}
            rounded="medium"
            paddingBlock="5"
            paddingInline="7"
          >
            <Text>boxShadow={shadow}</Text>
          </Flex>
        ))}
      </Panel>
      <Panel>
        <Block>
          <Box
            tone="critical"
            borderWeight="strong"
            rounded="medium"
            padding="3"
          >
            <Code>borderWeight="strong"</Code>
          </Box>
          <Box tone="promo" borderWeight="strong" rounded="medium" padding="3">
            <Code>borderWeight="strong"</Code>
          </Box>
          <Box
            tone="positive"
            borderWeight="subtle"
            rounded="medium"
            padding="3"
          >
            <Code>borderWeight="subtle"</Code>
          </Box>
        </Block>
      </Panel>
    </Panel>
  </>
);
