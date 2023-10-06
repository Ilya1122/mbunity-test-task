import React, { FC, Fragment } from 'react';
import { Menu, MenuItem, Fade } from '@mui/material';

import { NavLinkType } from 'types/link';

import { StyledLink, StyledLabel } from './styles';

interface SelectProps extends NavLinkType {
  links: NavLinkType[];
}

const Select: FC<SelectProps> = ({ title, links }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <StyledLabel
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {title}
      </StyledLabel>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {links.map(({ to, title }) => (
          <MenuItem key={title} onClick={handleClose}>
            <StyledLink to={to}>{title}</StyledLink>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default Select;
