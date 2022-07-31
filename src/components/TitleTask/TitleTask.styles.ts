import styled from 'styled-components'

export const TitleTaskContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 46rem;
  margin: 0 auto;
  margin-top: calc(3.69rem / 2);

  color: ${(props) => props.theme.blue};

  padding-top: calc(3.69rem / 2);

  h5:last-child {
    color: ${(props) => props.theme.purple};
  }

  span {
    padding: 0.125rem 0.8rem;
    margin-left: 1rem;

    color: ${(props) => props.theme.gray_200};
    background: ${(props) => props.theme.gray_500};

    border-radius: 10px;
  }
`
