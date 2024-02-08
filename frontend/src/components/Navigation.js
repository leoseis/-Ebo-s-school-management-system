    import React from "react";
    import{ Navbar} from 'react-bootstrap';
    import logo from '../static/logo.png';
    import "../App.css";

    import {
        CDBSidebar,
        CDBSidebarHeader,
        CDBSidebarMenuItem,
        CDBSidebarContent,
        CDBSidebarMenu,
      } from 'cdbreact';


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
            
      <div className="sidebar">
            <CDBSidebar textColor="333"backgroundColor="fofofo">    
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="list">Students</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="user" iconType="solid">
              Manage Students
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

       </CDBSidebar>
      </div>
    </div>
        );
    };

    export default Navigation;