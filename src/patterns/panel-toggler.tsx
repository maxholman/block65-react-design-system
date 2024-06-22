import { type FC, useEffect, useState } from 'react';
import {
  Block,
  Button,
  Code,
  Heading,
  Inline,
  MenuIcon,
  Paragraph,
  UnstyledButton,
  Badge,
} from '../../lib/main.js';

const items = [1, 2, 3];

export const PanelTogglerPattern: FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem(Math.floor(Math.random() * items.length));
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {items.map((i) => {
        const isSelected = i === selectedItem;

        return (
          <Button
            key={i}
            padding="6"
            paddingBlock="7"
            flexDirection="row"
            textAlign="start"
            justifyContent="start"
            state={isSelected ? 'active' : undefined}
            onClick={() => setSelectedItem(isSelected ? undefined : i)}
          >
            <Inline flexGrow>
              <Block flexGrow>
                <Heading level="4">UOB VISA Debit {i}</Heading>
                <Paragraph>
                  Expires <Code>{i}/25</Code>
                </Paragraph>
              </Block>
              <Badge
                variant={isSelected ? 'positive' : 'default'}
                justifySelf="end"
              >
                {isSelected ? 'Selected' : 'Select'}
              </Badge>
            </Inline>
          </Button>
        );
      })}

      <UnstyledButton padding="6" paddingBlock="7" flexDirection="row">
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
