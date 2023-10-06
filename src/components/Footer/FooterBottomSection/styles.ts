import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
