import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Profile</Link>
          </li>
          <li>
            <Link to="/contact">404</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/register">Register Page</Link>
          </li>
          <li>
            <Link to="/article-loading">Article Loading Page</Link>
          </li>
          <li>
            <Link to="/shops">Shops Page</Link>
          </li>
          <li>
            <Link to="/profile">Profile Page</Link>
          </li>
          <li>
            <Link to="/articles">Article List Page</Link>
          </li>
          <li>
            <Link to="/new-article">New Article Page</Link>
          </li>
          <li>
            <Link to="/comments">Comment Listing Page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;