import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Topbar from "./views/global/Topbar";
import Sidebar from "./views/global/Sidebar";
import Dashboard from "./views/dashboard";
import SignInSide from "./views/auth/SignInSide";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { checkUserToken } from "./ultis";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // useEffect(() => {
  //   const result = checkUserToken();
  //   setIsLoggedIn(result);
  //   let pathName =
  //     (!["/sing-in"].includes(location.pathname) && !result) ? "/sing-in" : "/";
  //   navigate(pathName);
  // }, [isLoggedIn]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* {!isLoggedIn ? ( */}
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        // ) : (
        //   <Routes>
        //     <Route path="/sing-in" element={<SignInSide />} />
        //   </Routes>
        // )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
