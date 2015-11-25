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
  ,render: function(){
    return (

      <div>
        <ListNav items={this.props.items}/>
        <ListHeader />

        <div>
          {this.props.items.map(function(item, i){

            return(
            <Item  eso={item.envSignOff} gso={item.guideSignOff} item={item} key={item._id} itemIndex={i}/>
            )
          }, this).sort(function(a, b){
            return a.props.item.train-b.props.item.train;
          })}
        </div>
      </div>
    )
  }
});
