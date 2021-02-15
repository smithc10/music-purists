import React, { Component } from "react";

import AlbumList from "../album/AlbumList";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <AlbumList />
        </div>
      </div>
    );
  }
}
