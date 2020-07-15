import React from 'react';
import Axios from './Api/axios'
import { Grid } from '@material-ui/core';
import Searchbar from './Components/Searchbar';
import VideoDetail from './Components/VideoDetail';
import VideoList from './Components/VideoList';

class App extends React.Component {
  state = {
    video: [],
    selectedvideo: null
  }
  componentDidMount() {
    this.FormSubmitHandler('nature')
  }

  videoclickHandler = (video) => {
    this.setState({
      selectedvideo: video
    })
  }

  FormSubmitHandler = async (searchBar) => {
    const response = await Axios.get('search', {
      params: {
        part: 'snippet',
        maxResults: 7,
        key: 'AIzaSyA7OQwWQy7udHkN7GXtRX4tkG3_qvFf44M',
        q: searchBar,
      }
    });
    console.log(response.data.items)
    this.setState({
      video: response.data.items,
      selectedvideo: response.data.items[0]
    })
  }


  render() {
    const { selectedvideo, video } = this.state;
    return (
      <Grid justify='center' container spacing={10} >
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Searchbar onFormSubmit={this.FormSubmitHandler} />
              {/* search bar */}
            </Grid>
            <Grid item xs={8} >
              {/* video */}
              <VideoDetail video={selectedvideo} />
            </Grid>
            <Grid item xs={4}>
              {/* video list */}
              <VideoList onVideoclick={this.videoclickHandler}
                videos={video} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}


export default App;
