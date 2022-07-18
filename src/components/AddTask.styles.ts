import styled, { css } from 'styled-components';

export const AddTaskContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: red;
    gap: 0.5rem;
    /* position: relative;
    top: -1.18rem;
    left: 40%; */
  `}
`

export const ButtonContainer = styled.button`
  ${({ theme }) => css`
    width: 5.625rem;
    height: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background: ${theme.blue_dark};
    font-size: 0.875rem;
    color: ${theme.gray_100};
    border-radius: 8px;

    &:hover {
      outline: none;
      background: ${theme.blue};
    }
  `}
`


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

      &:focus {
        color: ${theme.gray_100};
        border-color:${theme.purple_dark};
        outline: none;
      }
  `}
`