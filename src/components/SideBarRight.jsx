import React from "react";
import SearchBar from "./SearchBar";
import SuggestedUsers from "./SuggestedUsers";
import Trends from "./Trends";

function SideBarRight() {
  return (
    <>
      <SearchBar />
      <Trends />
      <SuggestedUsers />
    </>
  );
}

export default SideBarRight;
