import React from 'react';
//react-router-dom
import { Link } from 'react-router-dom';
//antd components
import { List } from 'antd';

export function Blog() {
  return (
    <List.Item>
      <Link to="/blog/1">Blog</Link>
    </List.Item>
  );
}
