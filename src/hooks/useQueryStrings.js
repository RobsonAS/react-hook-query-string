import { useState } from "react";

const useQueryStrings = () => {
  const [query, setQuery] = useState("");

  const addQuery = (params = {}) => {
    if (!params) {
      return null;
    }
    const queryString = Object.entries(
      params.map(([key, value], index) => {
        if (index === 0) {
          return `${key}=${value}`;
        }
        return `&${key}=${value}`;
      })
    );
    setQuery(queryString.join(""));
  };

  return [query, addQuery];
};

export default useQueryStrings;
