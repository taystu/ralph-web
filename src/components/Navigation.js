import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';



var classNames = require('classnames');
var Scroll = require('react-scroll');
var Waypoint = require('react-waypoint');
var scroll     = Scroll.animateScroll;
var ScrollButton = require('../components/ScrollButton');

import '../style/Navigation.scss';

export default class Navigation extends Component {

	constructor(props){
		super(props);

		this.state = {
			navbarCollapse: true
		}
	}


	handleNavClick() {
		this.setState({
			navbarCollapse: false
		})
	}




	render(){
		let homeClass = classNames({
			'nav-highlight': this.props.highlightHome
		});
		let introClass = classNames({
			'nav-highlight': this.props.highlightIntro
		});
		let locationClass = classNames({
			'nav-highlight': this.props.highlightLocation
		});
		let photoClass = classNames({
			'nav-highlight': this.props.highlightPhoto
		});

		let customNav = classNames({
			'navbar-collapse collapse': this.state.navbarCollapse,
			'navbar-collapse collapse in': !this.state.navbarCollapse
		})



		return (
			<div>
			  <Navbar fixedTop collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand >
			        <img style={{width: '81px', height: '84px', textAlign: 'center'}} src={require("../images/logo_copied.png")} alt=""/>
			      </Navbar.Brand>
			      <Navbar.Toggle onClick={()=>this.setState({navbarCollapse: !this.state.navbarCollapse})} />
			      <h4 className="navbar-title">Salty Cottage Grand Turk</h4>
			    </Navbar.Header>
					<Navbar.Collapse>
			      <Nav>
				        <NavItem className={homeClass + " nav-item"} eventKey={1} href="#"><ScrollButton to="home" spy={true} smooth={true} duration={500}>Home</ScrollButton></NavItem>
				        <NavItem className={introClass + " nav-item"} eventKey={2} href="#"><ScrollButton to="intro" spy={true} smooth={true} duration={500}>Intro</ScrollButton></NavItem>
				        <NavItem className={locationClass + " nav-item"} eventKey={3} href="#"><ScrollButton to="location" spy={true} smooth={true} duration={500}>Location</ScrollButton></NavItem>
				        <NavItem className={photoClass + " nav-item"} eventKey={4} href="#"><ScrollButton to="photos" spy={true} smooth={true} duration={500}>Photos</ScrollButton></NavItem>
			      </Nav>
		    	</Navbar.Collapse>
			</Navbar>
		</div>
		)
	}
}