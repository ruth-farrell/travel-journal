import React from 'react'

export default function PostItNote({children, imgLoading}) {
  return (
    <div className="post-it-note">
      <img
        src={process.env.PUBLIC_URL + `/images/travelpostit.png`}
        alt=""
        width="440"
        height="436"
        className="post-it-note-img"
        loading={imgLoading}
      />
      <div className="post-it-note-content">
        {children}
      </div>
    </div>
  ) 
}