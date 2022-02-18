import React from 'react'
import { useState } from 'react'

export default function CommentItem(data, k) {
    const [readMore, setReadMore] = useState(false);
    const checkReadMore = () => {
      setReadMore(prev => (!prev))
    }
    return (
        <div className="comments-item" key={k}>
        <div className="left">
          <img src={data.data.ava} alt="" />
        </div>
        <div className="right">
          <div className="top">
            <p className="name">{data.data.name}</p>
            <img src={data.data.stars} alt="" />
          </div>
          <div className={ readMore ? "bottom vision" : "bottom"} >
           {readMore ? '' : <button className="more" onClick={checkReadMore}>Читать далее</button>}

            {data.data.comment}
          </div>
        </div>
      </div>
    )
}
