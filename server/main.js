var express = require('express');
var app = new express();
var parser = require('body-parser');
var React = require('react');
var Item = require('./models/Item.js');
var ReactDOMServer = require('react-dom/server');

require('babel/register');
require('./database.js');

app.get('/',function(req, res){
  //res.render('./../app/index.ejs', {});
  var application = React.createFactory(require('./../app/components/ItemList.jsx'));

  Item.find(function(err, doc){
    var generated = ReactDOMServer.renderToString(application({
      items:doc
      }));

      res.render('./../app/index.ejs',{ reactOutput: generated} );
  });

})
.use(express.static(__dirname + '/../.tmp'))
.listen(9001);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);
