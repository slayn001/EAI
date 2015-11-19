var React = require('react');
var Nav = require( 'react-bootstrap/lib/Nav' );
var NavBrand = require('react-bootstrap/lib/NavBrand' );
var NavItem = require( 'react-bootstrap/lib/NavItem' );
var Navbar = require( 'react-bootstrap/lib/Navbar' );
var NavDropdown = require('react-bootstrap/lib/NavDropdown' );
var DropdownButton = require( 'react-bootstrap/lib/DropdownButton' );
var MenuItem = require( 'react-bootstrap/lib/MenuItem' );

module.exports = React.createClass({
  
  handleSelect: function(event, selectedKey){
    event.preventDefault();
    console.log('you selected ' + selectedKey);
    
    if (selectedKey === '2'){
      console.log('2');
    }
    else if (selectedKey === '3'){
      console.log('3');
    }
    else if (selectedKey === '4'){
      console.log('4');
    }
    else if (selectedKey === '5'){
      console.log('5');
    }
  }
  
  ,render:function(){
    return (
      <Navbar fixedTop={true}>
        <NavBrand><a href="#"><img src='/metlifeLogo.png' /></a></NavBrand>
        <Nav>
          <NavItem className='red'>Delinquent</NavItem>
          <NavItem className='amber'>Upcoming</NavItem>
          <NavItem className='green'>Future Item</NavItem>
          <NavItem className='blue'>Cell Owner</NavItem>
        </Nav>
        <Nav right={true} onSelect={this.handleSelect}>
          <NavDropdown title="Email" id="basic-nav-dropdown">
            <MenuItem eventKey="2">Email Selected</MenuItem>
            <MenuItem eventKey="3">Email By Train</MenuItem>
            <MenuItem eventKey="4">Email By Date</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="5">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
});
