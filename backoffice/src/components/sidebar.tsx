import { Link } from "react-router-dom";
import "../styles/layout.scss";
const Sidebar = () => {
  return (
    <>
      <nav>
        <Link to="/posts">Posts</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </>
  );
};

export default Sidebar;
