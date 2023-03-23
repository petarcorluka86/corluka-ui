import styled from "styled-components";

const Container = styled.div<{ width?: number }>`
  width: 100%;
  height: 100%;
  max-width: ${(p) => p.width || 1400}px;
  margin-left: auto;
  margin-right: auto;
`;

export default Container;
