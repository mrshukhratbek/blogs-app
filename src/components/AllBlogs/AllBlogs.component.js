import React from 'react';
//layouts
import { FlexWrapper } from '../Layouts/FlexWrapper';
//antd components
import { List } from 'antd';
//components
import { Blog } from '@components';

export function AllBlogs() {
  const listData = [
    {
      href: 'https://ant.design',
      title: `ant design part 1`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    },
    {
      href: 'https://ant.design',
      title: `ant design part 2`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }
  ];

  return (
    <FlexWrapper direction="column">
      <h1>Recent Posts</h1>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => <Blog />}
      />
    </FlexWrapper>
  );
}
