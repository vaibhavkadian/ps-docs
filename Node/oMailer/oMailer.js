var nodemailer = require("nodemailer");
var tranport = require("nodemailer-smtp-transport");

var smtpTransport = nodemailer.createTransport(tranport({
  service: "Gmail",
  auth: {
    XOAuth2: {
      user: "vaibhav.kadian@gmail.com", // Your gmail address.
                                            // Not @developer.gserviceaccount.com
      clientId: "218407527974-bsg80uircmoq9va9ek8bcs69crvgn9mt.apps.googleusercontent.com",
      clientSecret: "-z_MWfNd_7iN23E6o54_jw99",
      refreshToken: "1/Y0noE_l5IaVBceJEoG2SsJ0KpWoYR1FYw6F-U-7u5Wo"
    }
  }
}));

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <vaibhav.kadian@gmail.com>', // sender address
    to: 'vkadian2@sapient.com, vaibhav.kadian@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
  smtpTransport.close();
});
