import React from 'react'
import InputMandalArt from './InputMandalArt'

class RightSide extends React.Component {
    state = {
        title: '',
        content: ''
    }
    render() {
        return ( 
            <div className="column">
                <InputMandalArt
                    onCreate={this.handleCreate}
                    mainitem={this.props.selectedPositions.mainitem}
                    subitem={this.props.selectedPositions.subitem}
                />
            </div>
        )
    }
}

RightSide.defaultProps = {
    selectedPositions: '',

}
export default RightSide;