import React, { FC, Fragment } from 'react';

import { StyledTitle, StyledDescription } from './styles';

interface PageTitleSectionProps {
  title: string;
  description: string;
}

const PageTitleSection: FC<PageTitleSectionProps> = ({
  title,
  description,
}) => (
  <Fragment>
    <StyledTitle>{title}</StyledTitle>
    <StyledDescription>{description}</StyledDescription>
  </Fragment>
);

export default PageTitleSection;
