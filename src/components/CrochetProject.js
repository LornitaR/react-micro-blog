import React from 'react'
import Image from 'react-bootstrap/Image'

class CrochetProject extends React.Component {
    render() {
        return (
            <div className="crochetProject">
                <h2>{this.props.project.name}</h2>
                <p>{this.props.project.description}</p>
                <Image src={process.env.PUBLIC_URL + this.props.project.photo} alt={this.props.project.alt} thumbnail className="projectImage"></Image>
            </div>
        )
    }
}

export default CrochetProject