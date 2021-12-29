import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';

import Container from '../Layout/Container';
import { Button } from '../../legos/Button/Button';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const GapNurseSection = ({ title, text, withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const isDesktopOrTablet = maxBreakpoints('desktopOrTablet', size);

  const columnsCount = isMobile ? 'full' : ['auto', '58.33333%'];
  const heightSection = withBackground ? '700px' : '800px';
  const textAlignVariant = isMobile ? 'center' : 'start';
  const gapVariant = isDesktopOrTablet ? 'medium' : 'xlarge';
  const textFontSizeVariant = isMobile ? 'large' : 'xlarge';

  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      height={{ min: isDesktopOrTablet ? undefined : heightSection }}
      background={
        withBackground
          ? {
              size: 'auto',
              position: 'top right',
              image:
                !isDesktopOrTablet && 'url(/assets/background-gapNurse.svg)',

              color: '#f0f6f4',
            }
          : {
              color: 'white',
            }
      }
    >
      <Container>
        <Grid columns={columnsCount} gap={gapVariant} align="center">
          <Box align={isMobile ? 'center' : 'start'}>
            <Heading
              margin={{ bottom: 'large', top: 'none' }}
              level={2}
              textAlign={textAlignVariant}
            >
              {title}
            </Heading>

            <Paragraph
              margin={{ bottom: isMobile ? 'none' : 'large', top: 'none' }}
              size={textFontSizeVariant}
              color="text-dark-grey"
            >
              {text}
            </Paragraph>

            {isMobile || (
              <Box height={{ min: '60px' }} width={{ min: '244px' }}>
                <Button
                  href="/gapnurse-case"
                  label="See case study"
                  primary
                  fill
                />
              </Box>
            )}
          </Box>
          <Box
            justify={isMobile ? 'center' : 'between'}
            gap="small"
            direction="row"
            align="center"
          >
            <Box align={isMobile && 'center'}>
              <ImgFluid
                mobileWidth={isMobile && '80%'}
                src="/assets/PhoneGapNurse.svg"
                alt="The iphone that shows the application GapNurse"
              />
            </Box>
            <Box align={isMobile && 'center'}>
              <picture>
                <source
                  srcSet="/assets/PhoneGapNurse2new.webp"
                  type="image/webp"
                />
                <ImgFluid
                  mobileWidth={isMobile && '80%'}
                  src="/assets/PhoneGapNurse2.png"
                  alt="The iphone that shows the application GapNurse"
                />
              </picture>
            </Box>
          </Box>
          {isMobile && (
            <Box
              margin={{ horizontal: 'auto' }}
              height={{ min: '60px' }}
              width={{ min: '244px' }}
            >
              <Button
                href="/gapnurse-case"
                label="See case study"
                primary
                fill
              />
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

GapNurseSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  withBackground: PropTypes.bool,
};

GapNurseSection.defaultProps = {
  withBackground: undefined,
};
