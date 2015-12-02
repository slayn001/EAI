var React = require('react');
var action = require('./../actions/ItemActionCreator.jsx');
var Modal = require('react-bootstrap/lib/Modal');
var classNames = require('classnames');
var ItemDatePicker = require('./ItemDatePicker.jsx');

var _MS_PER_DAY = 1000 * 60 * 60 * 24;

module.exports = React.createClass({

getInitialState: function(){
  return {
    modalIsOpen: false
    ,showModal: false
    ,dateColor: this.returnColor(this.props.item)
    ,cellColor: this.props.item.cellOwner ? 'blue' : ''
    ,envButton: this.props.eso || false
    ,guideButton: this.props.gso || false
    ,testerEmail: this.props.item.testerEmail
    ,tgtConvDate: this.props.item.tgtConvDate
  }
}
,convertFromStringToDate:function(date){
  var da = date.split('/');
  return new Date(da[2], da[0]-1, da[1]);
}
,getDayDiff: function(a,b){
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2-utc1)/_MS_PER_DAY);
}
,returnColor: function(item){

  var dayDiff = this.getDayDiff(new Date(), this.convertFromStringToDate(item.tgtConvDate));
 
  if (  dayDiff  < 0 )
    return 'red';
  else if (  dayDiff <= 14 )
    return 'amber';
  else
    return 'green';
}
,onChildChanged: function(date){
  this.setState({tgtConvDate:date});
}
,openModal: function(){
  this.setState({modalIsOpen: true});
}
,closeModal: function(){
  this.setState({modalIsOpen: false});
}
,handleModalCloseRequest: function(){
  this.closeModal();
}
,close: function(){
    this.setState({ showModal: false });
}
,open: function() {
    this.setState({ showModal: true });
}
,handleDateModalCloseRequest: function(){
  this.closeDateModal();
}
,setEnvSignOff: function(e){
  this.setState({ envButton: !this.state.envButton})
  action.setEnvSignOff(this.props.item);
}
,setGuideSignOff: function(e){
  this.setState({ guideButton: !this.state.guideButton })
  action.setGuideSignOff(this.props.item);
}
,handleChange: function(e){
  this.setState({testerEmail:e.target.value})
}
,handleDateChange: function(e){
  this.setState({tgtConvDate:e.target.value})
}
,updateTester: function(e){

  this.props.item.testerEmail = this.state.testerEmail;
  action.setTesterEmail(this.props.item);

  this.closeModal();
}
,updateDate: function(e){
  this.props.item.tgtConvDate = this.state.tgtConvDate;
  action.setTgtConvDate(this.props.item);

  this.setState({
    dateColor : this.returnColor(this.props.item)
  });

  this.closeDateModal();
}
,render: function(){

    
    var cellClasses = classNames('one', 'columns', this.state.cellColor);
    var dateClasses = classNames('one', 'columns', this.state.dateColor);

    return (

      <div className='item row'>
        <div className={dateClasses} onClick={this.open}>
          {this.props.item.tgtConvDate}
        </div>
        <div className='one columns'>
          <span>{this.props.item.eai}</span>
        </div>
        <div className='two columns' title={this.props.item.managerEmail}>
          {this.props.item.projectManager}
        </div>
        <div className='one columns' title={this.props.item.appName}>
          {this.props.item.appName.substring(0,5)}
        </div>
        <div className='one columns' style={{marginLeft:2+'%'}} onClick={this.openModal}>
          {this.props.item.testerEmail}
        </div>       
        <div className='two columns' style={{marginLeft:6+'%'}}>
          {this.props.item.server}
        </div>        
        <div className={cellClasses}>
          {this.props.item.cell}
        </div>
        <div className='one columns'>
          &nbsp;
        </div>
        <div className='one columns'>
          <button className='btn btn-primary' disabled={this.state.envButton} onClick={this.setEnvSignOff}>{this.state.envButton?'Done':'Sign'}</button>
        </div>
        <div className='one columns'>
          <button className='btn btn-primary' disabled={this.state.guideButton} onClick={this.setGuideSignOff}>{this.state.guideButton?'Done':'Sign'}</button>
        </div>

        <Modal className='Modal__Bootstrap modal-dialog' isOpen={this.state.modalIsOpen} onRequestClose={this.handleModalCloseRequest}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4> Tester Email </h4>
          </div>
          <div className='modal-body'>
            <input type='text' placeholder={this.props.item.testerEmail} id='input' onChange={this.updateDate}/>
          </div>
          <div className='modal-footer'>
            <button type="button" className="btn btn-default" onClick={this.handleModalCloseRequest}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.updateTester}>Update</button>
          </div>
        </div>
      </Modal>

      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
           

            <h4>Tooltips in a modal</h4>
            
            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
});
