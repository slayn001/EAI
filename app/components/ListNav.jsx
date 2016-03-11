var React = require('react');
var ReactDom = require('react-dom');
var Nav = require( 'react-bootstrap/lib/Nav' );
var NavBrand = require('react-bootstrap/lib/NavBrand' );
var NavItem = require( 'react-bootstrap/lib/NavItem' );
var Navbar = require( 'react-bootstrap/lib/Navbar' );
var NavDropdown = require('react-bootstrap/lib/NavDropdown' );
var DropdownButton = require( 'react-bootstrap/lib/DropdownButton' );
var MenuItem = require( 'react-bootstrap/lib/MenuItem' );
var Modal = require('react-bootstrap/lib/Modal');
var action = require('./../actions/ItemActionCreator.jsx');

module.exports = React.createClass({
  getInitialState: function(){
     return {
      showModal: false
    }
  }
  ,chunkList: function(lst,size){
    var tmp = []

    var j = 0;

    for ( var i = 0; i < lst.length; i++){
      if ( j== size || j == 0){
        tmp.push(lst.slice(i,(i+size)));
        j=0;
      }j++;
    }

    return tmp;
  }
  ,openModal: function(){
    this.setState({showModal: true});
  }
  ,closeModal: function(){
    this.setState({showModal: false});
  }
  ,emailAll: function(e){

    var arrSquared = this.chunkList(this.props.items,50);

    arrSquared.forEach(function(e){
      action.email(e);
    })
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

    var arrSquared = this.chunkList(lst,50);

    arrSquared.forEach(function(e){
      action.email(e);
    })
    
    this.closeModal();

  }

  ,handleSelect: function(event, selectedKey){
    event.preventDefault();
    console.log('you selected ' + selectedKey);

    if (selectedKey === '2'){
      var lst = [];
      this.props.items.forEach(function(e){
        if ( lst.indexOf(e.testerEmail) < 0)
          lst.push(e.testerEmail);
      });
      this.setState({header: 'Email Address', prompt: 'email@metlife.com', code:'testerEmail', choices:lst})
      this.openModal();
    }
    else if (selectedKey === '3'){
      var lst = [];
      this.props.items.forEach(function(e){
        if ( lst.indexOf(e.train) < 0)
        lst.push(e.train);
      });
      this.setState({header: 'Train Number', prompt: 'Train', code:'train', choices:lst})
      this.openModal();
    }
    else if (selectedKey === '4'){
      var lst = [];
      this.props.items.forEach(function(e){
        if ( lst.indexOf(e.tgtConvDate) < 0)
          lst.push(e.tgtConvDate);
      });
      this.setState({header: 'Target Conversion Date', prompt: 'Target Conversion Date', code:'tgtConvDate', choices:lst})

      this.openModal();
    }
    else if (selectedKey === '5'){
      this.emailAll();
    }else if (selectedKey === '6'){
      console.log(event.target.innerText);
      this.setState({prompt:event.target.innerText, mailInput:event.target.innerText});
    }
  }

  ,render:function(){

    var lst = this.state.choices || [];

    return (
      <div>
      <Navbar fixedTop={true}>
        <NavBrand><a href="#"><img src='/metlifeLogo.png' /></a></NavBrand>
        <Nav>
          <NavItem className='redBack'>Delinquent</NavItem>
          <NavItem className='amberBack'>Upcoming</NavItem>
          <NavItem className='greenBack'>Future Item</NavItem>
          <NavItem className='blueBack'>Cell Owner</NavItem>
        </Nav>

        <Nav right={true} onSelect={this.handleSelect}>
          <NavDropdown title="Email" id="basic-nav-dropdown">
            <MenuItem eventKey="2">By Email</MenuItem>
            <MenuItem eventKey="4">By Date</MenuItem>
            <MenuItem eventKey='3'>By Train</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="5">Email All</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>

      <Modal show={this.state.showModal} onHide={this.closeModal}>
        <Modal.Header>
          Email by {this.state.header}
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='one column'>
              &nbsp;
            </div>
            <div className='three columns'>
              <NavDropdown title="Selection" id='basic-nav-dropdown' onSelect={this.handleSelect}>
                {lst.map(function(e, i){
                  return (
                    <MenuItem eventKey='6'> {e} </MenuItem>
                  )
                })}
              </NavDropdown>
            </div>
            <div className='four columns'>
              {this.state.prompt}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-default" onClick={this.closeModal}>Close</button>
          <button type="button" className="btn btn-primary" onClick={this.sendEmail}>Email</button>
        </Modal.Footer>
      </Modal>

      </div>
    )
  }
});
