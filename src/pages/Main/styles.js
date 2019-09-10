import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Form = styled.form`
  margin-top: 3rem;
  display: flex;

  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 1.6rem;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading
}))`
  background: #7559c1;
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  margin-left: 10px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }
    span {
      flex: 1;
    }

    a {
      color: #7559c1;
    }
  }
`;
