import styled from 'styled-components'

export const ListEmptyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 46rem;
  margin: 0 auto;
  margin-top: calc(3.69rem / 2);
  padding: 4rem 1.5rem;
  border-top: 2px solid ${(props) => props.theme.gray_500};

  svg {
    width: 3.5rem;
    height: 3.5rem;
    color: ${(props) => props.theme.gray_400};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.gray_300};
    line-height: 1.4rem;
  }

  p:first-of-type {
    font-weight: bold;
  }
`
