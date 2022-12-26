import React from "react";
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

const Rightbar = () => {
    return(
        <Box flex={1} p={2} sx={{display:{xs: "none", sm: "block"}}}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>

                <AvatarGroup max={5}>
                    <Avatar alt="Lakmi" src="" />
                    <Avatar alt="Supunee" src="" />
                    <Avatar alt="Janitha" src="" />
                    <Avatar alt="Tharu" src="" />
                    <Avatar alt="Viraj" src="" />
                    <Avatar alt="Thilina" src="" />
                    <Avatar alt="Isuru" src="" />
                    <Avatar alt="Prabash" src="" />
                    <Avatar alt="Bhagya" src="" />
                    <Avatar alt="Shehan" src="" />
                </AvatarGroup>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>

                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="" alt=""></img>
                    </ImageListItem>
                </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="" src="" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Lakmi
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="" src="" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Lakmi, Viraj, Thilina
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    
                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="" src="" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Supunee
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar
