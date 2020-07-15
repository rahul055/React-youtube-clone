import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core'

class Searchbar extends Component {
    state = {
        searchBar: '',
    }

    ChangeHandler = (event) => {
        this.setState({
            searchBar: event.target.value
        })
    }
    SubmitHandler = (event) => {
        const { searchBar } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchBar)
        event.preventDefault();

    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '20px' }}>
                <form onSubmit={this.SubmitHandler}>
                    <TextField label='Search...' fullWidth onChange={this.ChangeHandler} />
                </form>
            </Paper>
        )
    }
}
export default Searchbar