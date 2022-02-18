import React from 'react'
import { useSelector } from 'react-redux';

export default function ProgressBar() {
  let progress = useSelector(state => state.count);
    return (
        <div className="progress-bar">
        <div className={progress < 12 ? 'bar bar-' + progress : 'bar bar-12'}></div>
      </div>
    )
}
