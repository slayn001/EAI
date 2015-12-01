var React = require('react');
var action = require('./../actions/ItemActionCreator.jsx');
var Modal = require('react-modal/lib/index');
var classNames = require('classnames');

var _MS_PER_DAY = 1000 * 60 * 60 * 24;

module.exports = React.createClass({

getInitialState: function(){
  return {
    modalIsOpen: false
    ,dateModalIsOpen: false
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
,openModal: function(){
  this.setState({modalIsOpen: true});
}
,closeModal: function(){
  this.setState({modalIsOpen: false});
}
,handleModalCloseRequest: function(){
  this.closeModal();
}
,openDateModal: function(){
  this.setState({dateModalIsOpen: true});
}
,closeDateModal: function(){
  this.setState({dateModalIsOpen: false});
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
        <div className={dateClasses} onClick={this.openDateModal}>
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
            <input type='text' placeholder={this.props.item.testerEmail} id='input' onChange={this.handleChange}/>
          </div>
          <div className='modal-footer'>
            <button type="button" className="btn btn-default" onClick={this.handleModalCloseRequest}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.updateTester}>Update</button>
          </div>
        </div>
      </Modal>

      <Modal className='Modal__Bootstrap modal-dialog' isOpen={this.state.dateModalIsOpen} onRequestClose={this.handleDateModalCloseRequest}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4> Target Conversion Date </h4>
          </div>
          <div className='modal-body'>
            <input type='text' placeholder={this.props.item.tgtConvDate} id='input' onChange={this.handleDateChange}/>
          </div>
          <div className='modal-footer'>
            <button type="button" className="btn btn-default" onClick={this.handleDateModalCloseRequest}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.updateDate}>Update</button>
          </div>
        </div>
      </Modal>

      </div>
    )
  }
});
