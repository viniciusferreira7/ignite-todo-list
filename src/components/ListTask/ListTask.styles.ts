import styled from 'styled-components'

export const ListTaskContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: auto;
  justify-content: center;

  max-width: 46rem;
  margin: 0 auto;
  margin-top: calc(3.69rem / 2);

  ol {
    padding: 1.5rem 0;
  }

  li + li {
    margin-top: 0.75rem;
  }
`
