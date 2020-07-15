import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

function VideoItem({ video, onVideoclick }) {
    return (
        <Grid item xs={10}>
            <Paper onClick={() => onVideoclick(video)} style={{ cursor: 'pointer' }} >
                <img src={video.snippet.thumbnails.medium.url}
                    style={{ marginRight: '20px' }}
                    alt='thumbnails' />
                <Typography varient='subtitle1'><b>{video.snippet.title}</b></Typography>
            </Paper>

        </Grid>
    )
}

export default VideoItem
