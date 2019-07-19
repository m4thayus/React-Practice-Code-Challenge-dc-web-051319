import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
            props.plates.map((sushi) => {
                return < Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />
            })
        }
        <MoreButton fillPlates={props.fillPlates} />
      </div>
    </Fragment>
  )
}

export default SushiContainer