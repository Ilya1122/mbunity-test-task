import React, { useState, FC, Fragment } from 'react';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import Drawer from 'components/UI/Drawer';
import HeaderMobileMenu from 'components/HeaderMobileMenu';

import { StyledIconButton } from './styles';

const HeaderMenu: FC = () => {
  const [open, setOpen] = useState(false);

  const handleChangeOpen = () => setOpen((prev) => !prev);

  return (
    <Fragment>
      <StyledIconButton onClick={handleChangeOpen}>
        <MenuIcon />
      </StyledIconButton>

      <Drawer handleChangeOpen={handleChangeOpen} open={open}>
        <HeaderMobileMenu handleChangeOpen={handleChangeOpen} />
      </Drawer>
    </Fragment>
  );
};

export default HeaderMenu;
