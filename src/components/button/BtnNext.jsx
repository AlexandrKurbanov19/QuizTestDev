import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function BtnNext(props) {
    const dispatch = useDispatch();
    let progress = useSelector(state => state.count);
   
  
    const changeProgressBar = () => {
      dispatch({type: "ADD_PROGRESS", payload: 1});
    }
    
    return (
        <div className="btn next" onClick={()=> changeProgressBar()}  data-next="1">{props.children}</div>
    )
}
