var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var templates = require('./emailTemplates.js');

module.exports = {

  mail: function(lst){

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport(smtpTransport({
      host:'mail-1d.metlife.com'
      ,port: 25
    }));
    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    var mailObjectList = [];
    
    lst.forEach(function(e){
      
      var mailObj = {};

      mailObj.from = 'WAS Dev Migration  <wasdevmigration@metlife.com>';
      mailObj.to = e.testerEmail;
      mailObj.subject = 'Self Service WebSphere Application Server Dev Handoff';
      mailObj.html = templates.template(e);

      mailObjectList.push(mailObj);
    })

    mailObjectList.forEach(function(e){
      transporter.sendMail(e, function(error, info){
          if(error){
              return console.log(error);
          }
          console.log('Message sent: ' + info.response);
      }); 
    })
  }
}
