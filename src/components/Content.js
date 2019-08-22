import React from 'react'
import CrochetProject from './CrochetProject'
import projectData from '../data/projects.json'

class Content extends React.Component {
    render() {
        const projectComponents = projectData.map(project => <CrochetProject key={project.key} project={project}/>)
        return <div className="mainContent">
                {projectComponents}
        </div>
    }
}

export default Content