import React from 'react';
//antd styes
import 'antd/dist/antd.css';
//antd components
import { Input, Space } from 'antd';

const { Search: SearchInput } = Input;

export function Search() {
  const onSearch = (value) => console.log(value);

  return (
    <Space direction="vertical">
      <SearchInput placeholder="Search" onSearch={onSearch} style={{ width: 262 }} enterButton />
    </Space>
  );
}
