// @flow
import React, { type Element } from 'react';

type PropsType = {
  /**
   * Content of the button
   */
  children: ?Element<*>;
  /**
   * Specifies the width of the button. Default 100%
   */
  width: string;
  /**
   * What happens when you click on the button
   */
  onClick: () => void;
}

export default function Button(props: PropsType): Element<*> {
  const {
    onClick,
    width,
    children,
  } = props;
  return (
    <button
      style={{ width }}
      onClick={onClick}
    >{children}</button>
  );
}

Button.defaultProps = {
  width: '100%',
  onClick: () => {}
};
