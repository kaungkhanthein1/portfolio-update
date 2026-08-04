import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "var(--bg-primary)" }}
    >
      <h1
        className="text-8xl font-bold mb-4"
        style={{ color: "var(--accent-primary)" }}
      >
        404
      </h1>
      <p
        className="text-xl mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        Page not found
      </p>
      <Link to="/" className="btn-primary">
        Go Home
      </Link>
    </div>
  );
};
