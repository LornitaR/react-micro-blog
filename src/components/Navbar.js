import React from 'react'
import userData from './../data/config.json'
import profilePhoto from './../img/lornitar.jpg'
import Image from 'react-bootstrap/Image'

class Navbar extends React.Component {
    render() {
        return <header className='fixed-top'>
            Welcome to {userData.name}'s blog!
            <br />
            <Image src={profilePhoto} alt="profile" roundedCircle height="100rem"/>
        </header>
    }
}

export default Navbar