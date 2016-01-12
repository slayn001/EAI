var React = require('react');
var action = require('./../actions/ItemActionCreator.jsx');
var Modal = require('react-bootstrap/lib/Modal');
var classNames = require('classnames');
var ItemDatePicker = require('./ItemDatePicker.jsx');

var _MS_PER_DAY = 1000 * 60 * 60 * 24;

module.exports = React.createClass({

  getInitialState: function(){
    return {
      showEmailModal: false
      ,showDateModal: false
      ,dateColor: this.returnColor(this.props.item)
      ,cellColor: this.props.item.cellOwner ? 'blue' : ''
      ,envButton: this.props.eso || false
      ,guideButton: this.props.gso || false
      ,testerEmail: this.props.item.testerEmail
      ,tgtConvDate: this.props.item.tgtConvDate
      ,train:  this.props.item.train || 0
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
  ,openEmailModal: function(){
    this.setState({showEmailModal: true});
  }
  ,closeEmailModal: function(){
    this.setState({showEmailModal: false});
  }
  ,closeDateModal: function(){
      this.setState({ showDateModal: false });
  }
  ,openDateModal: function() {
      this.setState({ showDateModal: true });
  }
  ,increaseTrain: function(e){
      this.setState({train: this.state.train+1});
      action.setTrainNum(this.props.item);
  }
  ,decreaseTrain: function(e){
      e.preventDefault();
      this.setState({train: this.state.train-1});
      action.setTrainNum(this.props.item);
  }
  ,setTrainNum: function(e){
    this.setState({train: e})
  }
  ,setEnvSignOff: function(e){
    this.setState({ envButton: !this.state.envButton});
    action.setEnvSignOff(this.props.item);
  }
  ,setGuideSignOff: function(e){
    this.setState({ guideButton: !this.state.guideButton });
    action.setGuideSignOff(this.props.item);
  }
  ,handleEmailChange: function(e){
    this.setState({testerEmail:e.target.value})
  }
  ,updateEmail: function(e){

    this.props.item.testerEmail = this.state.testerEmail;
    action.setTesterEmail(this.props.item);

    this.closeEmailModal();
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
          <div className={dateClasses} onClick={this.openDateModal}>
            {this.props.item.tgtConvDate}
          </div>
          <div className='one columns'>
            <span>{this.props.item.eai}</span>
          </div>
          <div className='one columns' style={{marginLeft:0+'%'}} onClick={this.increaseTrain} onContextMenu={this.decreaseTrain}>
            {this.state.train}
          </div>
          <div className='two columns' title={this.props.item.managerEmail} style={{marginLeft: 2+'%'}}>
            {this.props.item.projectManager}
          </div>
          <div className='one columns' title={this.props.item.appName}>
            {this.props.item.appName.substring(0,5)}
          </div>
          <div className='one columns' style={{marginLeft:2+'%'}} onClick={this.openEmailModal}>
            {this.props.item.testerEmail}
          </div>       
          <div className='two columns' style={{marginLeft:6+'%'}}>
            {this.props.item.server}
          </div>        
          <div className={cellClasses}>
            {this.props.item.cell}
          </div>
          <div className='one columns' style={{marginLeft:8+'%'}}>
            <button className='btn btn-primary' disabled={this.state.envButton} onClick={this.setEnvSignOff}>{this.state.envButton?'Done':'Sign'}</button>
          </div>
          <div className='one columns'>
            <button className='btn btn-primary' disabled={this.state.guideButton} onClick={this.setGuideSignOff}>{this.state.guideButton?'Done':'Sign'}</button>
          </div>

        <Modal show={this.state.showEmailModal} onHide={this.closeEmailModal}>     
          <Modal.Header>
            <Modal.Title>Change Tester Email</Modal.Title>
          </Modal.Header>
            
          <Modal.Body>
             <input type='text' placeholder={this.props.item.testerEmail} id='input' onChange={this.handleEmailChange}/>
          </Modal.Body>
            
          <Modal.Footer>
            <button type="button" className="btn btn-default" onClick={this.closeEmailModal}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.updateEmail}>Update</button>
          </Modal.Footer>
        </Modal> 

        <Modal show={this.state.showDateModal} onHide={this.closeDateModal}>     
          <Modal.Header>
            <Modal.Title>Change Target Conversion Date</Modal.Title>
          </Modal.Header>
            
          <Modal.Body>
            <ItemDatePicker date={this.state.tgtConvDate} callbackParent={this.onChildChanged}/>
          </Modal.Body>
            
          <Modal.Footer>
            <button type="button" className="btn btn-default" onClick={this.closeDateModal}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.updateDate}>Update</button>
          </Modal.Footer>
        </Modal>

        </div>
      )
    }
});
