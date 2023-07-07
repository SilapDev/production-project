import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import "./styles/index.scss";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="content-page" >
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
