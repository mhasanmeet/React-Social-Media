import "./leftbar.scss";
import Friends from "../../assets/friends.png";
import Events from "../../assets/events.png";
import Fundraiser from "../../assets/fundraiser.png";
import Gallery from "../../assets/gallery.png";
import Group from "../../assets/group.png";
import Marketplace from "../../assets/marketplace.png";
import Memories from "../../assets/memories.png";
import Videos from "../../assets/videos.png";
import Watch from "../../assets/watch.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">

        <div className="menu">
          <div className="user">
            <img src="https://source.unsplash.com/WNoLnJo7tS8" alt="" />
            <span>John Doe</span>
          </div>

          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          <div className="item">
            <img src={Fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>

          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>

          <div className="item">
            <img src={Group} alt="" />
            <span>Group</span>
          </div>

          <div className="item">
            <img src={Marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          
          <hr />

          <div className="item">
              <img src={Memories} alt="" />
              <span>Memories</span>
            </div>

            <div className="item">
              <img src={Videos} alt="" />
              <span>Videos</span>
            </div>

            <div className="item">
              <img src={Watch} alt="" />
              <span>Watch</span>
            </div>

            <div className="item">
              <img src={Friends} alt="" />
              <span>Friends</span>
            </div>

            <hr />

            <div className="item">
              <img src={Watch} alt="" />
              <span>Watch</span>
            </div>

            <div className="item">
              <img src={Friends} alt="" />
              <span>Friends</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar