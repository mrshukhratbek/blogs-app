import React from 'react';
//styles
import { style } from './Header.styles';
//antd components
import { PageHeader } from 'antd';
//components
import { Logo } from './components';

export function Header() {
  return (
    <PageHeader>
      <div style={style.header}>
        <Logo />
      </div>
    </PageHeader>
  );
}
