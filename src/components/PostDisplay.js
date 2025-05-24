/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const PostDisplay = (props) => {
  const { records } = props;
  const deletePost=(payload)=>{
    const found = records.filter(item => item.title !== payload.title);
    props.setRecords(found);
  }
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {records && records.length > 0 ? (
        records.map((item, index) => (
          <div key={index} className="post-box">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={(e)=>deletePost(item)}>Delete</button>
          </div>
        ))
      ) : (
         null
      )}

    </div>
  );
}

export default PostDisplay;
