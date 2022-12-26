import React from "react";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';

const Feed = () => {
    return(
        <Box flex={4} p={2}>
            <Card>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        D
                    </Avatar>
                    }

                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }

                    title="Danushka Pathirana"
                    subheader="September 14, 2016"
                />

                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images6.alphacoders.com/101/thumb-1920-1017260.jpg"
                    alt="Panda in Tree"
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color: "red"}}/>} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Feed
