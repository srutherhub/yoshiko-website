import { Link, useLocation } from "react-router";

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .reduce(
      (acc, segment) => {
        const path = `${acc[acc.length - 1].path}/${segment}`;
        const label = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        return [...acc, { label, path }];
      },
      [{ label: "Home", path: "" }],
    );

  return (
    <nav className="breadcrumbs">
      {crumbs.map((crumb, i) => (
        <span key={crumb.path}>
          {i > 0 && " / "}
          {i === crumbs.length - 1 ? (
            crumb.label
          ) : (
            <Link to={crumb.path || "/"}>{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
