var React = require('react');
var action = require('./../actions/ItemActionCreator.jsx');
var classNames = require('classnames');

module.exports = React.createClass({

getInitialState: function(){
  return {
    selected: this.props.selected || false
    ,trainColor: this.props.trainColor
    ,cellColor: this.props.cellOwner ? 'blue' : ''
    ,envButton: this.props.eso || false
    ,guideButton: this.props.gso || false
  }
}
,setEnvSignOff: function(e){
  this.setState({
    envButton: !this.state.envButton
  }, function(){
    console.log(this.state.envButton);
  })

  action.setEnvSignOff(this.props.item);
}
,setGuideSignOff: function(e){
  this.setState({
    guideButton: !this.state.guideButton
  }, function(){
    console.log(this.state.guideButton);
  })

  action.setGuideSignOff(this.props.item);
}
,selectItem: function(e){
  e.preventDefault();
  var selectedState = !this.state.selected;
  var color = selectedState ? 'blue' : this.props.color;
  this.setState({
    selected: selectedState
    ,color: color
  }, function(){
    console.log(this.state.selected);
  });

  this.props.callbackParent(selectedState, this.props.itemIndex);
}
,render: function(){

    var trainClasses = classNames('one', 'columns', this.state.trainColor);
    var cellClasses = classNames('one', 'columns', this.state.cellColor);
    return (
      <div className='item row'>
        <a href='#' onClick={this.selectItem}>
        <div className={trainClasses}>
          {this.props.item.train}
        </div>
      </a>
        <div className='one columns'>
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
        <div className='one columns' style={{marginLeft:2+'%'}}>
          jbrown20@metlife.com 
        </div>       
        <div className='two columns' style={{marginLeft:6+'%'}}>
          {this.props.item.server}
        </div>        
        <div className='one columns'>
          {this.props.item.cell}
        </div>
        <div className='one columns' style={{marginLeft:2+'%'}}>
          &nbsp;
        </div>
        <div className='one columns'>
          <button className='btn btn-primary' disabled={this.state.envButton} onClick={this.setEnvSignOff}>{this.state.envButton?'Done':'Sign'}</button>
        </div>
        <div className='one columns'>
          <button className='btn btn-primary' disabled={this.state.guideButton} onClick={this.setGuideSignOff}>{this.state.guideButton?'Done':'Sign'}</button>
        </div>
      </div>
    )
  }
});
