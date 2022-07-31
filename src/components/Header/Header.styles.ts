import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12.5rem;
    background: ${theme.gray_700};
    gap: 0.75rem;

    & > svg {
      color: ${theme.blue};
    }

    & > h1 {
      color: ${theme.blue};
      font-weight: 900;

      & > strong {
        color: ${theme.purple_dark};
        font-weight: 900;
      }
    }
  `}
`
