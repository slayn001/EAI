var React = require('react');
var action = require('./../actions/ItemActionCreator.jsx');
var Modal = require('react-modal/lib/index');
var classNames = require('classnames');

module.exports = React.createClass({

getInitialState: function(){
  return {
    modalIsOpen: false
    ,trainColor: this.props.trainColor
    ,cellColor: this.props.cellOwner ? 'blue' : ''
    ,envButton: this.props.eso || false
    ,guideButton: this.props.gso || false
    ,testerEmail: this.props.item.testerEmail
  }
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
,updateTester: function(e){

  this.props.item.testerEmail = this.state.testerEmail;
  action.setTesterEmail(this.props.item);

  this.closeModal();
}
,render: function(){

    var trainClasses = classNames('one', 'columns', this.state.trainColor);
    var cellClasses = classNames('one', 'columns', this.state.cellColor);
    return (

      <div className='item row'>
        <div className={trainClasses}>
          {this.props.item.tgtConvDate}
        </div>
        <div className={cellClasses}>
          <span>{this.props.item.eai}</span>
        </div>
        <div className='one columns' title={this.props.item.managerEmail}>
          {this.props.item.projectManager}
        </div>
        <div className='one columns' title={this.props.item.appName} style={{marginLeft:6+'%'}}>
          {this.props.item.appName.substring(0,5)}
        </div>
        <div className='one columns' style={{marginLeft:2+'%'}} onClick={this.openModal}>
          {this.props.item.testerEmail}
        </div>       
        <div className='two columns' style={{marginLeft:6+'%'}}>
          {this.props.item.server}
        </div>        
        <div className='one columns'>
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
            <button type="button" className="btn btn-primary" onClick={this.updateTester}>Email</button>
          </div>
        </div>
      </Modal>
      </div>
    )
  }
});
