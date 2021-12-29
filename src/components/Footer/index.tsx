import { ReactNode } from 'react';

import * as S from './styles';

type FooterProps = {
  className?: string;
  children: ReactNode;
};

const Footer = ({ className, children }: FooterProps) => {
  return <S.Wrapper className={className}>{children}</S.Wrapper>;
};

export default Footer;
