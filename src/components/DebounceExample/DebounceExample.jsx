import { useEffect, useState } from "react";
import { useDebounce } from "../hooks"

export const DebounceExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  useEffect(() => {
    if (debouncedSearchTerm === "") return;
    setCount((prev) => prev + 1)
  }, [debouncedSearchTerm])

  return (
    <div className="app">
      <h1>useDebounce Hook</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="values">
        <div className="value-box">
          <strong>Input Value:</strong>
          <span>{searchTerm || '(empty)'}</span>
        </div>
        <div className="value-box">
          <strong>Debounced Value:</strong>
          <span>{debouncedSearchTerm || '(empty)'}</span>
        </div>
        <div>
          count: {count}
        </div>
      </div>
    </div>
  );
}