import React, { FC } from "react";
interface propsType {
  children: React.ReactNode;
}
const Header: FC<propsType> = (props) => {
  return <div>{props.children}</div>;
};

export default Header;
