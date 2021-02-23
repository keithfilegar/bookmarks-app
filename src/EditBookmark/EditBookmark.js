import React, { Component } from 'react';
import config from '../config';
import './EditBookmark.css';

class EditBookmark extends Component {
    static defaultProps = {
        onEditBookmark: () => {}
    }

    state = {
        error: null
    }

    render() {
        const { error } = this.state;
        const { onEditBookmark } = this.props
        return (
            <section className='EditBookmark'>
                <h2>Edit a Bookmark</h2>
            </section>
        )
    }
}

export default EditBookmark;