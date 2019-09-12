import styled, { css } from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Owner = styled.header`
  text-align: center;

  a {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 2rem;
    color: #7559c1;
  }

  img {
    width: 120px;
    border-radius: 50%;
  }

  h1 {
    margin-top: 1rem;
    font-size: 2.4rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: #666;
    line-height: 1.4;
    max-width: 400px;
    margin: 1rem auto 0 auto;
  }
`;

export const IssueList = styled.ul`
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #eee;
`;

export const IssueItem = styled.li`
  padding: 1.5rem 1rem;
  border: 1px solid #eee;
  border-radius: 4px;

  & + li {
    margin-top: 1rem;
  }

  img {
    float: left;
    width: 36px;
    height: 36px;
    border: 2px solid #eee;
    border-radius: 50%;
    margin-right: 1rem;
    overflow: hidden;
  }

  div {
    strong {
      font-size: 1.6rem;
      font-weight: 600;
    }

    a {
      color: #333;
      line-height: 1.2;
      &:hover {
        color: #7559c1;
      }
    }

    span {
      background: #eee;
      color: #333;
      border-radius: 2px;
      font-size: 1.2rem;
      font-weight: 600;
      padding: 3px 4px;
      margin-left: 1rem;
    }

    p {
      margin-top: 0.5rem;
      line-height: 1.5;
      font-size: 1.2rem;
      color: #999;
      margin-left: 4.6rem;
    }
  }
`;

export const IssuesState = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;

  button {
    width: 32%;
    height: 4rem;
    background: #fff;
    border-radius: 4px;
    color: #7559c1;

    &:nth-child(${props => props.active + 1}) {
      background: #7559c1;
      color: white;
    }
  }
`;

export const Pagination = styled(IssuesState).attrs(props => ({
  type: 'submit',
  disabled: props.page === 1
}))`
  margin-top: 1.5rem;

  button {
    outline: 0;
    transition: opacity 0.25s ease-out;
    border: 0;
  }
  ${props =>
    props.page === 1 &&
    css`
      & button:first-child {
        /* &:disabled { */
        cursor: not-allowed;
        opacity: 0.6;
        /* } */
      }
    `}
`;
