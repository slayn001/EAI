var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

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
      mailObj.to = e.managerEmail;
      mailObj.subject = 'Self Service WebSphere Application Server Dev Handoff';
      mailObj.text = e.projectManager + '\nYour application ' + e.appName + ' is coming due for migration on ' + e.tgtConvDate + '\nPlease visit the following link \twww.google.com';
      mailObj.html = '<div><b>' + e.projectManager + '</b><div>Your application, '+ e.appName + ' is coming due for migration on ' + e.tgtConvDate + '</div><div>Please visit the following link <a href="www.google.com">Google</a></div></div>';

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




    // setup e-mail data with unicode symbols
    // var amberMailOptions = {
    //     from: 'WAS Dev Migration  <wasdevmigration@metlife.com>', // sender address
    //     to: amberEmailLst, // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'IT Works ! ✔', // plaintext body
    //     html: '<b>Hello world ✔</b></br><b>Amber</b>' // html body
    // };
    // var redMailOptions = {
    //     from: 'WAS Dev Migration  <wasdevmigration@metlife.com>', // sender address
    //     to: redEmailLst, // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'IT Works ! ✔', // plaintext body
    //     html: '<b>Hello world✔</b></br><b>Red</b>' // html body
    // };
    //
    // var mailOptions = [];
    // mailOptions.push(amberMailOptions);
    // mailOptions.push(redMailOptions);
    //
    // mailOptions.forEach(function(e){
    //   transporter.sendMail(e, function(error, info){
    //       if(error){
    //           return console.log(error);
    //       }
    //       console.log('Message sent: ' + info.response);
    //   });
    //
    // })
    //
    //
    // var mailObj = {
    //   from: mailfrom
    //   ,to: mailto
    //   ,subject: mailsubject
    //   ,text: mailtext
    //   ,html: mailhtml
    // }
    // var mailLst = [];
    //
    // // send mail with defined transport object
    // // transporter.sendMail(mailOptions, function(error, info){
    // //     if(error){
    // //         return console.log(error);
    // //     }
    // //     console.log('Message sent: ' + info.response);
    // // });
  }
}
