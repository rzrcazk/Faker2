/**
自动评价
cron 21 7,13,21 * * * jd_comment.js
*/
const $ = new Env('自动评价');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = jsonParse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
}
//用户过滤关键字环境变量！
let userKeyWords = process.env.userKeyWords && process.env.userKeyWords.split('@') || [];
//获取评论内容的最少字数环境变量，默认6！
let wordcount = process.env.wordcount ?? 6;
// 是否执行 默认不执行
let isComment = process.env.isCommentPic ?? false;
var _0xodo='jsjiami.com.v6',_0xodo_=['‮_0xodo'],_0x58c4=[_0xodo,'ZW9Vbms=','aXlyYmM=','bG9n','ZU9ncG0=','cGljVVJM','cmVwbGFjZQ==','ZmxLSEg=','bGVuZ3Ro','dml5ZlA=','dndLa3c=','Q25Cc0w=','LCDlpLHotKUhIOWOn+WboDog','TU16dk4=','cFlWVXU=','Zmxvb3I=','a0F3ZUg=','cmFuZG9t','a1FDeEU=','amRhcHA7aVBob25lOzEwLjAuODsxNC42Ow==','O25ldHdvcmsvd2lmaTtKREVib29rL29wZW5hcHAuamRyZWFkZXI7bW9kZWwvaVBob25lOSwyO2FkZHJlc3NpZC8yMjE0MjIyNDkzO2FwcEJ1aWxkLzE2ODg0MTtqZFN1cHBvcnREYXJrTW9kZS8wO01vemlsbGEvNS4wIChpUGhvbmU7IENQVSBpUGhvbmUgT1MgMTRfNiBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDUuMS4xNSAoS0hUTUwsIGxpa2UgR2Vja28pIE1vYmlsZS8xNkUxNTg7c3VwcG9ydEpEU0hXSy8x','VXNlck5hbWU=','c1B4ck4=','bWF0Y2g=','aW5kZXg=','bEF3VUY=','aXNMb2dpbg==','bmlja05hbWU=','Y29tbWVudFdhcmVMaXN0','Y29tbWVudEluZm9MaXN0','a1dUV2I=','CioqKioqKuW8gOWni+OAkOS6rOS4nOi0puWPtw==','KioqKioqKioqCg==','44CQ5o+Q56S644CRY29va2ll5bey5aSx5pWI','5Lqs5Lic6LSm5Y+3','Cuivt+mHjeaWsOeZu+W9leiOt+WPlgpodHRwczovL2JlYW4ubS5qZC5jb20vYmVhbi9zaWduSW5kZXguYWN0aW9u','aXNOb2Rl','c0NleUQ=','c2VuZE5vdGlmeQ==','Y29va2ll5bey5aSx5pWIIC0g','Cuivt+mHjeaWsOeZu+W9leiOt+WPlmNvb2tpZQ==','VVRWZFc=','562J5b6FLi4u','d2FpdA==','Y2F0Y2g=','ZmluYWxseQ==','ZG9uZQ==','5rKh5pyJ5b6F6K+E5Lu3ISE=','dXNlckluZm8=','YXNzZXRJbmZv','YmVhbk51bQ==','5Lqs5Lic5pyN5Yqh5Zmo6L+U5Zue56m65pWw5o2u','Y1d3aGo=','Zm14YWE=','ZHBn','d2VicA==','YXZpZg==','bVlkaFk=','WkFEcFc=','cHViQ29tbWVudA==','MTY5OQ==','W3siVmlkZW9Jc0VkaXRDb3ZlciI6IjAiLCJJbWFnZVByb3BJZCI6IjAiLCJJbWFnZVRha2VQaG90b0ZpbHRlcklkIjoiMCIsIkltYWdlSXNDcm9wIjoiMCIsIlZpZGVvSXNFZGl0Q3JvcCI6IjAiLCJWaWRlb0VkaXRGaWx0ZXJJZCI6IjAiLCJWaWRlb011c2ljSWQiOiIwIiwiSW1hZ2VFZGl0RmlsdGVySWQiOiIwIiwiVmlkZW9Qcm9wSWQiOiIwIiwiVGFrZVJhdGUiOiIwIiwiVmlkZW9SZWNvcmRJc01ha3VwIjoiMCIsIkltYWdlVGFrZVBob3RvSXNNYWt1cCI6IjAiLCJWaWRlb1JlY29yZEZpbHRlcklkIjoiMCIsIkltYWdlRm9udElkIjoiMCIsIkZyb21UeXBlIjoiMSIsIkltYWdlU3RyaWNrSWQiOiIwIn0seyJWaWRlb0lzRWRpdENvdmVyIjoiMCIsIkltYWdlUHJvcElkIjoiMCIsIkltYWdlVGFrZVBob3RvRmlsdGVySWQiOiIwIiwiSW1hZ2VJc0Nyb3AiOiIwIiwiVmlkZW9Jc0VkaXRDcm9wIjoiMCIsIlZpZGVvRWRpdEZpbHRlcklkIjoiMCIsIlZpZGVvTXVzaWNJZCI6IjAiLCJJbWFnZUVkaXRGaWx0ZXJJZCI6IjAiLCJWaWRlb1Byb3BJZCI6IjAiLCJUYWtlUmF0ZSI6IjAiLCJWaWRlb1JlY29yZElzTWFrdXAiOiIwIiwiSW1hZ2VUYWtlUGhvdG9Jc01ha3VwIjoiMCIsIlZpZGVvUmVjb3JkRmlsdGVySWQiOiIwIiwiSW1hZ2VGb250SWQiOiIwIiwiRnJvbVR5cGUiOiIxIiwiSW1hZ2VTdHJpY2tJZCI6IjAifV0=','Z3NWRHA=','U0tWT3E=','S21VcnA=','aHNuSUw=','bWF4UGFnZQ==','eHhIYm8=','bmh3ZXY=','V25CdHc=','c1lFQlQ=','d2FyZUlk','REdxek4=','eWFLaE0=','Y29tbWVudEluZm8=','cGljdHVyZUluZm9MaXN0','bWVkaWFUeXBl','WnZDbmw=','aW5kZXhPZg==','dmVhS3U=','cnV5WUs=','R01XY0c=','c2VBa3g=','eHJsUEI=','ZENkYlg=','a1JralQ=','bG9nRXJy','c2ZiS20=','cGFyc2U=','cmV0Y29kZQ==','ZGF0YQ==','aGFzT3duUHJvcGVydHk=','UGpjeHE=','YmFzZUluZm8=','bmlja25hbWU=','b1lQTFo=','YmVhbkNvdW50','WGpPT3E=','QVpZc2I=','cHVzaA==','Y29tbWVudFNjb3Jl','Y29tbWVudERhdGE=','c29tZQ==','aW5jbHVkZXM=','VGZqTEc=','6K+E5Lu35YaF5a656KKr6L+H5ruk77yM5ZCr5pyJ5YWz6ZSu6K+NLeOAkA==','VEN0aHQ=','5Y676K+E5Lu3IC0tLT4g','d25hbWU=','CuaIkOWKn+iOt+WPluWIsOWbvueJh++8jOWOu+W4puWbvuivhOS7tyEK','UGFZaXg=','Y2F0ZWdvcnlMaXN0','Vkx0d0E=','b3JkZXJJZA==','c2hvcElk','RlhRaG8=','bkhIc24=','CuaIkOWKn+iOt+WPluWIsOWbvueJh++8jOS4lOayoeacieiOt+WPluWIsOivhOS7t+WGheWuue+8jOmHh+eUqOiEmuacrOiHquW4puivhOS7t++8jOWOu+W4puWbvuivhOS7tyEK','WUdwQVk=','UlZKU20=','CuayoeacieiOt+WPluWIsOWbvueJh++8jOS4lOiOt+WPluWIsOivhOS7t++8jOWOu+ivhOS7tyEK','aUd5Tm8=','YXRlZ29yeUxpc3Q=','TUNOTnM=','CuayoeacieiOt+WPluWIsOivhOS7t+WGheWuuSzph4fnlKjohJrmnKzoh6rluKbor4Tku7cK','Qll6eXk=','b3RObVY=','Z2V0Q29tbWVudExpc3RXaXRoQ2FyZA==','5YeG5aSH6I635Y+W6K+E5Lu3Li4u','UEltZkw=','Z2V0Q29tbWVudFdhcmVMaXN0','Y29tbWVudFdhcmVMaXN0SW5mbw==','cmV2ZXJzZQ==','YXBpLm0uamQuY29t','YXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVk','Ki8q','dWRFdkM=','aHR0cHM6Ly9hcGkubS5qZC5jb20vY2xpZW50LmFjdGlvbj9mdW5jdGlvbklkPQ==','Ym9keQ==','b3dlQWI=','Q2R3a2s=','VkhqRVo=','emgtSGFucy1KUDtxPTEsIGVuLUpQO3E9MC45LCB6aC1IYW50LVRXO3E9MC44LCBqYS1KUDtxPTAuNywgZW4tVVM7cT0wLjY=','SGZxRUQ=','WHpzREc=','SldwaXY=','cXVoREw=','cG9zdA==','WkplU0Y=','bWVzc2FnZQ==','YU51VXE=','UVpSREg=','dG9TdHJpbmc=','c2xpY2U=','ZkxGSkw=','dEFmeVY=','SXpmZnQ=','aHR0cDovL2Zha2VybWV0YXZlcnNlLnh5ei9zaWdu','YXBwbGljYXRpb24vanNvbg==','eXJvb3U=','c3RyaW5naWZ5','U3J1d2U=','dG9DVFk=','ZWNTQ1Y=','R2dwY3A=','a0xUcmM=','VHZubm4=','SUJpWFA=','cUdOQWw=','bkpzYWE=','b3llQVg=','cUxtbmU=','cEludmg=','RnB4Um8=','c0hqVkU=','aHR0cHM6Ly93cS5qZC5jb20vdXNlcl9uZXcvaW5mby9HZXRKRFVzZXJJbmZvVW5pb24/c2NlbmV2YWw9Mg==','a2VlcC1hbGl2ZQ==','Z3ppcCwgZGVmbGF0ZSwgYnI=','ZHlxclY=','QVdaWnA=','aGV4clA=','aGF4bmQ=','c2lnR2Q=','Y1pMc2Y=','d3EuamQuY29t','WUpieXM=','TVZaSHQ=','emgtY24=','aHR0cHM6Ly9ob21lLm0uamQuY29tL215SmQvbmV3aG9tZS5hY3Rpb24/c2NlbmV2YWw9MiZ1ZmM9Jg==','Q0huZFY=','Z2V0','SVFzU2M=','aWRYYk4=','Yk9HTUo=','Tk9RUEU=','ZlVSQnA=','RFByaEI=','VlhLbEQ=','5b6I5Z6D5Zy+','6LSo6YeP5beu','5q2k55So5oi35pyq5aGr5YaZ6K+E5Lu35YaF5a65','572R5LiK6LSt54mp6L+Z5LmI5r+A54OI77yM5rKh5oOz5Yiw5bqX5a6255qE5pyN5Yqh6L+Z5LmI5aW977yM5ZWG5ZOB6LSo6YeP5aW96ICM5Lu35L2O5buJ77yM5oiR5aSq5oSf6LCi5L2g5LqG44CC','6LSo6YeP6Z2e5bi45aW977yM55yf5Ye65LmO5oiR55qE5oSP5paZ77yM5YyF6KOF6Z2e5bi45LuU57uG77yM6Z2e5bi45oSf6LCi77yM56Wd55Sf5oSP5YW06ZqG44CC','6L+Z5a625bqX6L+Y5aW95ZCn77yM5p2l5Lmw6L+H5Yeg5qyh5LqG77yM5pyN5Yqh6ICB5a6i5oi36Z2e5bi45ZGo5Yiw77yM5Lul5ZCO6L+Y5bi45p2l44CC','5Y2W5a6255qE5pyN5Yqh5oCB5bqm55yf5aW977yM5Y+R6LSn5b6I5b+r44CC5ZWG5ZOB6LSo6YeP5Lmf55u45b2T5LiN6ZSZ44CC5aSq5Zac5qyi5LqG77yM6LCi6LCi44CC','5Yeg5Lul5YmN5Yeg5LmO5LuO5pyq6K6k55yf6K+E5Lu36L+H77yM5Lmf5LiN55+l6YGT5rWq6LS55LqG5aSa5bCR5YiG44CC5oiR5ZCs6K+06K+E5Lu35Lit5pyJMTAw5aSa5Liq5Y2V6K+N77yM5Z+65pys5LiK5piv5q+P5ZGo6K6/6Zeu5LiA5qyh44CC5Zyo5Lqs5Lic6LSt54mp5aSq5pa55L6/5LqG77yM5qC55pys5YGc5LiN5LiL5p2l44CC5LuO6YKj5pe26LW377yM6LSt5Lmw5pel55So5ZOB5pe26aaW5YWI5oOz5Yiw55qE5bCx5piv5Lqs5Lic77yM5a6D5piv55yf5q2j55qE44CC6LW35Yid5oiR5b6I5ouF5b+D44CC546w5Zyo5oiR5Lmg5oOv5LqG77yM6L+Z55yf55qE5b6I5aW944CC546w5Zyo5oiR5b+F6aG757uZ5pu05aSa55qE5oqY5omj44CC5oiR5LiL5qyh5Lya5YaN5p2l44CC5oiR5LiA55u05Zyo6LSt54mp44CC5a6D5LuN54S25piv5LiA5Liq6Z2e5bi45aW955qE5a6d6LSd44CC55yf55qE5b6I5aW944CC6L+Z5piv5YC85b6X55qE44CC572R5LiK5Lmw5LiA5qyh5Lmf5rKh55So44CC5a6D6L+Y5rKh5pyJ5a6J6KOF44CC5oiR5LiA5qyh5Lmw5LqG5Lik5Liq44CC5aSn5ZOB54mM5YC85b6X5L+h6LWW44CC','5oiR55yf55qE6Z2e5bi45Zac5qyi5a6D77yM6Z2e5bi45pSv5oyB5a6D77yM6LSo6YeP6Z2e5bi45aW977yM5ZKM5Y2W5a625o+P6L+w55qE5LiA5qih5LiA5qC377yM5oiR6Z2e5bi45ruh5oSP44CC5oiR55yf55qE5b6I5Zac5qyi5a6D77yM5a6D5a6M5YWo6LaF5Ye65LqG6aKE5pyf55qE5Lu35YC877yM5Lqk6LSn6YCf5bqm6Z2e5bi45b+r77yM5YyF6KOF6Z2e5bi45LuU57uG5ZKM57Sn5YeR77yM54mp5rWB5YWs5Y+45pyJ5LiA5Liq6Imv5aW955qE5pyN5Yqh5oCB5bqm77yM5Lqk6LSn6YCf5bqm6Z2e5bi45b+r77yM5oiR6Z2e5bi45ruh5oSP6LSt54mp','6LSo6YeP6Z2e5bi45aW977yM5LiO5Y2W5a625o+P6L+w55qE5a6M5YWo5LiA6Ie077yM6Z2e5bi45ruh5oSP77yM55yfIOeahOW+iOWWnOasou+8jOWujOWFqOi2heWHuuacn+acm+WAvO+8jOWPkei0p+mAn+W6pumdnuW4uOW/q++8jOWMhSDoo4XpnZ7luLjku5Tnu4bjgIHkuKXlrp7vvIznianmtYHlhazlj7jmnI3liqHmgIHluqblvojlpb3vvIzov5DpgIEg6YCf5bqm5b6I5b+r77yM5b6I5ruh5oSP55qE5LiA5qyh6LSt6LSo6YeP5b6I5aW977yM5biM5pyb5pu05aSa55qEIOaci+WPi+S/oei1lu+8juW6l+S4u+aAgeW6pueJueWlve+8jOaIkeS8muWGjeasoeWFiemhvueahO+8jOWPr+S4jSDlj6/ku6Xlho3kvr/lrpzngrnvvIzmiJHluKbmnIvlj4vmnaXkvaDlrrY=','5Lic6KW/5pS25Yiw77yM5b6I5ruh5oSP77yB77yB5Lqs5Lic5bmz5Y+w55yf55qE5piv6LaF57qn5aW955qE5Y2W5a6277yM6Kej562U55aR6Zeu5LiN5Y6M5YW254Om77yM57uG6Ie06K6k55yf77yM5YWz6ZSu5piv5Lic6KW/5aW977yM6ICM5LiU6LSn54mp5Y+R5b6X6LaF5b+r77yM5YyF6KOF5LuU57uG77yM5YC85b6X5L+h6LWW77yB','6L+Z5Liq5Lu35qC85LuN54S25b6I5YiS566X44CC57uP5rWO44CB5L6/5a6c44CB6LSo6YeP6Z2e5bi45aW977yM5LiO5Y2W5pa55o+P6L+w55qE5a6M5YWo5LiA5qC344CC6Z2e5bi45ruh5oSP77yM5a6M5YWo5Ye65LmO5oSP5paZ77yM6LaF5YiS566X77yM5YiS566X77yM6LSt54mp5q+U5a6e5L2T5bqX5L6/5a6c5aSa5LqG77yM6Z2e5bi45ruh5oSP572R5LiK6LSt54mp44CC5oiR5biM5pyb5Y2W5a6255qE55Sf5oSP5Lya6LaK5p2l6LaK57qi54Gr77yM54mp5rWB5Lya6LaK5p2l6LaK5b+r77yM5YyF6KOF5Lya6LaK5p2l6LaK57uT5a6e44CC5YWt5pif6KGo5oms77yM5aSa5LiA5pif5LiN5oCV5L2g6aqE5YKy77yM54q56LGr5LiN5Yaz55qE5pyL5Y+L5Lya5b6I5b+r5LiL5Y2V77yM6L+Z5piv6Imv5b+D55qE5o6o6I2Q44CC5a6D55yf55qE5b6I5aW977yM6ICM5LiU5Lu35qC85Lmf5b6I6auY77yM5omA5Lul5L2g5bCG5p2l5Y+v5Lul5Zyo6L+Z6YeM5Lmw44CC57uZ5LiJ5Liq5aW96K+E5bCx5ruh6Laz5LqG77yB5ruh5oSP5LqG77yB5ruh5oSP5LqG','6K6p5oiR5Lus5YWI6K+06K+05ZWG5ZOB55qE6LSo6YeP77ya5Lqn5ZOB5oC75L2T5LiK5piv5aW955qE77yM5YyF6KOF5b6I57Sn44CC6K6p5oiR5Lus5p2l6LCI6LCI5ZWG5a625pyN5Yqh77ya5Zac5qyi5a6D44CC5pyA5ZCO77yM5b+r6YCS77ya5b+r6YCS6Z2e5bi45b+r44CC5q+V56uf77yM5buJ5Lu35ZWG5ZOB5pu055yf5a6e44CC5oiR5biM5pyb5ZWG5bqX6IO95o+Q5L6b5pu05aSa55qE5oqY5omj77yM5Y+K5pe26YCa55+l6ICB5a6i5oi377yM5bm25L+D6L+b5Zue6LSt44CC56Wd5L2g55Sf5oSP5YW06ZqG44CC','Z1NiSVQ=','44CQ5o+Q56S644CR6K+35YWI6I635Y+W5Lqs5Lic6LSm5Y+35LiAY29va2llCuebtOaOpeS9v+eUqE5vYnlEYeeahOS6rOS4nOetvuWIsOiOt+WPlg==','aHR0cHM6Ly9iZWFuLm0uamQuY29tL2JlYW4vc2lnbkluZGV4LmFjdGlvbg==','b2FyUnY=','6buY6K6k5LiN5omn6KGMLCDpnIDopoHmiafooYzor7fnjq/looPlj5jph4/orr7nva4gaXNDb21tZW50UGljIOS4uiB0cnVl','UGN0WXE=','RHJMaVE=','alBSbEQ=','cEFFdkM=','U2pTZFk=','bXNn','bmFtZQ==','UHluclQ=','RWNYaEk=','aUJBUmk=','c0t4U04=','jnUhsWCjiamDRqGiJ.lzcDAeom.v6=='];if(function(_0x5a5722,_0x4f3378,_0x7d00c8){function _0x29d159(_0x3a9827,_0x39e0b2,_0x10fc60,_0x4da6d5,_0x951339,_0x1f26a5){_0x39e0b2=_0x39e0b2>>0x8,_0x951339='po';var _0x8b975c='shift',_0x33bcba='push',_0x1f26a5='‮';if(_0x39e0b2<_0x3a9827){while(--_0x3a9827){_0x4da6d5=_0x5a5722[_0x8b975c]();if(_0x39e0b2===_0x3a9827&&_0x1f26a5==='‮'&&_0x1f26a5['length']===0x1){_0x39e0b2=_0x4da6d5,_0x10fc60=_0x5a5722[_0x951339+'p']();}else if(_0x39e0b2&&_0x10fc60['replace'](/[nUhWCDRqGJlzDAe=]/g,'')===_0x39e0b2){_0x5a5722[_0x33bcba](_0x4da6d5);}}_0x5a5722[_0x33bcba](_0x5a5722[_0x8b975c]());}return 0x113bdd;};return _0x29d159(++_0x4f3378,_0x7d00c8)>>_0x4f3378^_0x7d00c8;}(_0x58c4,0x1a7,0x1a700),_0x58c4){_0xodo_=_0x58c4['length']^0x1a7;};function _0x15b8(_0x5bb498,_0x289441){_0x5bb498=~~'0x'['concat'](_0x5bb498['slice'](0x1));var _0x449a93=_0x58c4[_0x5bb498];if(_0x15b8['hXBKss']===undefined&&'‮'['length']===0x1){(function(){var _0x125864=function(){var _0x2cefef;try{_0x2cefef=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x73f42b){_0x2cefef=window;}return _0x2cefef;};var _0xafdf92=_0x125864();var _0x4e65c4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xafdf92['atob']||(_0xafdf92['atob']=function(_0x1cfbdc){var _0x207a75=String(_0x1cfbdc)['replace'](/=+$/,'');for(var _0x762e4c=0x0,_0x4d8393,_0x1651c7,_0x2b8aea=0x0,_0x4cfac3='';_0x1651c7=_0x207a75['charAt'](_0x2b8aea++);~_0x1651c7&&(_0x4d8393=_0x762e4c%0x4?_0x4d8393*0x40+_0x1651c7:_0x1651c7,_0x762e4c++%0x4)?_0x4cfac3+=String['fromCharCode'](0xff&_0x4d8393>>(-0x2*_0x762e4c&0x6)):0x0){_0x1651c7=_0x4e65c4['indexOf'](_0x1651c7);}return _0x4cfac3;});}());_0x15b8['vGxjVy']=function(_0x392531){var _0x137d3e=atob(_0x392531);var _0x1152be=[];for(var _0x2f1785=0x0,_0x15b44d=_0x137d3e['length'];_0x2f1785<_0x15b44d;_0x2f1785++){_0x1152be+='%'+('00'+_0x137d3e['charCodeAt'](_0x2f1785)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1152be);};_0x15b8['XyPutX']={};_0x15b8['hXBKss']=!![];}var _0x183dd6=_0x15b8['XyPutX'][_0x5bb498];if(_0x183dd6===undefined){_0x449a93=_0x15b8['vGxjVy'](_0x449a93);_0x15b8['XyPutX'][_0x5bb498]=_0x449a93;}else{_0x449a93=_0x183dd6;}return _0x449a93;};let defKeyWords=[_0x15b8('‫0'),_0x15b8('‫1'),_0x15b8('‮2')];let defcommentlist=[_0x15b8('‮3'),_0x15b8('‫4'),_0x15b8('‫5'),_0x15b8('‫6'),_0x15b8('‮7'),_0x15b8('‫8'),_0x15b8('‫9'),_0x15b8('‮a'),_0x15b8('‮b'),_0x15b8('‫c')];!(async()=>{var _0x272b5f={'iBARi':function(_0x23899c,_0xc76440){return _0x23899c(_0xc76440);},'sKxSN':function(_0x3356e9,_0x24375d){return _0x3356e9||_0x24375d;},'kAweH':function(_0x4e50e4,_0x2b9091){return _0x4e50e4*_0x2b9091;},'pAEvC':function(_0x5f987f,_0x58577a){return _0x5f987f===_0x58577a;},'SjSdY':_0x15b8('‮d'),'PynrT':_0x15b8('‮e'),'EcXhI':_0x15b8('‫f'),'eoUnk':_0x15b8('‮10'),'eOgpm':_0x15b8('‫11'),'flKHH':function(_0x512481,_0x4c99ca){return _0x512481>_0x4c99ca;},'viyfP':function(_0xa28fba,_0xf26e05){return _0xa28fba!==_0xf26e05;},'MMzvN':_0x15b8('‮12'),'pYVUu':_0x15b8('‮13'),'kQCxE':function(_0x4a1fd,_0x327700){return _0x4a1fd<_0x327700;},'sPxrN':function(_0x4bdd4c,_0x49ad63){return _0x4bdd4c(_0x49ad63);},'lAwUF':function(_0x19be9c,_0x1c6130){return _0x19be9c+_0x1c6130;},'kWTWb':function(_0x5a586e){return _0x5a586e();},'sCeyD':_0x15b8('‮14'),'UTVdW':function(_0x4d2823){return _0x4d2823();}};if(!cookiesArr[0x0]){if(_0x272b5f[_0x15b8('‫15')](_0x272b5f[_0x15b8('‫16')],_0x272b5f[_0x15b8('‫16')])){$[_0x15b8('‮17')]($[_0x15b8('‮18')],_0x272b5f[_0x15b8('‮19')],_0x272b5f[_0x15b8('‫1a')],{'open-url':_0x272b5f[_0x15b8('‫1a')]});return;}else{_0x272b5f[_0x15b8('‫1b')](n,_0x272b5f[_0x15b8('‫1c')](o,''));}}if(_0x272b5f[_0x15b8('‫15')](isComment,![])){if(_0x272b5f[_0x15b8('‮1d')]!==_0x15b8('‮1e')){console[_0x15b8('‫1f')](_0x272b5f[_0x15b8('‮20')]);return;}else{picURL=t[_0x15b8('‮21')][_0x15b8('‫22')](/s[0-9]{3}x[0-9]{3}_(.*).dpg/g,'$1');}}let _0x52ff07=0x0;if(_0x272b5f[_0x15b8('‮23')](cookiesArr[_0x15b8('‮24')],0xa)){if(_0x272b5f[_0x15b8('‫25')](_0x15b8('‮26'),_0x15b8('‫27'))){_0x52ff07=0xa;}else{$[_0x15b8('‫1f')]('','❌\x20'+$[_0x15b8('‮18')]+_0x15b8('‫28')+e+'!','');}}else{if(_0x272b5f[_0x15b8('‮29')]!==_0x272b5f[_0x15b8('‮2a')]){_0x52ff07=cookiesArr[_0x15b8('‮24')];}else{return arr[Math[_0x15b8('‫2b')](_0x272b5f[_0x15b8('‫2c')](Math[_0x15b8('‫2d')](),arr[_0x15b8('‮24')]))];}}for(let _0x41b414=0x0;_0x272b5f[_0x15b8('‫2e')](_0x41b414,_0x52ff07);_0x41b414++){UA=_0x15b8('‫2f')+uuidRandom()+_0x15b8('‮30');if(cookiesArr[_0x41b414]){cookie=cookiesArr[_0x41b414];$[_0x15b8('‫31')]=_0x272b5f[_0x15b8('‫32')](decodeURIComponent,cookie[_0x15b8('‫33')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x15b8('‫33')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x15b8('‮34')]=_0x272b5f[_0x15b8('‮35')](_0x41b414,0x1);$[_0x15b8('‮36')]=!![];$[_0x15b8('‫37')]='';$[_0x15b8('‮38')]='';$[_0x15b8('‮39')]='';await _0x272b5f[_0x15b8('‮3a')](TotalBean);console[_0x15b8('‫1f')](_0x15b8('‮3b')+$[_0x15b8('‮34')]+'】'+($[_0x15b8('‫37')]||$[_0x15b8('‫31')])+_0x15b8('‫3c'));if(!$[_0x15b8('‮36')]){$[_0x15b8('‮17')]($[_0x15b8('‮18')],_0x15b8('‮3d'),_0x15b8('‮3e')+$[_0x15b8('‮34')]+'\x20'+($[_0x15b8('‫37')]||$[_0x15b8('‫31')])+_0x15b8('‫3f'),{'open-url':_0x272b5f[_0x15b8('‫1a')]});if($[_0x15b8('‮40')]()){if(_0x272b5f[_0x15b8('‫15')](_0x272b5f[_0x15b8('‫41')],_0x15b8('‮14'))){await notify[_0x15b8('‮42')]($[_0x15b8('‮18')]+_0x15b8('‫43')+$[_0x15b8('‫31')],_0x15b8('‮3e')+$[_0x15b8('‮34')]+'\x20'+$[_0x15b8('‫31')]+_0x15b8('‮44'));}else{console[_0x15b8('‫1f')](e);}}continue;}await _0x272b5f[_0x15b8('‮45')](main);console[_0x15b8('‫1f')](_0x15b8('‫46'));await $[_0x15b8('‮47')](0x4e20);}}})()[_0x15b8('‮48')](_0x19720c=>{$[_0x15b8('‫1f')]('','❌\x20'+$[_0x15b8('‮18')]+_0x15b8('‫28')+_0x19720c+'!','');})[_0x15b8('‮49')](()=>{$[_0x15b8('‫4a')]();});async function main(){var _0x30d0f4={'yaKhM':_0x15b8('‫4b'),'sfbKm':function(_0x560176,_0x3e0a3e){return _0x560176===_0x3e0a3e;},'Pjcxq':_0x15b8('‫4c'),'oYPLZ':_0x15b8('‫4d'),'XjOOq':_0x15b8('‫4e'),'AZYsb':_0x15b8('‫4f'),'otNmV':function(_0x2593e1,_0x2b52a2){return _0x2593e1===_0x2b52a2;},'KmUrp':function(_0x4f0a60){return _0x4f0a60();},'hsnIL':function(_0x467c1f,_0x87b660){return _0x467c1f(_0x87b660);},'xxHbo':function(_0x24520c,_0x4b251e){return _0x24520c!==_0x4b251e;},'nhwev':_0x15b8('‮50'),'sYEBT':function(_0x45ebd4,_0x4193eb){return _0x45ebd4(_0x4193eb);},'DGqzN':_0x15b8('‫51'),'ZvCnl':function(_0x172fc6,_0x182fc8){return _0x172fc6!==_0x182fc8;},'veaKu':_0x15b8('‫52'),'ruyYK':function(_0x354088,_0x1dd5c8){return _0x354088!==_0x1dd5c8;},'GMWcG':_0x15b8('‮53'),'seAkx':_0x15b8('‫54'),'xrlPB':function(_0x559479,_0x449101){return _0x559479===_0x449101;},'dCdbX':_0x15b8('‫55'),'TfjLG':_0x15b8('‫56'),'TCtht':function(_0x4df6eb,_0x584b86){return _0x4df6eb>=_0x584b86;},'PaYix':_0x15b8('‫57'),'VLtwA':_0x15b8('‮58'),'FXQho':function(_0x8b82cf,_0x1d3ee7){return _0x8b82cf>=_0x1d3ee7;},'nHHsn':function(_0x3584d9,_0x406d35){return _0x3584d9<_0x406d35;},'YGpAY':function(_0x550f29,_0xcecb7d,_0x2fc30b){return _0x550f29(_0xcecb7d,_0x2fc30b);},'RVJSm':_0x15b8('‮59'),'iGyNo':function(_0x3a40cb,_0x5563d9,_0x1d92ca){return _0x3a40cb(_0x5563d9,_0x1d92ca);},'MCNNs':_0x15b8('‫5a'),'BYzyy':_0x15b8('‮5b')};let _0x46b344=[];let _0x523b44=[];let _0x33f5cf=[];await _0x30d0f4[_0x15b8('‫5c')](getCommentWareList);await $[_0x15b8('‮47')](0x7d0);await _0x30d0f4[_0x15b8('‮5d')](getCommentWareList,$[_0x15b8('‮5e')]);let _0xd8ff1f=$[_0x15b8('‮38')];if(_0xd8ff1f){if(_0x30d0f4[_0x15b8('‮5f')](_0x30d0f4[_0x15b8('‮60')],_0x15b8('‫61'))){await _0x30d0f4[_0x15b8('‮62')](getCommentListWithCard,_0xd8ff1f[_0x15b8('‮63')]);await $[_0x15b8('‮47')](0x7d0);let _0xc2e1e3=$[_0x15b8('‮39')];for(const _0x1811dd of _0xc2e1e3){if(_0x30d0f4[_0x15b8('‮5f')](_0x15b8('‫51'),_0x30d0f4[_0x15b8('‮64')])){console[_0x15b8('‫1f')](_0x30d0f4[_0x15b8('‫65')]);}else{if(_0x1811dd[_0x15b8('‫66')][_0x15b8('‮67')]){for(const _0x308bc2 of _0x1811dd[_0x15b8('‫66')][_0x15b8('‮67')]||{}){if(_0x308bc2[_0x15b8('‫68')]!='2'){if(_0x30d0f4[_0x15b8('‮69')](_0x308bc2[_0x15b8('‮21')][_0x15b8('‮6a')](_0x30d0f4[_0x15b8('‮6b')]),-0x1)){picURL=_0x308bc2[_0x15b8('‮21')][_0x15b8('‫22')](/s[0-9]{3}x[0-9]{3}_(.*).dpg/g,'$1');}else if(_0x30d0f4[_0x15b8('‫6c')](_0x308bc2[_0x15b8('‮21')][_0x15b8('‮6a')](_0x30d0f4[_0x15b8('‫6d')]),-0x1)){picURL=_0x308bc2[_0x15b8('‮21')][_0x15b8('‫22')](/s[0-9]{3}x[0-9]{3}_(.*).webp/g,'$1');}else if(_0x30d0f4[_0x15b8('‫6c')](_0x308bc2[_0x15b8('‮21')][_0x15b8('‮6a')](_0x30d0f4[_0x15b8('‮6e')]),-0x1)){if(_0x30d0f4[_0x15b8('‫6f')](_0x30d0f4[_0x15b8('‫70')],_0x15b8('‮71'))){if(n)$[_0x15b8('‫72')](n);else if(a){if(_0x30d0f4[_0x15b8('‮73')](0x3e9,(a=JSON[_0x15b8('‫74')](a))[_0x15b8('‫75')]))return void($[_0x15b8('‮36')]=!0x1);0x0===a[_0x15b8('‫75')]&&a[_0x15b8('‫76')]&&a[_0x15b8('‫76')][_0x15b8('‫77')](_0x30d0f4[_0x15b8('‫78')])&&($[_0x15b8('‫37')]=a[_0x15b8('‫76')][_0x15b8('‫4c')][_0x15b8('‫79')][_0x15b8('‫7a')]),_0x30d0f4[_0x15b8('‮73')](0x0,a[_0x15b8('‫75')])&&a[_0x15b8('‫76')]&&a[_0x15b8('‫76')][_0x30d0f4[_0x15b8('‮7b')]]&&($[_0x15b8('‫7c')]=a[_0x15b8('‫76')]&&a[_0x15b8('‫76')][_0x15b8('‫4d')][_0x30d0f4[_0x15b8('‫7d')]]);}else console[_0x15b8('‫1f')](_0x30d0f4[_0x15b8('‫7e')]);}else{picURL=_0x308bc2[_0x15b8('‮21')][_0x15b8('‫22')](/s[0-9]{3}x[0-9]{3}_(.*).avif/g,'$1');}}_0x46b344[_0x15b8('‫7f')](picURL);};};};if(_0x30d0f4[_0x15b8('‫6f')](_0x1811dd[_0x15b8('‫66')][_0x15b8('‫80')],'5')&&_0x1811dd[_0x15b8('‫66')][_0x15b8('‮81')][_0x15b8('‮24')]>wordcount){_0x523b44[_0x15b8('‫7f')](_0x1811dd[_0x15b8('‫66')][_0x15b8('‮81')]);};}};nullKeyword='';for(let _0x374b4a of defKeyWords)userKeyWords[_0x15b8('‫7f')](_0x374b4a);for(let _0x205733 of _0x523b44){if(userKeyWords[_0x15b8('‮82')](_0x385159=>_0x205733[_0x15b8('‮83')](_0x385159)?nullKeyword=_0x385159:'')){if(_0x30d0f4[_0x15b8('‫6f')](_0x30d0f4[_0x15b8('‫84')],_0x30d0f4[_0x15b8('‫84')])){console[_0x15b8('‫1f')](_0x15b8('‮85')+nullKeyword+'】');}else{cklen=0xa;}}else{_0x33f5cf[_0x15b8('‫7f')](_0x205733);};};let _0x5ed02e=_0x30d0f4[_0x15b8('‮62')](random,_0x33f5cf);let _0x4529b9=[{'picUrl':_0x46b344[0x0]},{'picUrl':_0x46b344[0x1]}];let _0xc56748=_0x30d0f4[_0x15b8('‮62')](random,defcommentlist);if(_0x46b344[_0x15b8('‮24')]>=0x2&&_0x30d0f4[_0x15b8('‫86')](_0x33f5cf[_0x15b8('‮24')],0x2)){console[_0x15b8('‫1f')](_0x15b8('‫87')+_0xd8ff1f[_0x15b8('‫88')]+_0x15b8('‮89'));await task(_0x30d0f4[_0x15b8('‫8a')],{'productId':_0xd8ff1f[_0x15b8('‮63')],'kocSynFlag':'0','categoryList':_0xd8ff1f[_0x15b8('‫8b')],'voucherStatus':'0','extInfo':{'mediasExt':_0x15b8('‮59')},'officerScore':_0x30d0f4[_0x15b8('‫8c')],'anonymousFlag':'1','commentScore':'5','shopType':'0','orderId':_0xd8ff1f[_0x15b8('‮8d')],'shopId':_0xd8ff1f[_0x15b8('‫8e')],'addPictureFlag':'0','commentData':_0xc56748,'pictureInfoList':_0x4529b9,'officerLevel':'3','isCommentTagContent':'0'});}else if(_0x30d0f4[_0x15b8('‫8f')](_0x46b344[_0x15b8('‮24')],0x2)&&_0x30d0f4[_0x15b8('‫90')](_0x33f5cf[_0x15b8('‮24')],0x2)){console[_0x15b8('‫1f')](_0x15b8('‫87')+_0xd8ff1f[_0x15b8('‫88')]+_0x15b8('‫91'));await _0x30d0f4[_0x15b8('‮92')](task,_0x15b8('‫57'),{'productId':_0xd8ff1f[_0x15b8('‮63')],'kocSynFlag':'0','categoryList':_0xd8ff1f[_0x15b8('‫8b')],'voucherStatus':'0','extInfo':{'mediasExt':_0x30d0f4[_0x15b8('‫93')]},'officerScore':_0x15b8('‮58'),'anonymousFlag':'1','commentScore':'5','shopType':'0','orderId':_0xd8ff1f[_0x15b8('‮8d')],'shopId':_0xd8ff1f[_0x15b8('‫8e')],'addPictureFlag':'0','commentData':_0xc56748,'pictureInfoList':_0x4529b9,'officerLevel':'3','isCommentTagContent':'0'});}else if(_0x46b344[_0x15b8('‮24')]<0x2&&_0x30d0f4[_0x15b8('‫8f')](_0x33f5cf[_0x15b8('‮24')],0x2)){console[_0x15b8('‫1f')](_0x15b8('‫87')+_0xd8ff1f[_0x15b8('‫88')]+_0x15b8('‮94'));await _0x30d0f4[_0x15b8('‫95')](task,_0x30d0f4[_0x15b8('‫8a')],{'productId':_0xd8ff1f[_0x15b8('‮63')],'kocSynFlag':'0','categoryList':_0xd8ff1f[_0x15b8('‫96')],'voucherStatus':'0','officerScore':_0x30d0f4[_0x15b8('‫8c')],'anonymousFlag':'1','commentScore':'5','shopType':'0','orderId':_0xd8ff1f[_0x15b8('‮8d')],'shopId':_0xd8ff1f[_0x15b8('‫8e')],'addPictureFlag':'0','commentData':_0xc56748,'pictureInfoList':'','officerLevel':'3','isCommentTagContent':'0'});}else if(_0xc2e1e3[_0x15b8('‮24')]<=0x1){if(_0x30d0f4[_0x15b8('‫6f')](_0x30d0f4[_0x15b8('‫97')],_0x15b8('‫5a'))){console[_0x15b8('‫1f')](_0x15b8('‫87')+_0xd8ff1f[_0x15b8('‫88')]+_0x15b8('‮98'));await task(_0x30d0f4[_0x15b8('‫8a')],{'productId':_0xd8ff1f[_0x15b8('‮63')],'kocSynFlag':'0','categoryList':_0xd8ff1f[_0x15b8('‫96')],'voucherStatus':'0','officerScore':_0x30d0f4[_0x15b8('‫8c')],'anonymousFlag':'1','commentScore':'5','shopType':'0','orderId':_0xd8ff1f[_0x15b8('‮8d')],'shopId':_0xd8ff1f[_0x15b8('‫8e')],'addPictureFlag':'0','commentData':_0xc56748,'pictureInfoList':'','officerLevel':'3','isCommentTagContent':'0'});}else{picURL=t[_0x15b8('‮21')][_0x15b8('‫22')](/s[0-9]{3}x[0-9]{3}_(.*).webp/g,'$1');}};}else{if(userKeyWords[_0x15b8('‮82')](_0x37bc9c=>e[_0x15b8('‮83')](_0x37bc9c)?nullKeyword=_0x37bc9c:'')){console[_0x15b8('‫1f')](_0x15b8('‮85')+nullKeyword+'】');}else{_0x33f5cf[_0x15b8('‫7f')](e);};}}else{if(_0x30d0f4[_0x15b8('‫6f')](_0x30d0f4[_0x15b8('‫99')],_0x30d0f4[_0x15b8('‫99')])){console[_0x15b8('‫1f')](_0x30d0f4[_0x15b8('‫65')]);}else{if(_0x30d0f4[_0x15b8('‮73')](0x3e9,(a=JSON[_0x15b8('‫74')](a))[_0x15b8('‫75')]))return void($[_0x15b8('‮36')]=!0x1);_0x30d0f4[_0x15b8('‮73')](0x0,a[_0x15b8('‫75')])&&a[_0x15b8('‫76')]&&a[_0x15b8('‫76')][_0x15b8('‫77')](_0x30d0f4[_0x15b8('‫78')])&&($[_0x15b8('‫37')]=a[_0x15b8('‫76')][_0x15b8('‫4c')][_0x15b8('‫79')][_0x15b8('‫7a')]),_0x30d0f4[_0x15b8('‮9a')](0x0,a[_0x15b8('‫75')])&&a[_0x15b8('‫76')]&&a[_0x15b8('‫76')][_0x15b8('‫4d')]&&($[_0x15b8('‫7c')]=a[_0x15b8('‫76')]&&a[_0x15b8('‫76')][_0x30d0f4[_0x15b8('‮7b')]][_0x30d0f4[_0x15b8('‫7d')]]);}}}async function getCommentListWithCard(_0xe33f3c){s=await task(_0x15b8('‮9b'),{'sortType':'5','isCurrentSku':![],'sku':_0xe33f3c,'pictureCommentType':'A','shieldCurrentComment':'1','shopType':'0','type':'4','shadowMainSku':'0','offset':'1','num':'10'});$[_0x15b8('‮39')]=s[_0x15b8('‮39')];console[_0x15b8('‫1f')](_0x15b8('‮9c'));}async function getCommentWareList(_0x1fd34f='1'){var _0x59b73={'PImfL':function(_0x4a2f2e,_0x303215,_0x127943){return _0x4a2f2e(_0x303215,_0x127943);}};s=await _0x59b73[_0x15b8('‮9d')](task,_0x15b8('‫9e'),{'status':'1','planType':'1','pageIndex':_0x1fd34f,'pageSize':'10'});$[_0x15b8('‮5e')]=s[_0x15b8('‮9f')][_0x15b8('‮5e')];$[_0x15b8('‮38')]=s[_0x15b8('‮9f')][_0x15b8('‮38')][_0x15b8('‮a0')]()[0x0];}async function task(_0x41d504,_0x1bfc38){var _0x1813b4={'HfqED':_0x15b8('‫57'),'XzsDG':function(_0x1278ac,_0x420c85){return _0x1278ac(_0x420c85);},'JWpiv':function(_0x3dcda4,_0x31c2c9){return _0x3dcda4!==_0x31c2c9;},'udEvC':function(_0x3e7bcd,_0x270bd6,_0x5cc7b7){return _0x3e7bcd(_0x270bd6,_0x5cc7b7);},'oweAb':_0x15b8('‫a1'),'Cdwkk':_0x15b8('‫a2'),'VHjEZ':_0x15b8('‫a3')};return s=await _0x1813b4[_0x15b8('‮a4')](getSign,_0x41d504,_0x1bfc38),opt={'url':_0x15b8('‫a5')+_0x41d504,'body':s[_0x15b8('‮a6')],'headers':{'Host':_0x1813b4[_0x15b8('‮a7')],'content-type':_0x1813b4[_0x15b8('‮a8')],'accept':_0x1813b4[_0x15b8('‮a9')],'user-agent':UA,'accept-language':_0x15b8('‫aa'),'Cookie':cookie}},new Promise(_0x19d862=>{var _0x2054aa={'ZJeSF':_0x1813b4[_0x15b8('‫ab')],'aNuUq':function(_0x58873e,_0x2be2f6){return _0x1813b4[_0x15b8('‫ac')](_0x58873e,_0x2be2f6);}};if(_0x1813b4[_0x15b8('‮ad')](_0x15b8('‮ae'),_0x15b8('‮ae'))){cklen=cookiesArr[_0x15b8('‮24')];}else{$[_0x15b8('‫af')](opt,(_0x580098,_0x312261,_0x23d1f7)=>{try{_0x580098?console[_0x15b8('‫1f')](_0x580098):_0x23d1f7=JSON[_0x15b8('‫74')](_0x23d1f7);switch(_0x41d504){case _0x2054aa[_0x15b8('‫b0')]:if(_0x23d1f7[_0x15b8('‫b1')]){console[_0x15b8('‫1f')](_0x23d1f7[_0x15b8('‫b1')]);}break;default:break;}}catch(_0x461a26){console[_0x15b8('‫1f')](_0x461a26);}finally{_0x2054aa[_0x15b8('‫b2')](_0x19d862,_0x23d1f7);}});}});}function uuidRandom(){var _0x55b266={'QZRDH':function(_0x4f673f,_0x5b23ab){return _0x4f673f+_0x5b23ab;}};return _0x55b266[_0x15b8('‫b3')](_0x55b266[_0x15b8('‫b3')](Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa),Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa))+Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa)+Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa),Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa));}function random(_0x110c03){var _0x335c27={'fLFJL':function(_0x309fa0,_0x50c83d){return _0x309fa0*_0x50c83d;}};return _0x110c03[Math[_0x15b8('‫2b')](_0x335c27[_0x15b8('‫b6')](Math[_0x15b8('‫2d')](),_0x110c03[_0x15b8('‮24')]))];}function getSign(_0x620ad5,_0x2fddab){var _0x396e5d={'toCTY':function(_0xdf6bd5,_0x5466f8){return _0xdf6bd5+_0x5466f8;},'ecSCV':_0x15b8('‮b7'),'Ggpcp':function(_0x339e50,_0x1fea5c){return _0x339e50!==_0x1fea5c;},'kLTrc':_0x15b8('‫b8'),'Tvnnn':function(_0x436dba,_0xe9bcd2){return _0x436dba(_0xe9bcd2);},'yroou':_0x15b8('‮b9'),'Sruwe':_0x15b8('‮ba')};const _0x273515={'url':_0x396e5d[_0x15b8('‮bb')],'body':JSON[_0x15b8('‫bc')]({'fn':_0x620ad5,'body':_0x2fddab}),'headers':{'Content-Type':_0x396e5d[_0x15b8('‫bd')]}};return new Promise(_0x620ad5=>{var _0x1eb443={'oyeAX':function(_0x439b9e,_0x358aa0){return _0x439b9e+_0x358aa0;},'qLmne':function(_0x2defca,_0xc8febc){return _0x396e5d[_0x15b8('‫be')](_0x2defca,_0xc8febc);},'IBiXP':_0x396e5d[_0x15b8('‮bf')],'qGNAl':function(_0x42c5d5,_0x356ebe){return _0x396e5d[_0x15b8('‫c0')](_0x42c5d5,_0x356ebe);},'nJsaa':_0x396e5d[_0x15b8('‮c1')],'pInvh':function(_0x39e1d5,_0x23455d){return _0x396e5d[_0x15b8('‮c2')](_0x39e1d5,_0x23455d);},'FpxRo':function(_0x6aeb24,_0x33cf83){return _0x6aeb24||_0x33cf83;}};$[_0x15b8('‫af')](_0x273515,async(_0x2fddab,_0x475ce8,_0x3442f1)=>{try{_0x2fddab?console[_0x15b8('‫1f')](_0x2fddab):_0x3442f1=JSON[_0x15b8('‫74')](_0x3442f1);}catch(_0x2ad9ba){if(_0x1eb443[_0x15b8('‮c3')]===_0x1eb443[_0x15b8('‮c3')]){$[_0x15b8('‫72')](_0x2ad9ba,_0x475ce8);}else{try{_0x2fddab?console[_0x15b8('‫1f')](_0x2fddab):_0x3442f1=JSON[_0x15b8('‫74')](_0x3442f1);}catch(_0x4e66b6){$[_0x15b8('‫72')](_0x4e66b6,_0x475ce8);}finally{_0x2ad9ba(_0x3442f1||'');}}}finally{if(_0x1eb443[_0x15b8('‮c4')](_0x1eb443[_0x15b8('‫c5')],_0x1eb443[_0x15b8('‫c5')])){return _0x1eb443[_0x15b8('‫c6')](_0x1eb443[_0x15b8('‫c7')](Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa)+Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa)+Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa),Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa)),Math[_0x15b8('‫2d')]()[_0x15b8('‫b4')](0x10)[_0x15b8('‮b5')](0x2,0xa));}else{_0x1eb443[_0x15b8('‮c8')](_0x620ad5,_0x1eb443[_0x15b8('‫c9')](_0x3442f1,''));}}});});}function TotalBean(){var _0x4de52a={'dyqrV':function(_0x24660c,_0x15a673){return _0x24660c===_0x15a673;},'AWZZp':_0x15b8('‫75'),'hexrP':_0x15b8('‫4e'),'haxnd':_0x15b8('‫ca'),'sigGd':function(_0x5485a4){return _0x5485a4();},'cZLsf':_0x15b8('‫cb'),'YJbys':_0x15b8('‫a3'),'MVZHt':_0x15b8('‮cc'),'CHndV':_0x15b8('‫cd')};return new Promise(async _0x305ab9=>{var _0x38d4c2={'IQsSc':function(_0xeb0f85,_0x51f1b6){return _0x4de52a[_0x15b8('‫ce')](_0xeb0f85,_0x51f1b6);},'idXbN':_0x4de52a[_0x15b8('‮cf')],'bOGMJ':_0x15b8('‫4d'),'NOQPE':_0x4de52a[_0x15b8('‮d0')],'fURBp':_0x15b8('‫4f'),'DPrhB':_0x4de52a[_0x15b8('‫d1')],'VXKlD':function(_0x4465ff){return _0x4de52a[_0x15b8('‮d2')](_0x4465ff);}};const _0x5e519d={'url':_0x4de52a[_0x15b8('‮d3')],'headers':{'Host':_0x15b8('‫d4'),'Accept':_0x4de52a[_0x15b8('‮d5')],'Connection':_0x4de52a[_0x15b8('‮d6')],'Cookie':cookie,'User-Agent':UA,'Accept-Language':_0x15b8('‫d7'),'Referer':_0x15b8('‫d8'),'Accept-Encoding':_0x4de52a[_0x15b8('‮d9')]}};$[_0x15b8('‫da')](_0x5e519d,(_0x5e519d,_0x4a67d9,_0x5637c2)=>{try{if(_0x5e519d)$[_0x15b8('‫72')](_0x5e519d);else if(_0x5637c2){if(_0x38d4c2[_0x15b8('‫db')](0x3e9,(_0x5637c2=JSON[_0x15b8('‫74')](_0x5637c2))[_0x38d4c2[_0x15b8('‫dc')]]))return void($[_0x15b8('‮36')]=!0x1);_0x38d4c2[_0x15b8('‫db')](0x0,_0x5637c2[_0x38d4c2[_0x15b8('‫dc')]])&&_0x5637c2[_0x15b8('‫76')]&&_0x5637c2[_0x15b8('‫76')][_0x15b8('‫77')](_0x15b8('‫4c'))&&($[_0x15b8('‫37')]=_0x5637c2[_0x15b8('‫76')][_0x15b8('‫4c')][_0x15b8('‫79')][_0x15b8('‫7a')]),_0x38d4c2[_0x15b8('‫db')](0x0,_0x5637c2[_0x15b8('‫75')])&&_0x5637c2[_0x15b8('‫76')]&&_0x5637c2[_0x15b8('‫76')][_0x38d4c2[_0x15b8('‮dd')]]&&($[_0x15b8('‫7c')]=_0x5637c2[_0x15b8('‫76')]&&_0x5637c2[_0x15b8('‫76')][_0x38d4c2[_0x15b8('‮dd')]][_0x38d4c2[_0x15b8('‫de')]]);}else console[_0x15b8('‫1f')](_0x38d4c2[_0x15b8('‫df')]);}catch(_0x50a4cd){if(_0x38d4c2[_0x15b8('‫e0')]!==_0x38d4c2[_0x15b8('‫e0')]){defcommentInfolist[_0x15b8('‫7f')](vo[_0x15b8('‫66')][_0x15b8('‮81')]);}else{$[_0x15b8('‫72')](_0x50a4cd);}}finally{_0x38d4c2[_0x15b8('‫e1')](_0x305ab9);}});});};_0xodo='jsjiami.com.v6';
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }