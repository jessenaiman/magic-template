import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box, Text, Flex } from '@chakra-ui/react';

import { PreviewInput } from '../../design/preview-controls/preview-input';
import { PreviewSwitch } from '../../design/preview-controls/preview-switch';
import { PreviewPropTable } from '../../design/preview-controls/preview-prop-table';

import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import useForceRerender from '../../hooks/useForceRerender';

import TextCursor from '../../content/TextAnimations/TextCursor/TextCursor';
import { textCursor } from '../../constants/code/TextAnimations/textCursorCode';

const TextCursorDemo = () => {
  const [text, setText] = useState('⚛️');
  const [followMouseDirection, setFollowMouseDirection] = useState(true);
  const [randomFloat, setRandomFloat] = useState(true);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: 'text',
      type: 'string',
      default: '⚛️',
      description: 'The text string to display as the trail.'
    },
    {
      name: 'delay',
      type: 'number',
      default: '0.01',
      description: 'The entry stagger delay in seconds for the fade-out animation.'
    },
    {
      name: 'spacing',
      type: 'number',
      default: '100',
      description: 'The spacing in pixels between each trail point.'
    },
    {
      name: 'followMouseDirection',
      type: 'boolean',
      default: 'true',
      description: 'If true, each text rotates to follow the mouse direction.'
    },
    {
      name: 'randomFloat',
      type: 'boolean',
      default: 'true',
      description: 'If true, enables random floating offsets in position and rotation for a dynamic effect.'
    },
    {
      name: 'exitDuration',
      type: 'number',
      default: '0.5',
      description: 'The duration in seconds for the exit animation of each trail item.'
    },
    {
      name: 'removalInterval',
      type: 'number',
      default: '30',
      description: 'The interval in milliseconds between removing trail items when the mouse stops moving.'
    },
    {
      name: 'maxPoints',
      type: 'number',
      default: '5',
      description: 'The maximum number of trail points to display.'
    }
  ];

  return (
    <TabsLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <TextCursor key={key} text={text} followMouseDirection={followMouseDirection} randomFloat={randomFloat} />
          <Text
            pointerEvents="none"
            position="absolute"
            textAlign="center"
            fontSize="4rem"
            fontWeight={900}
            userSelect="none"
            color="#271E37"
          >
            Hover Around!
          </Text>
        </Box>

        <Box mt={6}>
          <Text fontSize="xl" mb={3}>
            Customize
          </Text>
          <Flex gap={6} wrap="wrap">
            <PreviewInput
              label="Text"
              value={text}
              placeholder="Enter text..."
              widthPx={160}
              maxLength={10}
              onChange={setText}
            />
            <PreviewSwitch
              label="Follow Mouse Direction"
              checked={followMouseDirection}
              onChange={(checked) => {
                setFollowMouseDirection(checked);
                forceRerender();
              }}
            />
            <PreviewSwitch
              label="Enable Random Floating"
              checked={randomFloat}
              onChange={(checked) => {
                setRandomFloat(checked);
                forceRerender();
              }}
            />
          </Flex>
        </Box>

        <PreviewPropTable propsList={propData} />
        <Dependencies dependencyList={['motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={textCursor} />
      </CodeTab>
    </TabsLayout>
  );
};

export default TextCursorDemo;
