import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.fillPlates()}>
            More sushi!
          </button>
}

export default MoreButton