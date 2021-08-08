import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar() {
    const [liked, setLiked] = useState(false); 
  return (
      <div className="videoSidebar">
          <div className="videoSidebar_button">
              {liked ? (
                  <FavoriteIcon onClick={(e) => setLiked(false)}/>
              ) : (
                    <FavoriteBorderIcon onClick={(e) => setLiked(true)}/> )}
              <p>386.6k</p>
          </div>
          <div className="videoSidebar_button">
              <MessageIcon />
              <p>3746</p>
      </div>
      <div className="videoSidebar_button">
              <ShareIcon />
              <p>1775</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
