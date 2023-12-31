import React from "react";

import type { HeaderProps } from "@components/Header/types";

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <head>
      <title>{title}</title>

      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />

      {children}
    </head>
  );
};

export default Header;
