import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, faBookmark, faEllipsisH, faEnvelope, faHashtag, faHouse, faListUl, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavigationSidebar = (
  {
    active = 'explore'
  }
) => {
  library.add(faHouse, faTwitter, faBell, faHashtag, faBookmark, faEnvelope, faEllipsisH, faUser, faListUl)

  return (
    <div className="list-group">
      <a href="#!" className="list-group-item">
        <FontAwesomeIcon icon="fa-brands fa-twitter" fixedWidth />
      </a>
      <a href="#!" className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-house" fixedWidth />
        <span className="d-none d-xl-inline">Home</span>
      </a>
      <a href="#!" className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-hashtag" fixedWidth />
        <span className="d-none d-xl-inline">Explore</span>
      </a>
      <a href="#!" className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-bell" fixedWidth />
        <span className="d-none d-xl-inline">Notifications</span>
      </a>
      <a href="#!" className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-envelope" fixedWidth />
        <span className="d-none d-xl-inline">Messages</span>
      </a>
      <a href="#!" className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-bookmark" fixedWidth />
        <span className="d-none d-xl-inline">Bookmarks</span>
      </a>
      <a href="#!" className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-list-ul" fixedWidth />
        <span className="d-none d-xl-inline">Lists</span>
      </a>
      <a href="#!" className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-user" fixedWidth />
        <span className="d-none d-xl-inline">Profile</span>
      </a>
      <a href="#!" className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-ellipsis-h" fixedWidth />
        <span className="d-none d-xl-inline">More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;

