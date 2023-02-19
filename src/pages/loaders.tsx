import type { FC } from 'react';
import {
  Block,
  Grid,
  Heading,
  Inline,
  Panel,
  Spinner,
  Text,
} from '../../lib/main.js';

export const LoadersPage: FC = () => {
  const visible = true;
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible((v) => !v);
  //   }, 1500);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Panel variant="ghost" space="huge">
      <Block>
        <Heading level="3">Loaders</Heading>

        <Grid cols={1}>
          <Panel variant="ghost">
            <Text>
              MMMMM
              <Spinner />
              BBBBB
            </Text>
          </Panel>
          <Panel variant="ghost">
            <Text>oooooooooooo oooooooo</Text>
            <Text>
              oooooooooooo
              <Spinner />
              oooooooo
            </Text>
            <Text>oooooooooooo oooooooo</Text>
          </Panel>
          <Panel variant="ghost">
            <Text>
              ddddddd
              <Spinner />
              bbbbbbb
            </Text>
          </Panel>
          <Panel variant="ghost">
            <Text>
              qqqqqqqq
              <Spinner />
              ppppppp
            </Text>
          </Panel>
          <Panel variant="ghost">
            <Text>
              <Spinner /> Stuffs!
            </Text>
          </Panel>
          <Panel variant="ghost">
            <Text>
              <Spinner /> {visible && 'Stuffs!'}
            </Text>
          </Panel>
          <Panel variant="ghost">
            <Spinner /> {visible && <Text>Stuffs!</Text>}
          </Panel>
          <Panel variant="ghost">
            <Inline space="tiny">
              <Spinner /> {visible && <Text>Stuffs!</Text>}
            </Inline>
          </Panel>
          <Panel variant="ghost">
            <Inline space="tiny">
              <Text>Stuffs!</Text> <Spinner /> {visible && <Text>Stuffs!</Text>}
            </Inline>
          </Panel>
          <Panel variant="ghost">
            <Inline space="tiny">
              <Text>Stuffs!</Text> {visible && <Text>Stuffs!</Text>} <Spinner />
            </Inline>
          </Panel>
        </Grid>
      </Block>
    </Panel>
  );
};
