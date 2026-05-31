import { type ReactNode, useState } from "react";
import { FilterContext } from "../context/filterContext";

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filterKey, setFilterKey] = useState("All");

  return (
    <FilterContext.Provider
      value={{
        filterKey,
        setFilterKey,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
