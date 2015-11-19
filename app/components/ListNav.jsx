var React = require('react');
var Nav = require( 'react-bootstrap/lib/Nav' );
var NavBrand = require('react-bootstrap/lib/NavBrand' );
var NavItem = require( 'react-bootstrap/lib/NavItem' );
var Navbar = require( 'react-bootstrap/lib/Navbar' );
var NavDropdown = require('react-bootstrap/lib/NavDropdown' );
var DropdownButton = require( 'react-bootstrap/lib/DropdownButton' );
var MenuItem = require( 'react-bootstrap/lib/MenuItem' );
var Modal = require('react-modal/lib/index');

module.exports = React.createClass({
  getInitialState: function(){
     return {modalIsOpen: false};
  }
  ,openModal: function(header,prompt){
    this.setState({modalIsOpen: true, header:header, prompt: prompt});
  }
  ,closeModal: function(){
    this.setState({modalIsOpen: false});
  }
  ,handleModalCloseRequest(){
    this.closeModal();
  }

  ,handleSelect: function(event, selectedKey){
    event.preventDefault();
    console.log('you selected ' + selectedKey);
    
    if (selectedKey === '2'){
      console.log('2');
    }
    else if (selectedKey === '3'){
      this.openModal('train number', 'please enter the train you want to email');
    }
    else if (selectedKey === '4'){
      this.openModal('date', 'please enter the date you want to email');
    }
    else if (selectedKey === '5'){
      console.log('5');
    }
  }
  
  ,render:function(){
    return (
      <div>
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
            <MenuItem eventKey="5">Email All</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>

      <Modal className='Modal__Bootstrap modal-dialog' isOpen={this.state.modalIsOpen} onRequestClose={this.handleModalCloseRequest}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4> {this.state.header} </h4>
          </div>
          <div className='modal-body'>
            {this.state.prompt} <input type='text' id='input' />
          </div>
          <div className='modal-footer'>
            <button type="button" className="btn btn-default" onClick={this.handleModalCloseRequest}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Email</button>
          </div>
        </div>
      </Modal>
      </div>
    )
  }
});
