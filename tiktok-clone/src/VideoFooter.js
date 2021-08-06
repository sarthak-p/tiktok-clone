import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter() {
  return (
      <div className="videoFooter">
          <div className="videoFooter_text">
              <h3>@jcruzalvarez26</h3>
              <p>This is a description</p>
              <MusicNoteIcon />
          </div>
          <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
    </div>
  );
}

export default VideoFooter;