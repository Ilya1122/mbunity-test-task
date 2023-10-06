import React, { FC } from 'react';

import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as DiscordIcon } from 'assets/icons/discord.svg';

import { StyledContainer, StyledEllipse } from './styles';

const ContactInformationSocialLink: FC = () => {
  return (
    <StyledContainer>
      <StyledEllipse>
        <TwitterIcon />
      </StyledEllipse>

      <StyledEllipse>
        <InstagramIcon />
      </StyledEllipse>

      <StyledEllipse>
        <DiscordIcon />
      </StyledEllipse>
    </StyledContainer>
  );
};

export default ContactInformationSocialLink;
