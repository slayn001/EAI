var React = require('react');
var Nav = require( 'react-bootstrap/lib/Nav' );
var NavBrand = require('react-bootstrap/lib/NavBrand' );
var NavItem = require( 'react-bootstrap/lib/NavItem' );
var Navbar = require( 'react-bootstrap/lib/Navbar' );
var NavDropdown = require('react-bootstrap/lib/NavDropdown' );
var DropdownButton = require( 'react-bootstrap/lib/DropdownButton' );
var MenuItem = require( 'react-bootstrap/lib/MenuItem' );

module.exports = React.createClass({
  render:function(){
    return (
      <Navbar fixedTop={true}>
        <NavBrand><a href="#"><img src='/metlifeLogo.png' /></a></NavBrand>
        <Nav>
          <NavItem className='red'>Delinquent</NavItem>
          <NavItem className='amber'>Upcoming</NavItem>
          <NavItem className='green'>Future Item</NavItem>
        </Nav>
        <Nav right={true}>
          <NavDropdown  eventKey={3} title="Email" id="basic-nav-dropdown">
            <MenuItem eventKey="1">Email Selected</MenuItem>
            <MenuItem eventKey="2">Email By Train</MenuItem>
            <MenuItem eventKey="3">Email By Date</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
});
