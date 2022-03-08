import React from 'react';

export const hoc = (hook, Component, displayName = 'HocWrapper') => {
  const HocResult = (props) => {
    const hookProps = hook(props);
    return <Component {...hookProps} {...props} />;
  };

  HocResult.hook = hook;
  HocResult.Original = Component;
  HocResult.displayName = displayName;

  return HocResult;
};
