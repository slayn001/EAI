var React = require('react');
var ReactDom = require('react-dom');
var Nav = require( 'react-bootstrap/lib/Nav' );
var NavBrand = require('react-bootstrap/lib/NavBrand' );
var NavItem = require( 'react-bootstrap/lib/NavItem' );
var Navbar = require( 'react-bootstrap/lib/Navbar' );
var NavDropdown = require('react-bootstrap/lib/NavDropdown' );
var DropdownButton = require( 'react-bootstrap/lib/DropdownButton' );
var MenuItem = require( 'react-bootstrap/lib/MenuItem' );
var Modal = require('react-modal/lib/index');
var action = require('./../actions/ItemActionCreator.jsx');

module.exports = React.createClass({
  getInitialState: function(){
     return {
      modalIsOpen: false
      ,items: this.props.items
    }
  }
  ,openModal: function(header,prompt){
    this.setState({modalIsOpen: true});
  }
  ,closeModal: function(){
    this.setState({modalIsOpen: false});
  }
  ,handleModalCloseRequest: function(){
    this.closeModal();
  }
  ,emailAll: function(e){
    action.email(this.props.items);
  }
  ,handleChange: function(e){
    e.preventDefault();
    this.setState({mailInput: e.target.value})
  }
  ,sendEmail: function(){

    var index = this.state.code;
    var input = this.state.mailInput;
    var lst = [];

    this.props.items.forEach(function(e){
      if ( e[index].toString() === input)
        lst.push(e);
    })
    action.email(lst);
    this.closeModal();

  }
  ,handleSelect: function(event, selectedKey){
    event.preventDefault();
    console.log('you selected ' + selectedKey);
    
    if (selectedKey === '2'){
      this.setState({header: 'Email by Manager', prompt: 'Train Number', code:'train'})
      this.openModal();
    }
    else if (selectedKey === '3'){
      this.setState({header: 'Email by Train Number', prompt: 'Train Number', code:'train'})
      this.openModal();
    }
    else if (selectedKey === '4'){
      this.setState({header: 'Email by Target Conversion Date', prompt: 'Target Conversion Date', code:'tgtConvDate'})
      this.openModal();
    }
    else if (selectedKey === '5'){
      this.emailAll();
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
            <MenuItem eventKey="2">Email By Email</MenuItem>
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
            <input type='text' placeholder={this.state.prompt} id='input' onChange={this.handleChange}/>
          </div>
          <div className='modal-footer'>
            <button type="button" className="btn btn-default" onClick={this.handleModalCloseRequest}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.sendEmail}>Email</button>
          </div>
        </div>
      </Modal>
      </div>
    )
  }
});
