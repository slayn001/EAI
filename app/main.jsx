console.log('Hello from JSX');

var React = require('react');
var ReactDOM = require('react-dom');
var ItemList = require('./components/ItemList.jsx');
var ItemStore = require('./stores/ItemStore.jsx');

var initial = ItemStore.getItems();

function render(){
  ReactDOM.render(<ItemList items={initial}/>, app);
}

ItemStore.onChange(function(items){
  initial = items;
  render();
})

render();
