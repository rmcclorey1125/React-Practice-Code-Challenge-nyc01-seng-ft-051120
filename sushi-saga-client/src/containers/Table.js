import React, { Fragment, Component } from 'react'

class Table extends Component {

  state = {
    money: 100
  }

  render() {

    const renderPlates = (array) => {
      return array.map((x, index) => {
        return <div className="empty-plate" style={{ top: -7 * index }}/>
      })
    }

    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.state.money} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              /* 
                 renderPlates takes an array 
                 and renders an empty plate
                 for every element in the array
              */
              renderPlates([])
            }
          </div>
        </div>
      </Fragment>
    )
  }
}
  
export default Table