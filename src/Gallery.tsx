import { Outlet } from "react-router";
import Breadcrumbs from "./BreadCrumbs";

export default function Gallery() {
  return (
    <div>
      <Breadcrumbs />
      <Outlet />
    </div>
  );
}
