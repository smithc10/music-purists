import React, { Component } from "react";

import AlbumCard from "./AlbumCard";

export default class AlbumList extends Component {
  render() {
    return (
      <div className="row">
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </div>
    );
  }
}
