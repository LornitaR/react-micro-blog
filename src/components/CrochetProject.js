import React from 'react'
import Image from 'react-bootstrap/Image'

class CrochetProject extends React.Component {
    render() {
        return (
            <div className="crochetProject">
                <h2>{this.props.project.name}</h2>
                <p>{this.props.project.description}</p>
                <a href={this.props.project.ravelry}>Take a look!</a>
            </div>
        )
    }
}

export default CrochetProject