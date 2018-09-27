import React, { Component } from 'react'
import {Link} from 'react-router'

export default class Album extends Component {
  render() {
      const {data}= this.props
    return (
      <div>
        <h3>
            <Link to = {`/photo/${data.id}/${data.title}`}>{data.title}</Link>
        </h3>
      </div>
    )
  }
}
