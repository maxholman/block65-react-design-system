import type { FC } from 'react';
import { useModal } from '../../lib/hooks/use-toggle.js';
import { Block, Box, Button, Form, FormInput, Grid } from '../../lib/main.js';
import { Modal } from '../../lib/modal.js';

export const IconsPage: FC = () => {
  const [show, toggleModal] = useModal();

  return (
    <>
      <Box borderWeight="strong">
        <Block
          space="3"
          margin={{
            all: '3',
            wide: '5',
            mobile: '2',
          }}
          flexDirection={{
            all: 'row',
            tablet: 'column',
          }}
        >
          <Block>Responsive 1</Block>
          <Block>Responsive 2</Block>
        </Block>

        <Grid
          cols={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
            wide: 4,
          }}
        >
          <Block>Responsive 1</Block>
          <Block>Responsive 2</Block>

          <Block>Responsive 3</Block>
          <Block>Responsive 4</Block>

          <Block>Responsive 5</Block>
          <Block>Responsive 6</Block>
        </Grid>

        <Button onClick={() => toggleModal()}>Show Modal</Button>

        <Modal show={show} onClose={() => toggleModal(false)} heading="Modal">
          <Form>
            <FormInput label="Name" />
          </Form>
        </Modal>
      </Box>
    </>
  );
};
