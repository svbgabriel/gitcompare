import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;

export const Actions = styled.div`
  height: 48px;
  display: flex;

  .delete {
    width: 100%;
    background: #f56363;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      background: #f74b4b;
    }
  }

  .update {
    width: 100%;
    background: #63aff5;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      background: #1282e8;
    }
  }
`;
