import React from 'react';
import styled, { css } from 'styled-components'

// Styled component named StyledButton
const StyledButton = styled.div` {
  display: flex;
  background: #333333;
  color: #FFFFFF;
  line-height: 68px;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  width: 216px;
  height: 68px;
  justify-content: center;
}
`

function Button () { 
  return <StyledButton> back to homepage </StyledButton>
}

export default Button;