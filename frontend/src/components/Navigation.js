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
        CDBSidebarSubMenu,
        CDBSidebarFooter,
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
            
            <div>
                
            <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Metrics
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
            </div>
            </div>
        );
    };

    export default Navigation;