import { createContext } from "react";

type FilterContextType = {
  filterKey: string;
  setFilterKey: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterContext = createContext<FilterContextType | null>(null);
