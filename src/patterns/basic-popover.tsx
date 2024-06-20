import { Block, Button, Heading, Paragraph } from '../../lib/main.js';

export const BasicPopover = () => (
  <Block paddingBlock="15">
    <Block
      style={{ maxWidth: '30rem' }}
      padding="12"
      space="10"
      alignItems="center"
      alignSelf="center"
      rounded="2"
    >
      <Heading textAlign="center" textWrap="balance">
        This title does a great job of catching your attention
      </Heading>
      <Paragraph secondary fontSize="0" textAlign="center">
        A subtle description text to explain <br />
        your product.
      </Paragraph>
      <Button variant="primary">Call to action</Button>
    </Block>
  </Block>
);
