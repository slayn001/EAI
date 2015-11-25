var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function ItemStore(){
  var items = [];

  helper.get('/api/items')
  .then(function(data){
    items = data;
    triggerListeners();
  });

  var listeners = [];

  function getItems(){
    return items;
  };

  function addItem(item){
    items.push(item);
    triggerListeners();

    helper.post('/api/items', item);
    helper.get('/api/items')
    .then(function(data){
      items = data;
      triggerListeners();
    });
  };

  function deleteItem(item){
    console.log(item);
    var index;
    items.filter(function(_item, _index){
      if ( _item.name == item.name){
        index = _index;
      }
    });
    items.splice(index, 1);
    triggerListeners();

    helper.del('/api/items/' + item._id);
  }

  function setEnvSignOff(item, envSignOff){
    item.envSignOff = envSignOff || false;
    item.envSignOffDate = new Date();
    triggerListeners();
    helper.patch('/api/items/' + item._id, item);
  }

  function setGuideSignOff(item, guideSignOff){
    item.guideSignOff = guideSignOff || false;
    item.guideSignOffDate = new Date();
    triggerListeners();
    helper.patch('/api/items/' + item._id, item);
  }

  function setTesterEmail(item){
    triggerListeners();
    helper.patch('/api/items/' + item._id, item);
  }

  function setTgtConvDate(item){
    triggerListeners();
    helper.patch('/api/items/' + item._id, item);
  }

  function email(lst){
    triggerListeners();
    helper.post('/api/email', lst);
  }

  function onChange(listener){
    listeners.push(listener);
  };

  function triggerListeners(){
    listeners.forEach(function(listener){
      listener(items);
    })
  };

  dispatcher.register(function(event){
    var split = event.type.split(':');

    if (split[0] === 'item'){
      switch(split[1]){
        case 'setEnvSignOff' :
          setEnvSignOff(event.payload, true);
          break;
        case 'setGuideSignOff' :
          setGuideSignOff(event.payload, true);
          break;
        case 'setTesterEmail' :
          setTesterEmail(event.payload);
          break;
        case 'setTgtConvDate' :
          setTesterEmail(event.payload);
          break;
        case 'email' :
          email(event.payload);
          break;
      }
    }
  });

  return {
    getItems:getItems
    ,onChange:onChange
  };

};

module.exports = new ItemStore();
