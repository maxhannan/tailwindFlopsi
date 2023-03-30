import { Transition } from "@headlessui/react";
import { MenuItem, Select } from "@mui/material";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useState } from "react";
import AppBar from "~/components/AppBar";
import { BottomNav } from "~/components/BottomNav";
import RecipeFeed from "~/components/RecipeFeed";

import RecipeSummary from "~/components/RecipeSummary";
import SearchBar from "~/components/SearchBar";

import SelectBox from "~/components/SelectBox";

export const loader = () => {
  return redirect("/app/recipes");
};
export default function Index() {
  return <h1>index</h1>;
}
