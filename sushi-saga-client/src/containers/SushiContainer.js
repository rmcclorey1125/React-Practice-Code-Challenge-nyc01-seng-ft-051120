import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushis)

  // const moreClickHandler = () => {
  //   // props.numOfSushi = props.numOfSushi + 4
  // }

  const fourSushi = props.sushis.slice(0,props.numOfSushi).map(sushi => <Sushi key={sushi.id} {...sushi}/>)

  return (
    <Fragment>
      <div className="belt">
        {
          fourSushi
        }
        <MoreButton onClick={props.showMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer