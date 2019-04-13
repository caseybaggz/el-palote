// @flow

import React from 'react';
import styled from 'styled-components';
import media from '../theme/media';

const Wrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 0;
  min-height: 76px;
  position: absolute;
  top: 0;

  ${media.tablet} {
    display: none;
  }
`

const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  margin: 0;
  overflow: visible;
  padding: 15px 15px;
  text-transform: none;

  &:active,
  &:focus {
    outline: none;
  }
`

const Icon = styled.span`
  display: inline-block;
  height: 20px;
  position: relative;
  width: 25px;
`

const Bars = styled.div`
  background-color: ${props => props.theme.black};
  height: 4px;
  width: 25px;

  &::before,
  &::after {
    background-color: ${props => props.theme.black};
    content: "";
    display: block;
    height: 4px;
    position: absolute;
    width: 25px;
  }

  &::before {
    top: 8px;
  }

  &::after {
    top: 16px;
  }
`

type Props = {
  onOpenNav: () => {}
};

function Navicon(props: Props): React.Node {
  return(
    <Wrapper>
      <Button onClick={props.onOpenNav}>
        <Icon>
          <Bars />
        </Icon>
      </Button>
    </Wrapper>
  );
}

export default React.memo(Navicon)
