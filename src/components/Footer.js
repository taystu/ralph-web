import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap';

const Footer = (props) => {
	return (
		<div className="footer" style={{marginTop: "50px"}}>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12}>
					<p className="small text-center">For all inquiries contact <a href="mailto:taylor.stuart28@gmail.com">Salty Cottage Grand Turk</a></p>
					<p className="small text-center"><a href="tel:647-381-3923">647-381-3923</a></p>
				</Col>
			</Row>
		</div>
	);
}

export default Footer;