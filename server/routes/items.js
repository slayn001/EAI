module.exports = function(app){

  var Item = require('./../models/Item.js');
  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');
  var mailer = require('./../email.js');

  app.route('/api/items')
  .get(function(req, res){
    Item.find(function(error, doc){
      res.send(doc);
    })

  })
  .post(function(req, res){
    var item = req.body;
    var gItem = new Item(item);
    gItem.save(function(err, data){
      res.status(300).send();
    })
  })

  app.route('/api/email')
  .post(function (req, res){
    mailer.mail(req.body);
    res.status(200).send();
  })

  app.route('/api/items/:id')
  .get(function(req, res){
    Item.findOne({_id:req.params.id},function(err, doc){
      res.send(doc);
    } )
  })

  app.route('/api/items/:id')
  .delete(function(req,res){
    Item.findOne({
      _id:req.params.id
    }).remove(function(x){
      console.log('removed.',x);
    });
  })
  .patch(function(req,res){
    Item.findOne({
      _id:req.body._id
    }, function (error, doc){
      for ( var key in req.body){
        doc[key] = req.body[key]
      }
      doc.save();
      res.status(200).send();
    })
  })
}
