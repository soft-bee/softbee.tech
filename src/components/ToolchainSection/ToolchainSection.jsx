import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, Grid, Image } from 'grommet';

import { Heading } from '../../legos/typography/Heading';

const toolchainItems = [
  { id: '1', label: 'React', icon: '/assets/icons/reactIcon.svg' },
  { id: '2', label: 'Vue', icon: '/assets/icons/vueIcon.svg' },
  {
    id: '3',
    label: 'React Native',
    icon: '/assets/icons/reactNativeIcon.svg',
  },
  { id: '4', label: 'Angular', icon: '/assets/icons/angularIcon.svg' },
  { id: '5', label: 'Flutter', icon: '/assets/icons/flutterIcon.svg' },
  { id: '6', label: 'Node.js', icon: '/assets/icons/nodeJSIcon.svg' },
  { id: '7', label: 'Ionic', icon: '/assets/icons/ionicIcon.svg' },
];

export const ToolchainSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  const headerLevel = isMobile ? 6 : 5;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'large' }
    : 'xlarge';

  return (
    <Box>
      <Grid rows={{ count: 2, size: ['auto', 'flex'] }} pad={paddingVariant}>
        <Box align="center">
          <Heading
            textAlign="center"
            level={isMobile ? 3 : 2}
            color="brand"
            margin={{ bottom: 'xlarge' }}
          >
            What do we have in our toolchain?
          </Heading>
        </Box>
        <Box direction="row" justify="center" wrap={!!isMobile}>
          {toolchainItems.map(toolchainItem => (
            <Box
              width={{ min: 'xsmall' }}
              key={toolchainItem.id}
              height="250px"
              pad={{ horizontal: 'medium' }}
            >
              <Box height="90px" alignSelf="center">
                <Image
                  fill
                  src={toolchainItem.icon}
                  alt={toolchainItem.label}
                />
              </Box>

              <Heading
                level={headerLevel}
                alignSelf="center"
                color="brand"
                textAlign="center"
              >
                {toolchainItem.label}
              </Heading>
            </Box>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};
