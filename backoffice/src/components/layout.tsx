import { FC, ReactNode } from "react";
import Sidebar from "./sidebar";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="page">
        <div className="sidebar">
          <Sidebar />
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default BaseLayout;
