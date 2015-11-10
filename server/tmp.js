  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');

  var lst = [{'email':'jbrown20@mailinator.net'},{'email':'jbrown21@mailinator.net'},{'email':'jbrown22@mailinator.net'}];
  var emailLst = [];
  lst.forEach(function(e){
    emailLst.push(e.email);
  })
  console.log(emailLst);
  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport(smtpTransport({
    host:'mail-1d.metlife.com'
    ,port: 25
  }));

  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
      to: emailLst, // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'IT Works ! ✔', // plaintext body
      html: '<b>Hello world ✔</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
