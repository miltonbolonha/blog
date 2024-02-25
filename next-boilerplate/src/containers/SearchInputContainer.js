import React from "react";
import SearchInput from "../components/SearchInput";

const SearchInputContainer = ({ siteUrl, subDomain }) => {
  const url = siteUrl.split("https://")[1];
  return <SearchInput siteUrl={url} subDomain={subDomain} />;
};
export default SearchInputContainer;
