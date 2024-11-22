import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/login");

  return <h1>Home</h1>;
}
