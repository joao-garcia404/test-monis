import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 38px 0px 36px;

  .title {
    color: var(--text);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  .copy_section {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 42px;

    .copy_text {
      color: var(--text);
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    .copy_box {
      width: 100%;
      height: 61px;
      margin-top: 17px;
      padding: 8px 8px 8px 24px;
      border: 1px solid #d8d8d8;
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: var(--purple);
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
      }

      button {
        width: 122px;
        height: 45px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--purple);
        border-radius: 5px;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        line-height: 29px;
      }
    }

    .copied {
      position: absolute;
      right: 0;
      bottom: -26px;
      margin-left: auto;
      color: var(--purple);
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      transition: 0.4s;
    }
  }
`;
