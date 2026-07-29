import { useToggle } from "./hooks/useToggle";

export const Toggle = () => {
  const [isVisible, toggleVisible] = useToggle(false);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <h1>useToggle Hook</h1>

      <div className="controls">
        <button onClick={toggleVisible}>
          {isVisible ? 'Hide' : 'Show'} Content
        </button>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {isVisible && (
        <div className="content">
          <p>This content can be toggled!</p>
        </div>
      )}
    </div>
  );
}
