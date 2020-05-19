import React from "react";
import styled from "styled-components";
import { Heading as LibHeading } from "grommet";

const getFontSize =(level)=> {
  switch (level) {
    case 1:
      return '54px'
    case 2:
      return '40px'
    case 5:
      return '16px'
    default:
      return '16px'
  }
};

const getFontWeight =(level)=> {
  switch (level) {
    case 1:
      return '800'
    case 2:
      return '300'
    default:
      return '400'
  }
};

const getlineHeight =(level)=> {
  switch (level) {
    case 1:
      return '66px'
    case 2:
      return '47px'
    default:
      return ''
  }
};

const StyledHeading = styled(LibHeading)`
  font-size: ${({level}) => getFontSize(level)};
  font-weight: ${({level}) => getFontWeight(level)};
  line-height: ${({level}) => getlineHeight(level)};
`
export const Heading = ({children, ...props})=> (
  <StyledHeading {...props}>
    {children}
  </StyledHeading>   
);