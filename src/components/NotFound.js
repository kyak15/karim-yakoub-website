import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container mx-auto h-screen flex items-center justify-center"
      style={{ marginTop: "-80px", marginBottom: "-14px" }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-patua">404</h1>
        <p>
          Maybe you want to go back to the{" "}
          <Link
            to="/"
            className="text-primary hover:text-secondary dark:text-primary-dark dark:hover:text-secondary-dark"
          >
            homepage
          </Link>
          ?
        </p>
      </div>
    </div>
  );
};

export default NotFound;
