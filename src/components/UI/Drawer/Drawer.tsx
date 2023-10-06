import React, { FC, ReactNode } from 'react';

import { StyledDrawer } from './styles';

interface DrawerProps {
  handleChangeOpen: () => void;
  open: boolean;
  children: ReactNode;
}

const Drawer: FC<DrawerProps> = ({ open, handleChangeOpen, children }) => {
  return (
    <StyledDrawer anchor="top" open={open} onClose={handleChangeOpen}>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;
