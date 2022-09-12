import { LoremIpsum } from 'lorem-ipsum';
import type { FC } from 'react';
import 'the-new-css-reset';
import { Button } from '../lib/buttons.js';
import {
  Form,
  FormInput,
  FormInputCheckbox,
  FormInputCheckboxGroup,
  FormInputRadio,
  FormInputRadioGroup,
  FormSelect,
} from '../lib/forms.js';
import { Block, Inline } from '../lib/layout.js';
import { Panel } from '../lib/panel.js';
import { Heading, Text } from '../lib/typography.js';

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
  const brandColor = 'purple';
  const fontFamily = 'Arial';

  return (
    <>
      <Inline
        space="large"
        component="main"
        style={{ '--accent-color': brandColor, '--font-family': fontFamily }}
        // style={assignInlineVars(localThemeVars, {
        //   color: { brand: brandColor },
        //   font: { body: fontFamily },
        // })}
      >
        <Block space="large" component="section">
          <Panel space="huge" elevation="elevation0">
            <Panel space="huge" elevation="elevation1">
              <Panel space="huge" elevation="elevation2">
                <Heading level="1">Tight tight tight!</Heading>
                <Heading level="3">Thats what Tuco says anyway.</Heading>
                <Form space="huge">
                  <FormInput
                    type="text"
                    label="Pronoun"
                    defaultValue="Them"
                    readOnly
                    message="LOL"
                  />
                  <FormInput
                    type="text"
                    label="First name"
                    defaultValue="Queen"
                    message="Don't write Queen in this field please"
                  />
                  <FormInput
                    type="text"
                    label="Last name"
                    secondaryLabel="Required"
                    defaultValue="Town"
                  />
                  <FormSelect label="Birth Month" defaultValue="Feb">
                    <option></option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                  </FormSelect>
                  <FormSelect
                    multiple
                    label="Other Months you might like"
                    onChange={(e) => {
                      console.log(e);
                    }}
                    value={['Feb', 'Mar']}
                  >
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                  </FormSelect>
                  <FormInputRadioGroup label="Your age" name="age">
                    <FormInputRadio label="Under 18" />
                    <FormInputRadio label="18-25" defaultChecked />
                    <FormInputRadio label="35+" />
                  </FormInputRadioGroup>
                  <FormInputCheckboxGroup label="Partners age" name="age2">
                    <FormInputCheckbox
                      label="Under 18"
                      defaultChecked
                      message="If you choose this option you are not allowed to use this site"
                    />
                    <FormInputCheckbox label="18-25" />
                    <FormInputCheckbox label="35+" />
                  </FormInputCheckboxGroup>
                  <Block>
                    <Button>Save</Button>
                    <Button variant="subtle">Cancel</Button>
                    <Button variant="ghost">Help</Button>
                  </Block>
                </Form>
              </Panel>
            </Panel>
          </Panel>

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
        </Block>
      </Inline>
    </>
  );
};
