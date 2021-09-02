import { useState } from "react";

const useQueryStrings = () => {
  const [query, setQuery] = useState("");

  const addQuery = (params = {}) => {
    if (!params) {
      return null;
    }
    const queryString = Object.entries(
      params.map(([key, value]) => {
        return `&${key}=${value}`;
      })
    );
    setQuery(queryString);
  };

  return [query, addQuery];
};

export default useQueryStrings;
