import React from 'react'
import VideoItem from './VideoItem'
import { Grid } from '@material-ui/core'

function VideoList({ videos, onVideoclick }) {

    const videoslist = videos.map((item, id) => {
        return <VideoItem key={id}
            onVideoclick={onVideoclick}
            video={item} />
    });
    return (
        <Grid container spacing={10} >
            {videoslist}
        </Grid>
    )
}

export default VideoList
