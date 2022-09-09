import { assignInlineVars } from '@vanilla-extract/dynamic';
import { LoremIpsum } from 'lorem-ipsum';
import type { FC } from 'react';
import 'the-new-css-reset';
import { Button } from '../lib/buttons.js';
import { Form, FormInput } from '../lib/forms.js';
import { Block, Inline } from '../lib/layout.js';
import { Panel } from '../lib/panel.js';
import { Heading, Text } from '../lib/typography.js';
import { localThemeVars } from './App.css.js';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const App: FC = () => {
  const brandColor = 'red';
  const fontFamily = 'Arial';

  return (
    <>
      <Inline
        space="large"
        component="main"
        style={assignInlineVars(localThemeVars, {
          color: { brand: brandColor },
          font: { body: fontFamily },
        })}
      >
        <Block space="large" component="section">
          <Block space="large">
            <Heading level="1">{lorem.generateSentences(1)}</Heading>

            <Inline space="standard">
              <Text>{lorem.generateParagraphs(1)}</Text>
              <Text>{lorem.generateParagraphs(1)}</Text>
              <Text>{lorem.generateParagraphs(1)}</Text>
            </Inline>
          </Block>

          <Block space="standard" align="center">
            <Heading level="2">col row text0</Heading>
            <Text>{lorem.generateParagraphs(1)}</Text>
            <Text>{lorem.generateParagraphs(1)}</Text>
          </Block>

          <Panel space="huge" elevation="elevation0">
            <Panel space="huge" elevation="elevation1">
              <Panel space="huge" elevation="elevation2">
                <Heading level="2">col row text0</Heading>
                <Form>
                  <FormInput
                    type="text"
                    label="First name"
                    defaultValue="Queen"
                    message="Don't say Queen"
                  />
                  <FormInput
                    type="text"
                    label="Last name"
                    secondaryLabel="Required"
                    defaultValue="Town"
                  />
                  <FormInput
                    type="text"
                    label="Birth Month"
                    defaultValue="Feb"
                  />
                  <FormInput type="checkbox" label="Over 18" />
                  <Block space="small">
                    <Button>Save</Button>
                    <Button variant="subtle">Cancel</Button>
                    <Button variant="ghost">Help</Button>
                  </Block>
                </Form>
              </Panel>
            </Panel>
          </Panel>
        </Block>
      </Inline>
    </>
  );
};
