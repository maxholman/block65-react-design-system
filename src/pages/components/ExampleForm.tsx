import type { FC } from 'react';
import {
  Block,
  Form,
  FormInput,
  FormInputCheckbox,
  FormInputCheckboxGroup,
  FormInputEmail,
  FormInputOrigin,
  FormInputPassword,
  FormInputRadio,
  FormInputRadioGroup,
  FormSelect,
  FormTextArea,
  Grid,
  Inline,
  Strong,
  TextLink,
  Button,
  ExactText,
} from '../../../lib/main.js';

export const ExampleForm: FC = () => (
  <Form>
    <FormInput
      type="text"
      label={<blockquote>Type of Helicopter</blockquote>}
      name="pronoun"
      defaultValue="Bell 47"
      readOnly
      secondaryLabel="(readonly)"
      message="You are not allowed to change this field"
    />
    <FormInput
      type="text"
      label="First name"
      name="first"
      defaultValue="Queen"
      description="What even is the description?"
      message={<ExactText>Don't write Queen in this field please</ExactText>}
    />
    <FormInputEmail
      label="Email Address"
      name="email"
      message={<ExactText>Work email address only</ExactText>}
    />
    <FormInputOrigin
      label="Origin"
      name="origin"
      defaultValue=""
      message="Jeepers creepers"
    />
    <FormInputPassword
      label="Password"
      name="password"
      defaultValue="secret"
      message={<ExactText>Tap to reveal</ExactText>}
      behaviour="reveal"
    />
    <FormInputPassword
      label="Password"
      name="password"
      defaultValue="verysecret"
      behaviour="toggle"
      message={<ExactText>Tap to toggle</ExactText>}
    />

    <FormSelect
      label="Birth Month"
      defaultValue="Feb"
      message={
        <>
          Feb is the <Strong>best</Strong> month btw
        </>
      }
    >
      <option />
      <option value="Jan">Jan</option>
      <option value="Feb">Feb</option>
      <option value="Mar">Mar</option>
      <option value="Apr">Apr</option>
    </FormSelect>

    <Grid
      cols={{
        all: 2,
        mobile: 1,
      }}
    >
      <FormInputPassword
        label="Password"
        name="password"
        defaultValue="secret"
        message={<ExactText>Tap to reveal</ExactText>}
        behaviour="reveal"
      />
      <FormInputPassword
        label="Password"
        name="password"
        defaultValue="verysecret"
        behaviour="toggle"
        message={<ExactText>Tap to toggle</ExactText>}
      />
    </Grid>

    <FormInputEmail
      label="Username"
      name="username"
      autoComplete="username"
      description="This is an email address"
    />

    <FormInput
      type="text"
      label="Middle name"
      name="middle"
      placeholder='Optional, e.g. "Elizabeth"'
      message="No need to be embarrassed"
    />

    <Grid
      cols={{
        all: 2,
        mobile: 1,
      }}
    >
      <FormInput type="time" label="Inconsistent" message="Heights" />
      <FormInput type="text" label="Heights" message="Inconsistent" />
    </Grid>

    <FormInput
      type="text"
      label="Last name"
      name="last"
      secondaryLabel="(optional)"
      tertiaryLabel={
        <TextLink href="#">{/* <IconHelp /> */}Read more</TextLink>
      }
      defaultValue="Royale"
    />
    <FormTextArea
      type="text"
      label="Description"
      name="description"
      tertiaryLabel={
        <TextLink href="#">{/* <IconHelp /> */}Wild huh!</TextLink>
      }
      defaultValue="Royale"
      rows={5}
    />

    <FormSelect
      multiple
      label="Other months you might like"
      description={<ExactText>Choose 2 only please</ExactText>}
      defaultValue={['Feb', 'Mar']}
    >
      <option value="Jan">Jan</option>
      <option value="Feb">Feb</option>
      <option value="Mar">Mar</option>
      <option value="Apr">Apr</option>
    </FormSelect>
    <FormInputRadioGroup label="Your age" name="age">
      <FormInputRadio label="Under 18" message="Wah so young" />
      <FormInputRadio label="18-25" defaultChecked />
      <FormInputRadio label="35+" />
      <FormInputRadio
        label={
          <Block>
            <Inline>If you are older than 35, choose this option.</Inline>
            {/* <Inline>Ooh it wraps over multiple lines.</Inline> */}
          </Block>
        }
      />
    </FormInputRadioGroup>
    <FormInputCheckboxGroup label="Partners age" name="age2">
      <FormInputCheckbox
        label="Under 18"
        defaultChecked
        message="If you choose this option you are not allowed to use this site"
      />
      <FormInputCheckbox label="18-25" />
      <FormInputCheckbox label="35+" />
      <FormInputCheckbox disabled label="Dead" />
      <FormInputCheckbox disabled checked label="Dead last" />
      <FormInputCheckbox label={<h1>Heading Label</h1>} />
    </FormInputCheckboxGroup>
    <Block>
      <Button>Save</Button>
      <Button>Subtle</Button>
      <Button>Ghost</Button>
    </Block>
  </Form>
);
