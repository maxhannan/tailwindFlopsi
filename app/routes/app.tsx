import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import AppBar from "~/components/AppBar";
import { BottomNav } from "~/components/BottomNav";

export default function App() {
  return (
    <div className="h-screen container mx-auto max-w-3xl py-20 px-3">
      <AppBar />
      <Outlet />
      <BottomNav />
    </div>
  );
}
