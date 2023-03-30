import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("/app/recipes");
};
export default function AppIndex() {
  return (
    <div className="h-screen container mx-auto max-w-3xl py-20 px-3"></div>
  );
}
