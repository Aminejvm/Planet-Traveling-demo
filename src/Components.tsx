import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 32px 0px;
  padding-bottom: 3rem;
`;

export const Nav = styled.nav`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  width: 100%;
  color: #ffffff;
`;

export const PreloadImages = styled.div`
  img {
    position: absolute;
    opacity: 0;
    width: 0px;
    height: 0px;
  }
`;
