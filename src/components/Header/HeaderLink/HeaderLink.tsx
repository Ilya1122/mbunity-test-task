import React, { FC, Fragment, useState, MouseEvent, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, MenuItem, Fade } from '@mui/material';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';

import { StyledLink, StyledLabel } from './styles';
import { NavLinkType } from 'types/link';
import { useRedirectRoutes } from 'hooks/useRedirectRoutes';
import { checkActivePath } from 'utils';

interface SelectProps extends NavLinkType {
  links?: NavLinkType[];
}

const HeaderLink: FC<SelectProps> = ({ title, links, to }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation();
  const { redirectToPage } = useRedirectRoutes();
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (links) {
      setAnchorEl(event.currentTarget);

      return;
    }

    redirectToPage(to);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <StyledLabel
        isActive={checkActivePath(pathname) === to}
        onClick={handleClick}
      >
        {title} {links && <ArrowIcon />}
      </StyledLabel>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {links?.map(({ to, title }) => (
          <MenuItem key={title} onClick={handleClose}>
            <StyledLink to={to}>{title}</StyledLink>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default memo(HeaderLink);
