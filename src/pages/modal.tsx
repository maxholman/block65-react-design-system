import { useState, type FC } from 'react';
import { useToggle } from '../../lib/hooks/use-toggle.js';
import {
  Button,
  Callout,
  Form,
  FormInput,
  Inline,
  Panel,
  Modal,
  useDialog,
  Dialog,
} from '../../lib/main.js';

export const ModalPage: FC = () => {
  const [toggleOpen, toggle] = useToggle(false);

  const [dialogValue, setDialogValue] = useState<string | undefined>(undefined);
  const dialog = useDialog(setDialogValue);

  return (
    <>
      <Panel variant="ghost">
        <Inline>
          <Button onClick={() => toggle()}>toggle</Button>
        </Inline>

        <Inline>
          <Button onClick={() => dialog.showModal()}>
            dialog.showModal (dialogValue= {JSON.stringify(dialogValue)})
          </Button>
        </Inline>

        {toggleOpen && (
          <Modal
            open={toggleOpen}
            close={() => toggle(false)}
            heading="Hi, I'm a Modal!"
          >
            <Callout tone="info">You can press ESC to close</Callout>
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
