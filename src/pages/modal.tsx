import type { FC } from 'react';
import { useModal } from '../../lib/hooks/use-toggle.js';
import {
  Button,
  Callout,
  Form,
  FormInput,
  Inline,
  Panel,
} from '../../lib/main.js';
import { Modal } from '../../lib/modal.js';

export const ModalPage: FC = () => {
  const [show, toggleModal] = useModal();

  return (
    <>
      <Panel variant="ghost">
        <Inline>
          <Button onClick={() => toggleModal()}>Show Modal</Button>
        </Inline>

        <Modal
          show={show}
          onClose={() => toggleModal(false)}
          heading="Hi, I'm a Modal!"
        >
          <Callout tone="info">You can press ESC to close</Callout>
          <Form>
            <FormInput label="Name" />
          </Form>
        </Modal>
      </Panel>
    </>
  );
};
