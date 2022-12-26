import React, { Fragment, useState } from "react";
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { DateRange } from "@mui/icons-material";

const Add = () => {
    const StyledModal = styled(Modal)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    })

    const [open, setOpen] = useState(false)

    return(
        <Fragment>
            <Tooltip title="Add" sx={{position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}} onClick={(event) => {setOpen(true)}}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal open={open} onClose={(event) => {setOpen(false)}} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" sx={{textAlign: "center"}}>Create Post</Typography>
                    
                    <UserBox>
                        <Avatar src="" sx={{width: 30, height: 30}} />
                        <Typography fontWeight={500} variant="span">Danushka</Typography>
                    </UserBox>

                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />

                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color="primary"/>
                        <ImageIcon color="secondary"/>
                        <VideoCameraBackIcon color="success"/>
                        <PersonAddAlt1Icon color="error"/>
                    </Stack>

                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{width: "100px"}}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </Fragment>
    )
}

export default Add
