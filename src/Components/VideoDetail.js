import React from 'react'
import { Paper, Typography } from '@material-ui/core'

function VideoDetail(props) {
    const { video } = props

    if (!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70vh' }}>
                <iframe height="100%" width="100%" frameBorder='0' src={videoSrc}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>

                <Paper elevation={6} style={{ padding: '15px' }} >
                    <Typography varient='h4'> {video.snippet.title} - {video.snippet.channelTitle} </Typography>
                    {/* <Typography varient='subtitle1'>{video.snippet.channelTitle}</Typography> */}
                    <Typography varient='subtitle2'>{video.snippet.description}</Typography>
                </Paper>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail
