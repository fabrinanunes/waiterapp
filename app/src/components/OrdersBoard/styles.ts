import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  padding: 16px;

  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  > header{
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 8px;
    font-size: 14px;
  }
`;

export const OrdersContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 24px;

  button{
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 4px;

    background-color: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;

    height: 128px;

    & + button{
      margin-top: 24px;
    }

    strong{
      font-weight: 600;
    }

    span{
      font-size: 14px;
      color: #666;
    }
  }
`;
