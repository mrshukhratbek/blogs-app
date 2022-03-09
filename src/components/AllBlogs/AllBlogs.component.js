import React from 'react';
//layouts
import { FlexWrapper } from '../Layouts/FlexWrapper';
//antd components
import { Typography } from 'antd';

const { Title } = Typography;

export function AllBlogs() {
  return (
    <FlexWrapper>
      <Title>Recent Posts</Title>
    </FlexWrapper>
  );
}
