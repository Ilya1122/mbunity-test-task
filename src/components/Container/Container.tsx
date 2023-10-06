import React, { FC, ReactNode } from 'react';

import { StyledContainer } from './styles';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, ...props }) => (
  <StyledContainer className={props.className}>{children}</StyledContainer>
);

export default Container;
