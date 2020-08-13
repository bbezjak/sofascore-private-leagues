import React from 'react'
import styled from 'styled-components'

import { Children, Stylable } from '../utils'
import { Theme } from '../theme'

interface ButtonProps extends Children, Stylable {
  type?: string
  onClick?: () => void
  disabled?: boolean
}

const StyledButton = styled.button<{ theme: Theme }>`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.tertiraryColor};
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};

  :hover {
    background-color: ${(props) => props.theme.tertiraryColorBlack};
  }

  > a {
    margin: -8px -16px;
  }

  &:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export function Button({ children, type, onClick = () => {}, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest} onClick={onClick}>
      {children}
    </StyledButton>
  )
}