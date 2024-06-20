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
  Heading,
} from '../../../lib/main.js';

export const ExampleForm: FC = () => (
  <Form>
    <FormInput
      type="text"
      label="Type of Helicopter"
      defaultValue="Bell 47"
      readOnly
      secondaryLabel="(read only)"
      message="You are not allowed to change this field"
    />
    <FormInput
      type="text"
      label="First name"
      name="first"
      defaultValue="Queen"
      description="What even is the description?"
      message="Don't write Queen in this field please"
    />
    <FormInputEmail
      label="Email Address"
      name="email"
      message="Work email address only"
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
      message="Tap to reveal"
      behaviour="reveal"
    />
    <FormInputPassword
      label="Password"
      name="password"
      defaultValue="verysecret"
      behaviour="toggle"
      message="Tap to toggle"
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
        message="Tap to reveal"
        behaviour="reveal"
      />
      <FormInputPassword
        label="Password"
        name="password"
        defaultValue="verysecret"
        behaviour="toggle"
        message="Tap to toggle"
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
      description="Choose 2 only please"
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
      <FormInputCheckbox label={<Heading>Weird Heading Label</Heading>} />
    </FormInputCheckboxGroup>
    <Inline>
      <Button variant="primary">Save</Button>
      <Button variant="default">Reset</Button>
      <Button variant="danger">Delete</Button>
    </Inline>
  </Form>
);
