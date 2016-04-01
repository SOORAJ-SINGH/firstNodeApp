var OAuth = require('oauth-1.0a');
var request = require('request');
require('request-debug')(request);
var qs = require('querystring');
var rl = require('readline');

// set up ========================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
// configuration =================

app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users

app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

 //application -------------------------------------------------------------
app.get('*', function (req, res) {
    res.sendFile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

var oauthTest = {}

oauthTest.consumer = {
    public: '84841701c891d8467665b7fce03a771c',
    secret: '13079f58f080836a'
};
oauthTest.oauth = OAuth({
    consumer: oauthTest.consumer,
    signature_method: 'HMAC-SHA1'
});

oauthTest.tempToken = {
    public: 'b9951b08f60e1be286ed704a63408bab',//'d9080660fb3f5cf332e9a682075a3163',
    secret: 'f317aff5f1c50399'//'796e8dffb0c7d34b'
};
oauthTest.accessToken = {
    public: 'e9f2fe113386dd099508a451d1c8cd9c',//'aba5c1896e95fa83959116da3c311555',
    secret: 'cd6eebd88adb59a7' //'95902af4554f3097'
};

oauthTest.verifier='';
//oauthTest.step1_tempToken = function () {
//    var request_data1 = {
//        url: 'https://www.upwork.com/api/auth/v1/oauth/token/request',
//        method: 'POST',
//        data: {}
//    };
//    request({
//        url: request_data1.url,
//        method: request_data1.method,
//        form: oauthTest.oauth.authorize(request_data1) // no token yet
//    }, function (error, response, body) {
//        //process your data here
//        if (error) {
//            console.log(error);
//        }
        
//        var data = qs.parse(body);
//        oauthTest.tempToken.public = data.oauth_token;
//        oauthTest.tempToken.secret = data.oauth_token_secret;
//        console.log("temp roken" + oauthTest.tempToken.public + "and secret temp token" + oauthTest.tempToken.secret + "verifier is " + data.oauth_verifier);
//        console.log("visit the url" + "'https://www.upwork.com/services/api/auth?oauth_token=" + oauthTest.tempToken.public );
//        var i = rl.createInterface(process.stdin, process.stdout);
//          i.question(' and enter a verifier: ', function (verifier) {
//               i.close();
//              process.stdin.destroy();
//              step3_accessToken(verifier);

//    });
//});

//step3_accessToken = function (_verifier) {
//    var request_data2 = {
//        url: 'https://www.upwork.com/api/auth/v1/oauth/token/access',
//        method: 'POST',
//        data: {
//            oauth_verifier: _verifier
//        }
//    };
//    request({
//        url: request_data2.url,
//        method: request_data2.method,
//        form: oauthTest.oauth.authorize(request_data2, oauthTest.tempToken) // use the temp token
//    }, function (error, response, body) {
//        //process your data here
//        if (error) {
//            console.log(error);
//        }
        
//        var data = qs.parse(body);
//        oauthTest.accessToken.public = data.oauth_token;
//        oauthTest.accessToken.secret = data.oauth_token_secret;
//        console.log("access roken" + oauthTest.accessToken.public + "secret access token" + oauthTest.accessToken.secret);
//        console.log("going to search data");
//       // queryAPI();

//    });
//};

//function getOauthData(data) {
//    var url = '';
//    url += "oauth_consumer_key=" + data.oauth_consumer_key;
//    url += "&oauth_signature=" + data.oauth_signature;
//    url += "&oauth_nonce=" + data.oauth_nonce;
//    url += "&oauth_signature_method=" + data.oauth_signature_method;
//    url += "&oauth_timestamp=" + data.oauth_timestamp;
//    url += "&oauth_token=" + data.oauth_token;
//    url += "&oauth_version=" + data.oauth_version;
//    return url;
//}


// api ---------------------------------------------------------------------
app.post('/api/search1', function (req, res) {

    var request_data = {
        url: 'https://www.upwork.com/api/profiles/v2/search/jobs.json',
        method: 'GET',
       // data: {
       //'title': 'dot net developer'
       //}
        data: req.body
    };
  
    console.log(request_data.data);
   request({
        //url: url,
        url: request_data.url,
        method: request_data.method,
        qs: oauthTest.oauth.authorize(request_data, oauthTest.accessToken) // use the access token
    }, function (error, response, body) {
        //process your data here
        if (error) {
            console.log(error);
        }
        else
        {
           
            console.log("get search data \n");
            console.log(body);
           //var data = qs.parse(body);
           //console.log(data);
         // var jsonres = JSON.stringify(data);
           //console.log(data);
           res.json(body);
        }
        
    });
});
module.exports = app;