var httpntlm = require('httpntlm');
var fs = require('fs')

httpntlm.get({
    url: "https://peopleportal2.sapient.com/pages/peopleportal.aspx",
    username: 'vakadi',
    password: 'Cutth1@crap',
    workstation: 'choose.something',
    domain: ''
}, function (err, res){
    if(err) return err;

    console.log(res.headers);
    //console.log(res.body);
    fs.writeFile('./pp.outer.html.ntlm.txt', res.body, function (err) {});
});