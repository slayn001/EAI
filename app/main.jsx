console.log('Hello from JSX');

var React = require('react/addons');
var ItemList = require('./components/ItemList.jsx');
var ItemStore = require('./stores/ItemStore.jsx');

var initial = ItemStore.getItems();

function render(){
  React.render(<ItemList items={initial}/>, app);
}

ItemStore.onChange(function(items){
  initial = items;
  render();
})

render();
