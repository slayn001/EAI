var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var _MS_PER_DAY = 1000 * 60 * 60 * 24;

function convertFromStringToDate(date){
  var da = date.split('/');
  return new Date(da[2], da[0]-1, da[1])
}
function getDayDiff(a,b){
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2-utc1)/_MS_PER_DAY);
}
function returnColor(date){

  var dayDiff = getDayDiff(new Date(), convertFromStringToDate(date));

  if (  dayDiff  < 0 )
    return 'red';
  else if (  dayDiff <= 14 )
    return 'amber';
}

module.exports = {

  mail: function(lst){

    var redEmailLst = [];
    var amberEmailLst = [];
    //var emailLst = [];
    lst.forEach(function(e){
      console.log(e.date);
      if ( returnColor(e.date) === 'red')
        redEmailLst.push(e.email);
      if ( returnColor(e.date) === 'amber')
        amberEmailLst.push(e.email);

      //emailLst.push(e.email);

      console.log(redEmailLst);
      console.log(amberEmailLst);

    })

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport(smtpTransport({
      host:'mail-1d.metlife.com'
      ,port: 25
    }));

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var amberMailOptions = {
        from: 'Application Code  <application@metlife.com>', // sender address
        to: amberEmailLst, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'IT Works ! ✔', // plaintext body
        html: '<b>Hello world ✔</b></br><b>Amber</b>' // html body
    };
    var redMailOptions = {
        from: 'Application Code  <application@metlife.com>', // sender address
        to: redEmailLst, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'IT Works ! ✔', // plaintext body
        html: '<b>Hello world✔</b></br><b>Red</b>' // html body
    };

    var mailOptions = [];
    mailOptions.push(amberMailOptions);
    mailOptions.push(redMailOptions);

    mailOptions.forEach(function(e){
      transporter.sendMail(e, function(error, info){
          if(error){
              return console.log(error);
          }
          console.log('Message sent: ' + info.response);
      });

    })

    // send mail with defined transport object
    // transporter.sendMail(mailOptions, function(error, info){
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log('Message sent: ' + info.response);
    // });
  }
}
