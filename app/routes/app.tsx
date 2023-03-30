import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import AppBar from "~/components/AppBar";
import { BottomNav } from "~/components/BottomNav";
import { AddRecipeContextProvider } from "~/context/RecipeAdderCtx";

export default function App() {
  return (
    <div className="h-screen container mx-auto max-w-2xl py-16 px-3">
      <AddRecipeContextProvider>
        <AppBar />
        <Outlet />
        <BottomNav />
      </AddRecipeContextProvider>
    </div>
  );
}
