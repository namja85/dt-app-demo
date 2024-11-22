import { NavLink } from "@/components/nav-link";

export default function LecturePage() {
  return (
    <div>
      <h1>Lecture Page</h1>

      <div className="flex flex-col">
        <NavLink active href={`/lecture/123456`}>
          JOIN 123456
        </NavLink>
        <NavLink href={`/login`}>Enter another code</NavLink>
      </div>
    </div>
  );
}
