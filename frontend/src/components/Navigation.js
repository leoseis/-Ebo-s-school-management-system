import React from "react";
import{ Navbar} from 'react-bootstrap';
import logo from '../static/logo.png';

const Navigation = ()=> {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand  href="None">
            <img
            alt=""
              src={logo}
              width="40"
              height="50"
              className="d-inline-block align-center"
            />{' '}
             Student managent Application
        </Navbar.Brand>
    </Navbar>
        </div>
    );
};

export default Navigation;