import React from 'react'

const Loader = () => {
  return (
    <>
<div id="wifi-loader">
  <svg viewBox="0 0 86 86" class="circle-outer">
    <circle r="40" cy="43" cx="43" class="back"></circle>
    <circle r="40" cy="43" cx="43" class="front"></circle>
    <circle r="40" cy="43" cx="43" class="new"></circle>
  </svg>
  <svg viewBox="0 0 60 60" class="circle-middle">
    <circle r="27" cy="30" cx="30" class="back"></circle>
    <circle r="27" cy="30" cx="30" class="front"></circle>
  </svg>
  <svg viewBox="0 0 34 34" class="circle-inner">
    <circle r="14" cy="17" cx="17" class="back"></circle>
    <circle r="14" cy="17" cx="17" class="front"></circle>
  </svg>
  <div data-text="Searching" class="text"></div>
</div>

    </>
  )
}

export default Loader