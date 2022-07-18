import styled, { css } from 'styled-components';

export const InputContainer = styled.input`
  ${({ theme }) => css`
      display: block;
      max-width:32.7rem;
      width: 100%;
      height:3.37rem;
      padding: 1rem;
      background: ${theme.gray_500};
      border: 1px solid ${theme.gray_700};
      border-radius: 5px;
      color: ${theme.gray_300};
      margin:0 auto;
      margin-top: -1.51rem;

      &:focus {
        color: ${theme.gray_100};
        border-color:${theme.purple_dark};
        outline: none;
      }
  `}
`