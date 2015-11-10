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
  ,setEnvSignOff: function(item){
    dispatcher.dispatch({
      payload: item
      ,type:'item:setEnvSignOff'
    })
  }
  ,setGuideSignOff: function(item){
    dispatcher.dispatch({
      payload: item
      ,type:'item:setGuideSignOff'
    })
  }
  ,email: function(data){
    dispatcher.dispatch({
      payload:data
      ,type:'item:email'
    })
  }
};
