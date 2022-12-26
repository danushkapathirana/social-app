import React, { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

const App = () => {

  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  
  return(
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}> {/**set the dark mode colors */}
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
