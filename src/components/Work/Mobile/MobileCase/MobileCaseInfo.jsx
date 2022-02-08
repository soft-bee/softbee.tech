import React from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import { Heading } from '../../../../legos/typography/Heading';
import { Paragraph } from '../../../../legos/typography/Paragraph';
import { ImgFluid } from '../../../Layout/ImgFluid';
import { useBreakpoint } from '../../../../utils/useBreakpoint';
import Container from '../../../Layout/Container';

export const MobileCaseInfo = ({
  data: {
    color,
    timeIcon,
    languagesIcon,
    technologiesIcon,
    time,
    languages,
    technologies,
    logo,
    alt,
    preview: { textInfoMobileCase },
  },
}) => {
  const dataInfo = [
    {
      name: 'Technologies',
      value: technologies,
      iconSrc: technologiesIcon,
    },
    {
      name: 'Languages',
      value: languages,
      iconSrc: languagesIcon,
    },
    {
      name: 'Time',
      value: `${time}h`,
      iconSrc: timeIcon,
    },
  ];
  const { isSmall, isDesktopOrTablet } = useBreakpoint();
  const iconSize = isSmall ? '32px' : '42px';
  return (
    <>
      <Box
        pad={{ vertical: isSmall ? 'xlarge' : 'large' }}
        align={isSmall ? undefined : 'center'}
        justify="center"
        background={{ color }}
        round={{ corner: 'bottom', size: isSmall ? '20px' : '100px' }}
      >
        <Box
          justify="center"
          margin={{ horizontal: 'auto' }}
          align="center"
          direction="row"
          wrap={!!isSmall}
        >
          {dataInfo.map(({ name, value, iconSrc }) => {
            return (
              <Box
                pad={{
                  horizontal: isDesktopOrTablet ? 'medium' : 'large',
                  vertical: 'small',
                }}
                justify={isSmall ? 'center' : undefined}
                align="center"
                direction="row"
                key={value}
              >
                <Box margin={{ right: 'medium' }} flex={{ shrink: 0 }}>
                  <ImgFluid mobileWidth={iconSize} src={iconSrc} alt={alt} />
                </Box>
                <Box>
                  <Heading
                    lineHeight="1"
                    level={4}
                    fontWeight="400"
                    color="#fff"
                    margin={{ top: 'none', bottom: 'xxsmall' }}
                    textAlign="center"
                  >
                    {name}:
                  </Heading>
                  <Paragraph
                    textAlign="center"
                    color="#fff"
                    fontWeight="600"
                    margin={{ bottom: 'none', top: 'none' }}
                    size={isSmall ? 'large' : 'xxlarge'}
                  >
                    {value}
                  </Paragraph>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Container pad={{ vertical: 'xlarge' }} align="center">
        <ImgFluid
          width={isDesktopOrTablet ? '70px' : '150px'}
          src={logo}
          alt={alt}
        />
        <Paragraph
          textAlign="center"
          size={isDesktopOrTablet ? 'xlarge' : '2.25rem'}
          margin={{ top: 'large', bottom: 'none' }}
          fontWeight="300"
          color={color}
        >
          {textInfoMobileCase}
        </Paragraph>
      </Container>
    </>
  );
};

MobileCaseInfo.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    timeIcon: PropTypes.string.isRequired,
    languagesIcon: PropTypes.string.isRequired,
    technologiesIcon: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    languages: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      textInfoMobileCas: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
