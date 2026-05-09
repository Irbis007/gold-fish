import { Link, useLocation } from "react-router-dom";

export function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/");
  return (
    <div className="flex items-center gap-1">
      <Link to={"/"} className="link">
        Home
      </Link>
      {paths.map((path, i) => {
        const currentPath = paths.slice(0, i + 1).join("/");

        const editedPath = path.charAt(0).toLocaleUpperCase() + path.split('-').join(' ').slice(1, path.length)

        return currentPath === location.pathname ? (
          <div key={i} className="text-gray-400">
            {editedPath}
          </div>
        ) : (
          <span key={i}>
            <Link to={currentPath} className="link">
              {editedPath}
            </Link>
            <span className="px-1">{">"}</span>
          </span>
        );
      })}
    </div>
  );
}
