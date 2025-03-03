import { Outlet } from "react-router";
import Navigation from "../components/Navigation";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}