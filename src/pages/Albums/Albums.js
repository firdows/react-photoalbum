import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAlbums} from '../../actions'
import AlbumList from '../../components/Albums/AlbumList'

export default class Albums extends Component {

    componentDidMount() {
        //this.props.dispatch(loadAlbums(this.props.params.userID))
    }

    render() {
      const {albums} = this.props
      if(albums){
        return <div>Not Load Albums</div>
      }
        return (
            <div>
                <h1>Album {this.props.params.title}</h1>
                {/* <AlbumList data={albums.data} /> */}
            </div>
        )
    }
}
