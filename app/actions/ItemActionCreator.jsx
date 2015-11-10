var dispatcher = require('./../dispatcher.js');

module.exports = {
  add: function(item){
    dispatcher.dispatch({
      payload: item
      , type:'item:add'
    });
  }
  ,delete: function(item){
    dispatcher.dispatch({
      payload: item
      , type:'item:delete'
    });
  }
  ,unPurchase: function(item){
    dispatcher.dispatch({
      payload: item
      , type:'item:unPurchase'
    });
  }
  ,purchase: function(item){
    dispatcher.dispatch({
      payload: item
      , type:'item:purchase'
    });
  }
  ,setEmailed: function(item){
    dispatcher.dispatch({
      payload: item
      , type:'item:setEmailed'
    })
  }
  ,email: function(data){
    dispatcher.dispatch({
      payload:data
      ,type:'item:email'
    })
  }
};
