/**
 * controller
 * @return 
 */
var request = require("request");

var url = "http://vote.5miao.com/vote.php?&_=";
var dddd = {
  game_id: 10000190,
  wgateid: "oXwlNuB1Q4O8w-bFd5jd0Rosiix0"
};
var res = ["mobile.vote.5miao.com/mobile.h5.php?wxopenid=", "oXwlNuB1Q4O8w", "bFd5jd0Rosiix0", "&wgateid=", "&verify="];


var headers = {
  "Origin": "mobile.vote.5miao.com",
  "Referer": "",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329 MicroMessenger/5.0.1",
  "Clinet-Ip": "",
  "X-Forwarded-For": ""
};

var iii = 0, tar = 400;

var vote = function(gateid) {
  request.post({
    url: url + (+new Date()),
    form: dddd,
    headers: headers
  }, function(err, res, body) {
    if( !err ) {
      var b = JSON.parse(body);
      if( b && b["ret_code"] == 0 ) {
        iii++;
        if( console.log( "已投" + iii + "票" ) );
      } else {
        console.log(body);
      }
    } else {
      console.log("error::: " + err);
    }
  });
  console.log("发起了投票");
}


function ready(gateid, verify) {
  dddd.wgateid = gateid;
  headers["Referer"] = res[0] 
  + gateid + res[3]
  + gateid
  + res[4]
  + verify;
  headers["Clinet-Ip"] = Math.floor(Math.random()*256) + "." +Math.floor(Math.random()*256) + "." +Math.floor(Math.random()*256) + "." +Math.floor(Math.random()*256);
  headers["X-Forwarded-For"] = headers["Clinet-Ip"];
  vote(gateid);
}
global.gidList = global.gidList || [-1];
function find(gid) {
  for( var i = 1, len = gidList.length; i < len; i++ ) {
    if( gidList[i] === gid ) {
      return i;
    }
  }
  gidList[len] = gid;
  return -1;
}
var count = 1;

module.exports = Controller("Api/BaseController", function(){
  "use strict";
  return {
    voteAction: function() {
      var gid = this.get("wgateid"),
        verify = this.get("verify"),
        num = find(gid);
        if( num === -1 ) {
          num = gidList.length-1;
          ready(gid, verify);
        }
        this.assign("num", num);
        this.display();
    }
  };
});