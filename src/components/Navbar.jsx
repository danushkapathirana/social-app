import React, {useState} from "react";
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Mail';

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({theme}) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: "4px",
        width: "40%"
    }))

    // show all icons in large screen
    const Icons = styled(Box)(({theme}) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))

    // show only the avatar when screen is small
    const UserBox = styled(Box)(({theme}) => ({
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }))

    const[open, setOpen] = useState(false)

    return(
        <AppBar position="static">
            <StyledToolbar> {/**give some default padding and margin */}
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                Facebook
            </Typography>
            <FacebookIcon sx={{display:{xs:"block", sm:"none"}}} />

            <Search>
                <InputBase placeholder="Search"/>
            </Search>

            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{width: 30, height: 30}} src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000"
                onClick={(event) => setOpen(true)}
                />  
            </Icons>

            <UserBox>
                <Avatar sx={{width: 30, height: 30}} src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000" 
                onClick={(event) => setOpen(true)}
                /> 
                <Typography variant="span">Danushka</Typography>
            </UserBox>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(event) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
