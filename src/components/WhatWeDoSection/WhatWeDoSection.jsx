import React from 'react';

import PropTypes from 'prop-types';
import { Box, ResponsiveContext, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const WhatWeDoSection = ({ withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 2 : 4;
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('tablet', size);
  const marginVariant = isTablet ? 'none' : 'xsmall';
  const headerLevel = isMobile ? 4 : 2;

  return (
    <Box
      height={{ min: '330px' }}
      justify="center"
      background={
        withBackground
          ? {
              color: '#F0F6F4',
            }
          : undefined
      }
    >
      <Box
        justify="center"
        align="center"
        pad={isMobile ? { horizontal: 'large', vertical: 'xlarge' } : 'large'}
        gap="medium"
      >
        <Box
          style={{ textAlign: 'center' }}
          justify="center"
          margin={{ horizontal: 'medium' }}
        >
          <Heading level={headerLevel} margin={{ top: 'none' }} color="brand">
            What we do?
          </Heading>
        </Box>
        {isMobile || (
          <Grid columns={{ count: columnsCount, size: 'auto' }}>
            <Box
              direction="row"
              align="center"
              pad={isTablet ? undefined : { right: 'large' }}
            >
              <Box pad="small">
                <img src="/assets/research.svg" alt="Research" />
              </Box>
              <Heading
                level={3}
                color="brand"
                margin={marginVariant}
                style={{ fontWeight: '600' }}
              >
                Research
              </Heading>
            </Box>
            <Box
              direction="row"
              align="center"
              pad={isTablet ? undefined : { right: 'large' }}
            >
              <Box
                pad={isTablet ? { left: 'medium', right: 'small' } : 'small'}
              >
                <img src="/assets/Desing.svg" alt="Desing" />
              </Box>
              <Heading
                level={3}
                color="brand"
                margin={marginVariant}
                style={{ fontWeight: '600' }}
              >
                Design
              </Heading>
            </Box>
            <Box
              direction="row"
              align="center"
              pad={isTablet ? undefined : { right: 'large' }}
            >
              <Box pad="small">
                <img src="/assets/Build.svg" alt="Arrows" />
              </Box>
              <Heading
                level={3}
                color="brand"
                margin={marginVariant}
                style={{ fontWeight: '600' }}
              >
                Build
              </Heading>
            </Box>
            <Box
              direction="row"
              align="center"
              pad={isTablet ? undefined : { right: 'large' }}
            >
              <Box pad="small">
                <img src="/assets/gearSmall.svg" alt="Small gears" />
              </Box>
              <Heading
                level={3}
                color="brand"
                margin={marginVariant}
                style={{ fontWeight: '600' }}
              >
                Support
              </Heading>
            </Box>
          </Grid>
        )}
        {isMobile && (
          <Grid columns={{ count: columnsCount, size: 'auto' }} gap="medium">
            <Box direction="row" align="center" justify="start" pad="medium">
              <Box pad="small">
                <img src="/assets/research.svg" alt="Research" />
              </Box>
              <Heading
                level={6}
                color="brand"
                margin={marginVariant}
                style={{ fontWeight: '600' }}
              >
                Research
              </Heading>
            </Box>
            <Box direction="row" align="center" justify="start" pad="medium">
              <Box pad={{ right: 'medium', left: 'small', vertical: 'small' }}>
                <img src="/assets/Desing.svg" alt="Desing" />
              </Box>
              <Heading
                level={6}
                color="brand"
                margin={marginVariant}
                style={{ fontWeight: '600' }}
              >
                Design
              </Heading>
            </Box>
            <Box direction="row" align="center" justify="start" pad="medium">
              <Box pad={{ right: 'medium', left: 'small', vertical: 'small' }}>
                <img src="/assets/Build.svg" alt="Arrows" />
              </Box>
              <Heading
                level={6}
                color="brand"
                margin={marginVariant}
                style={{ fontWeight: '600' }}
              >
                Build
              </Heading>
            </Box>
            <Box direction="row" align="center" justify="start" pad="medium">
              <Box pad="small">
                <img src="/assets/gearSmall.svg" alt="Small gears" />
              </Box>
              <Heading
                level={6}
                color="brand"
                margin={marginVariant}
                style={{ fontWeight: '600' }}
              >
                Support
              </Heading>
            </Box>
          </Grid>
        )}
      </Box>
    </Box>
  );
};
WhatWeDoSection.propTypes = {
  withBackground: PropTypes.bool,
};

WhatWeDoSection.defaultProps = {
  withBackground: undefined,
};
