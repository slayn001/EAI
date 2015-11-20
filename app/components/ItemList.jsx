var React = require('react');
var action = require('./../actions/ItemActionCreator.jsx');
var Item = require('./Item.jsx');
var ListNav = require('./ListNav.jsx');
var ListHeader = require('./ListHeader.jsx');

var _MS_PER_DAY = 1000 * 60 * 60 * 24;

module.exports = React.createClass({
  getInitialState:function(){

    
    return {
      checked:false
      
    }
  }
  ,onChildChanged: function(newState,i){
    this.setState({checked:newState});
    this.props.items[i].selected = newState;
    console.log('you clicked: ' + this.props.items[i]._id);
  }
  ,convertFromStringToDate:function(date){
    var da = date.split('/');
    return new Date(da[2], da[0]-1, da[1])
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
  ,emailSelected: function(e){
    var lst = [];

    this.props.items.forEach(function(item){
      if ( item.selected){
        lst.push(item);
      }
    });

    console.log(lst);
    action.email(lst);
  }
  ,render: function(){
    return (

      <div>
        <ListNav items={this.props.items}/>
        <ListHeader />

        <div>
          {this.props.items.map(function(item, i){

            return(
            <Item  eso={item.envSignOff} gso={item.guideSignOff} cellOwner={item.cellOwner} trainColor={this.returnColor(item)} callbackParent={this.onChildChanged} item={item} key={item._id} itemIndex={i}/>
            )
          }, this).sort(function(a, b){
            return a.props.item.train-b.props.item.train;
          })}
        </div>

        <div className = 'emailChecked'>
            <button onClick={this.emailSelected}> Email Selected </button>
        </div>

      </div>
    )
  }
});
