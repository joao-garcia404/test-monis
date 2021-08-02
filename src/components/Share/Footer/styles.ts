import styled from "styled-components";

export const Container = styled.div`
  margin-top: 42px;
  height: calc(100vh - 340px);
  background: var(--shape);

  footer {
    display: flex;
    flex-direction: column;

    .footer_title {
      align-self: center;
      margin-top: 33px;
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: var(--text);
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 34px;
      margin-top: 44px;
    }
  }
`;
