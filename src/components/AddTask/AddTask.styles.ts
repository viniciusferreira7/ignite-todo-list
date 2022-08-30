import styled, { css } from 'styled-components'

export const AddTaskContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

    max-width: 46rem;

    margin: 0 auto;
    margin-top: calc(-3.25rem / 2);

    @media screen and (max-width: 768px) {
      padding: 0 2%;
    }
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
    border-color: transparent;
    cursor: pointer;

    &:hover {
      outline: 0;
      background: ${theme.blue};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  `}
`

export const InputContainer = styled.input`
  ${({ theme }) => css`
    flex: 1;
    min-width: 32.7rem;
    width: 100%;
    height: 3.37rem;
    padding: 1rem;

    background: ${theme.gray_500};
    border: 1px solid ${theme.gray_700};
    border-radius: 5px;
    color: ${theme.gray_300};

    &:focus {
      color: ${theme.gray_100};
      outline: none;
    }

    @media (max-width: 768px) {
      min-width: auto;
    }
  `}
`
