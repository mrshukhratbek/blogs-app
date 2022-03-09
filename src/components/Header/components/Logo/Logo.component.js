import React from 'react';
//react-router-dom elements
import { Link } from 'react-router-dom';
//styles
import { style } from './Logo.style';
//imgs
import LogoImg from '@assets/img/logo.png';
import LogoImg2x from '@assets/img/logo@2x.png';

export function Logo() {
  return (
    <Link style={style.a} to="/">
      <img
        src={LogoImg}
        alt="Site logo"
        width={58}
        height={58}
        srcSet={`${LogoImg} 1x, ${LogoImg2x} 2x`}
      />
      <span style={style.span}>BlogsApp</span>
    </Link>
  );
}
