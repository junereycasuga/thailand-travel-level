import { Outlet } from "react-router-dom";
import ".././App.css";
import { ThemeProvider } from "react-bootstrap";

const Layout = () => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
