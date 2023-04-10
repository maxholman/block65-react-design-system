import { type FC } from 'react';
import {
  Button,
  Callout,
  Dialog,
  Form,
  FormInput,
  Inline,
  Modal,
  Panel,
  useDialog,
  useModal,
} from '../../lib/main.js';

export const ModalPage: FC = () => {
  const [modal] = useModal();
  const [dialog] = useDialog();

  return (
    <>
      <Panel variant="ghost">
        <Inline>
          <Button onClick={() => modal.showModal()}>modal</Button>
        </Inline>

        <Inline>
          <Button onClick={() => dialog.showModal()}>dialog</Button>
        </Inline>

        {modal.open && (
          <Modal {...modal} heading="Hi, I'm a Modal!">
            <Callout tone="promo">You can press ESC to close</Callout>
            <Form>
              <FormInput autoFocus label="Name" />
            </Form>
          </Modal>
        )}

        <Dialog {...dialog} heading="Hi, I'm a Dialog!">
          <Callout tone="info">You can press ESC to close</Callout>
          <Form method="dialog">
            <FormInput autoFocus label="Name" />
          </Form>
        </Dialog>
      </Panel>
    </>
  );
};
