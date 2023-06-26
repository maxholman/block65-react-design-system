import { useEffect, useState } from 'react';
import {
  Block,
  Button,
  Code,
  Heading,
  Inline,
  MenuIcon,
  Text,
  UnstyledButton,
} from '../../lib/main.js';

const items = [1, 2, 3];

export const PanelTogglerPattern = () => {
  const [selectedItem, setSelectedItem] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem(Math.floor(Math.random() * items.length));
    }, 200000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {items.map((i) => {
        const isSelected = i === selectedItem;

        return (
          <UnstyledButton
            key={i}
            padding="6"
            paddingBlock="7"
            background={isSelected ? '6' : '2'}
            border="4"
            tone={isSelected ? 'accent' : 'neutral'}
            flexDirection="row"
            onClick={() => setSelectedItem(isSelected ? undefined : i)}
          >
            <Block justifyContent="center">
              <Heading level="4">UOB VISA Debit {i}</Heading>
              <Text>
                Expires <Code>{i}/25</Code>
              </Text>
            </Block>
          </UnstyledButton>
        );
      })}

      <UnstyledButton
        padding="6"
        paddingBlock="7"
        background="1"
        tone="accent"
        flexDirection="row"
      >
        <Block justifyContent="center">
          <Heading level="4">
            <MenuIcon /> Add Payment Method
          </Heading>
        </Block>
      </UnstyledButton>

      <Inline>
        <Button disabled={!selectedItem}>Go</Button>
      </Inline>
    </>
  );
};
