import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" >
        { props.sushi.eaten ? null :
            <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" onClick={() => props.eatSushi(props.sushi)} />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi