import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, } from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux"; 
import { updateTuitThunk } from "../../services/tuits-thunks";


const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between">
      <div>
        <FontAwesomeIcon icon={faComment} fixedWidth /> {tuit.replies}
      </div>
      <div>
        <FontAwesomeIcon icon={faRetweet} fixedWidth /> {tuit.retuits}
      </div>
      <div>
        Likes: {tuit.likes}
        <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))} 
          className="bi bi-heart-fill me-2 ms-1 text-danger" role="button"></i>
      </div>
      <div>
        Dislikes: {tuit.dislikes}
        <i onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1 }))}
          className="bi bi-hand-thumbs-down-fill me-2 ms-1" role="button"></i>
      </div>
      {/* <div>
        <FontAwesomeIcon icon={tuit.liked ? faHeartSolid : faHeartRegular} fixedWidth 
        className={tuit.liked ? "text-danger" : ""} onClick={tuitLikeToggleHandler} role="button" />
        {tuit.likes}
      </div> */}
      <div>
        <FontAwesomeIcon icon={faShareNodes} fixedWidth />
      </div>
    </div>
  );
};

export default TuitStats;