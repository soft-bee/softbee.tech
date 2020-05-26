import React from 'react';
import { Box, Grid, Text } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Button } from '../../legos/Button/Button';
import { TextColor } from '../../utils/colors';

const HomeHeroSection = () => (
  <Grid columns={{ count: 2, size: 'auto' }} gap="small" pad="xlarge">
    <Box justify="center" align="start">
      <Box pad={{ bottom: 'small' }}>
        <Heading level={1} color={TextColor}>
          Your partners in new products creating
        </Heading>
      </Box>
      <Box width="300px" pad={{ bottom: 'large' }}>
        <Text color={TextColor} style={{ lineHeight: '32px' }}>
          with a bear drinking afterwards.UPDATED: and staying at home =)
        </Text>
      </Box>

      <Box justify="center" align="center" height="60px" width="200px">
        <Button label="Let’s talk" fill color="#F5D040" primary />
      </Box>
    </Box>
    <Box align="center">
      <img src="./assets/sectionHeader.svg" alt="Gatsby Scene" />
    </Box>
  </Grid>
);

export default HomeHeroSection;