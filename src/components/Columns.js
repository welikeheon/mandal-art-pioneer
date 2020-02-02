import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
class Columns extends React.Component {
    state = {
        mainitem: null,
        subitem: null
    }

    handleItemPosition = (positions) => {
        this.setState({
            position: positions
        })
    }

    render() {
        return (
            <div className="columns">
                <LeftSide selectedPositions={this.handleItemPosition} />
                <RightSide selectedPositions={this.state.position} />
            </div>
        )
    }
}
export default Columns;