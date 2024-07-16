import { Sun,Moon } from "lucide-react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const DarkModeToggle = () => {
  const {theme,setTheme} = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [theme]);

  const onStoreData = () => {
    if(theme === "light") localStorage.setItem('theme', "dark");
    else localStorage.setItem('theme', "light");
  }

  return (
    <button
      className={`bg-transparent`}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        onStoreData()
      }} 
    >
     {
         theme === "dark" ? <Sun size={24} color="white" /> : <Moon size={24}  />
     }
    </button>
  );
};