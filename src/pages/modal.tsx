import type { FC } from 'react';
import {
  Button,
  Dialog,
  Form,
  FormInput,
  Inline,
  Modal,
  useDialog,
  useModal,
} from '../../lib/main.js';
import { Callout, Panel } from '../reference-impl/main.js';
import { ExampleForm } from './components/ExampleForm.js';

export const ModalPage: FC = () => {
  const modal = useModal();
  const modal2 = useModal();
  const modal3 = useModal();
  const [dialog] = useDialog();

  return (
    <>
      <Panel variant="ghost">
        <Inline>
          <Button onClick={() => modal.show()}>modal</Button>
        </Inline>

        <Inline>
          <Button onClick={() => modal2.show()}>modal2</Button>
        </Inline>

        <Inline>
          <Button onClick={() => modal3.show()}>modal3</Button>
        </Inline>

        <Inline>
          <Button onClick={() => dialog.show()}>dialog</Button>
        </Inline>

        {modal.open && (
          <Modal {...modal} heading="Hi, I'm a Modal ggg qqqq!e">
            <Callout tone="promo">
              You can press ESC or click away to close
            </Callout>
            <Form>
              <FormInput autoFocus label="Name" />
            </Form>
          </Modal>
        )}

        {modal2.open && (
          <Modal
            dismissable={false}
            {...modal2}
            heading="Hi, I'm a Modal2 ggg qqqq!e"
          >
            <Callout tone="critical">You CANNOT press ESC to close</Callout>
            <Form>
              <FormInput autoFocus label="Name" />
            </Form>
            <Button onClick={() => modal2.close('dismiss')}>close</Button>
          </Modal>
        )}

        {modal3.open && (
          <Modal
            dismissable={false}
            {...modal2}
            heading="Hi, I'm a Modal2 ggg qqqq!e"
          >
            <Callout tone="critical">You CANNOT press ESC to close</Callout>
            <ExampleForm />
            <Button onClick={() => modal3.close('dismiss')}>close</Button>
          </Modal>
        )}

        <Dialog {...dialog} heading="Hi, I'm a Dialog ggg qqqq!">
          <Callout tone="info">You can press ESC to close</Callout>
          <Form method="dialog">
            <FormInput autoFocus label="Name" />
          </Form>
        </Dialog>
      </Panel>
    </>
  );
};
