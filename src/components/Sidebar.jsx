import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = (props) => {
    return(
        <Box flex={1} p={2} sx={{display:{xs: "none", sm: "block"}}}>
            <Box position="fixed"> {/**to stay the sidebar fixed when feed is scrolling */}
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pages"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#group">
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Group"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#marketplace">
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Freinds"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#settings">
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <ModeNightIcon />
                            </ListItemIcon>
                            <Switch onChange={(event) => {props.setMode(props.mode === "light" ? "dark" : "light")}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar
