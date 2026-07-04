import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-red-600 underline font-semibold"
      : "text-gray-700 hover:text-red-600 hover:transition hover:underline hover:font-semibold";

  return (
    <nav className="flex justify-between items-center p-6 shadow">
      <h1 className="text-2xl font-bold">
        FitCoach
      </h1>

      <ul className="flex items-center gap-8">
        <li>
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className={activeClass}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery" className={activeClass}>
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={activeClass}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className={activeClass}>
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}