import styled from 'styled-components';

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

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  background: #7559c1;
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  margin-left: 10px;
`;
