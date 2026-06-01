import { type JSX, type ReactNode, useState } from "react";
import { FilterContext } from "../context/filterContext";

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider = ({
  children,
}: FilterProviderProps): JSX.Element => {
  const [filterKey, setFilterKey] = useState<string>("All");

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
