import React from 'react';
import { Link } from 'gatsby';
import {
  Box,
  Header,
  Button,
  Grid,
  Image,
  Nav,
  ResponsiveContext,
} from 'grommet';
import styled from 'styled-components';

import HeaderMenu from './HeaderMenu/HeaderMenu';
import { ButtonLetsTalk } from './ButtonLetsTalk/ButtonLetsTalk';
import { RouterLink } from '../legos/RouterLink';

const StyledBox = styled(Box)`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  max-width: 100vw;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Blog', link: '/blog' },
];

export const SiteHeader = () => {
  const size = React.useContext(ResponsiveContext);
  const isDense = size === 'sTablet';

  return (
    <Header>
      {size === 'small' ? (
        <StyledBox
          elevation="medium"
          pad="small"
          width="100%"
          background={{ color: 'brand' }}
        >
          <Grid fill rows={['auto', 'flex']} columns={['auto', 'flex']}>
            <HeaderMenu />
            <Box align="center" justify="center" pad={{ right: '54px' }}>
              <StyledLink to="/">
                <Image src="/assets/logo.svg" alt="Soft Bee" />
              </StyledLink>
            </Box>
          </Grid>
        </StyledBox>
      ) : (
        <Grid
          pad={{
            left: 'large',
            right: 'large',
            top: 'medium',
            bottom: 'medium',
          }}
          fill
          rows={['auto', 'flex']}
          columns={['auto', 'flex']}
        >
          <Box align="start" justify="center" pad={{ right: '150px' }}>
            <Link to="/">
              <Image src="/assets/logo.svg" alt="Soft Bee" alignSelf="start" />
            </Link>
          </Box>
          <Nav direction="row" align="center" justify="end">
            {linkItems.map(linkItem => (
              <RouterLink to={linkItem.link} key={linkItem.id}>
                <Button
                  key={linkItem.id}
                  plain
                  label={linkItem.label}
                  margin={{ horizontal: isDense ? 'none' : 'medium' }}
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    fontSize: '18px',
                  }}
                />
              </RouterLink>
            ))}
            <Box height="60px" width={isDense ? '148px' : '200px'}>
              <ButtonLetsTalk label="Let’s talk 👋" />
            </Box>
          </Nav>
        </Grid>
      )}
    </Header>
  );
};
