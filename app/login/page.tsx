import { NavLink } from "@/components/nav-link";

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>

      <div className="flex flex-col">
        <NavLink active href={`/lecture`}>
          (TEST)Enter 123456
        </NavLink>
        <NavLink href="/login/speaker">Login as Speaker</NavLink>
      </div>
    </div>
  );
}
