    import React from "react";
    import{ Navbar} from 'react-bootstrap';
    import logo from '../static/logo.png';
    import "../App.css";

    const Navigation = ()=> {
        return (
            <div>
        <Navbar bg="dark" variant="dark"expand ='lg'>
            <Navbar.Brand className="app-logo" href="/">
                <img
                alt=""
                src={logo}
                width="40"
                height="50"
                className="d-inline-block align-center"
                />{' '}
               All Joy Student managent Application Portal
            </Navbar.Brand>
        </Navbar>
            </div>
        );
    };

    export default Navigation;