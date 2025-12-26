import { Link, useRouteError } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const error = useRouteError;

  return (
    <div className="message">
      <h1>404</h1>
      <h2>Oops! The page you are looking for does not exist.</h2>
      {error && <p>{error.data}</p>}

      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
