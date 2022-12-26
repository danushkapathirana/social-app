import React from "react";
import { AppBar, styled, Toolbar } from "@mui/material";

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    return(
        <AppBar position="static">
            <StyledToolbar> {/**give some default padding and margin */}
                Navbar
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
