/*
主要获取 isvObfuscator token值

获取签名，自定义使用方法如下

  - 请求 API 获取

    export JD_SIGN_API="" # 接口地址，例：http://127.0.0.1:3000/api/getSign，默认 'http://api.nolanstore.cc/sign'
    export JD_SIGN_API_BODY_FIELD="" # body参数字段名，默认 'body'
    export JD_SIGN_API_FUNCTIONID_FIELD="" # functionId参数字段名，默认 'fn'
    export JD_SIGN_API_METHOD="" # 请求方法，默认 'POST'，自定义仅支持 'GET'
    export JD_SIGN_API_CONTENT_TYPE="" # 请求头 'Content-Type'，默认 'application/json; charset=utf-8'，支持 'application/x-www-form-urlencoded' 格式
    JSON响应格式解析的字段目前仅支持 `body` `convertUrl` `convertUrlNew`

  - 本地自定义脚本生成

    如果存在本地签名生成脚本则会优先加载本地签名，具体规范如下：
    - 1. 需要将脚本命名为 Rebels_Sign.js 并存储在与 Rebels_Token 脚本同一目录下
    - 2. 调用函数名为 genSign 并且需要 export 导出
    - 3. 函数固定两个传参，分别是 functionId（函数id） 和 bodyParams（body参数对象）
    - 4. 函数需要返回含有 body、st、sign、sv 等关键字段的url参数形式的签名字符串

  不管通过何种途径获取签名，最终需要的签名形式为url参数格式且至少包含 `body` `st` `sv` `sign` 字段



new Env('Rebels_Token');
*/

var iｉl='jsjiami.com.v7';const iil1lI=iii1II;(function(iil1li,lillIl,iIiIl,iiilii,li1i1i,IlIli1,illIiI){return iil1li=iil1li>>0x3,IlIli1='hs',illIiI='hs',function(lI1lli,Ill1l,llI1Il,ii1iii,i11iil){const iIiII=iii1II;ii1iii='tfi',IlIli1=ii1iii+IlIli1,i11iil='up',illIiI+=i11iil,IlIli1=llI1Il(IlIli1),illIiI=llI1Il(illIiI),llI1Il=0x0;const Ill1i=lI1lli();while(!![]&&--iiilii+Ill1l){try{ii1iii=parseInt(iIiII(0x25c,')!Ez'))/0x1+parseInt(iIiII(0x209,'!$wv'))/0x2*(parseInt(iIiII(0x25b,'uR9n'))/0x3)+-parseInt(iIiII(0x2c9,'uR9n'))/0x4+parseInt(iIiII(0x212,')rK6'))/0x5+parseInt(iIiII(0x235,'Zahc'))/0x6+parseInt(iIiII(0x29b,'h7Pt'))/0x7+-parseInt(iIiII(0x205,'xb9q'))/0x8;}catch(ii1iil){ii1iii=llI1Il;}finally{i11iil=Ill1i[IlIli1]();if(iil1li<=iiilii)llI1Il?li1i1i?ii1iii=i11iil:li1i1i=i11iil:llI1Il=i11iil;else{if(llI1Il==li1i1i['replace'](/[UAVKrOptCJEGhXQYxqM=]/g,'')){if(ii1iii===Ill1l){Ill1i['un'+IlIli1](i11iil);break;}Ill1i[illIiI](i11iil);}}}}}(iIiIl,lillIl,function(lllI1l,i11iii,llI1Ii,lllI1i,li1i1l,II1i1,lI1lll){return i11iii='\x73\x70\x6c\x69\x74',lllI1l=arguments[0x0],lllI1l=lllI1l[i11iii](''),llI1Ii=`\x72\x65\x76\x65\x72\x73\x65`,lllI1l=lllI1l[llI1Ii]('\x76'),lllI1i=`\x6a\x6f\x69\x6e`,(0x171bac,lllI1l[lllI1i](''));});}(0x5f8,0x18e44,Iii11l,0xc1),Iii11l)&&(iｉl=0x203a);function Iii11l(){const li1i1I=(function(){return[...[iｉl,'UGjsjhiaxqmOiJYX.XcVroKOmKME.Atv7XpCrEQq==','rLqLWRz2','n1NdQI14tmocnmobW77dUW7dRXzAW4dcNSkPWQZdKNKo','W6/dVCoVfrW','reWqbmo1','WPC6WRq8WOhcSCkEW5BdHmkqgqKU','W5HPau0','ecf2W6eqWPZcO8ohW6hdQ8kgtW','W51lcNva','8yMQL8kSW5G1WO0lW6HxgCoxgoISIUAYQ+wLLoI0U8kI4PYVeoAvSowqQUw4PEAxN+ApQW','WOlcRmof','W51NWRW','WQjdtq','cvrI','WPPQshjI','W6fzWO5tWQS','mCoSWOO','W4ddQmknnSoSWOFcKYGaWOesWP0wW5ZdICkNW63dIIiupmke','8lUBKSoPWP59W65eWOxcRqyJmEwFSUwNHUErToAmG+wnQowrKEw5ToAvSoMaQEwiS+s4HUMuJoIUSCk/4P6ICq','4PYPg+ApLEs+J+EzO+s4VUEtTowFSUwEN+AwKUAxR++/P+I0NoI9O+wqI+EuU8o5WPP0xWtcJeVcQ2tcNUs4MUEtQoAXIEs7J+EsNG','ze98WRBcGYTj','kIJdO8k1','fSkfW6uk','WOfqahmBW5xdS8kcmfynWPiYxCo+W6/dLSklW7S7zY4','WQZcQtn2qZqMvua','W7/dK8ovnXOC','WRDtW6S','bSkPWP9wEW','WQyqWQuvWQ8','WRldHCo3uCoDmWXoW5zAxSkKWQNdGSoZWRlcGZRdVLGhWRygWRTgW4dcISoRWPtcJ0j5W7u','W6baifnz','v0aQd8oDnwnn','W7G9CbNcUXpdRSkgWQZdVN0','WOPBrCofE27dHSoxWP5zW4q','sdJdIa','D8kAhG','WPjCguyLW5pdPSksbq','WQ1blmodAG','imkeWQG','jYyRkNW','WOPAeW','WQ8OW4FdPCkXW70FWR0jeSo1WO3dR8obW74tWOnhmuhdR8oyW4FcTCk+yv/dTGGHW7VcL15Goa','WQzbW7VdJs3cONlcUSkiid5g','DeH6WRtcKJ15W7aHq0VdVG','W4ntW7uzW7K','WOO/fG','n8oMWOO+smo5WP/cUSojWQtcM8ofWRNdLCkSnSos','lrpcQfCyx8kpWP3dT8o+fM4','kCkfWRK','W7FcRfqoWRtdPvxdPa','W7WBhayLhtaoW5PJWOJcMq','WOWSWRiFWOlcTmko','WPnQgmoVv0dcSghdImkqWOiqyvjPnmkuFa','WQi7tGqmWP9AE8kPW6zmW5rGWRXzzUwqQUEwNN/cOJhdPmoChCkIkKSA5lU/55oX5RcL5lQi55cYz+AvUIjVW6xcS8kDW4NcVXRcM8obWR4ow0dcLxa','yCkacCkwAweSW5ldLmkq','WR8tW4j2W67cMGLTW7BcN8kiWQ9xWRbjBmkP','i0hdTYz3r8kgm8oF','Af4fWP9s','WRi5WRW','W4rPfa','FSoeW6G','W5ldSSo+naWjW4bWlb3dR0fetCoMW5RcRfLCWRfxzJvvva','wZlcSq','W4lcNYVdLxG','W63dGmowpCoDWOpdKsCcW4TnW58oWOJcK8o4WRNcKt82nCkBy2BdSw/cSG3dLSkyWQBdOW5ju0GLEeNdNdtcVWtdLdewBW','jh/dQXXJ','bCoRW5a','WOnBaG','WRvbia','jc7dVmkKW7pdLKmf','WPHtW6RdQGG','WOWcW7VdGmkxW48LWPO','W4tdQ8kmoSoOWOJdIG','xtmd','W5TYeKTfW5eWl8oGWRm'],...(function(){return[...['4P6JCtj0b8k6gaZML6pMJztLUPlOV4RMJlhLVAZLURaC4PYxW64','WRxcPs1GBJOU','WRXjtLLN','W4DEW7vXW6K','W7xdL8k9hCoEWR3dOr0OWQ85WQDMW67dTmkhW4hdOaKGgmkGtKVcLqNcMGVdICoNW5tcN24QisyJxG','W6NdSILBybqfwa','W5qfqbPBW7hdSCkxm30p','wg3dLGTb','cH3cShizfcFcImok','sI7cSMW','4P2XbbigW5mkzNKaw8oGhqPtWQ3cPoAQS+wDJ+wkR+I+HUwLRoI0HmkK4P+bW6K','wqBdTb9v','WQzRgeBdTX/dQCkxWR/cLhe','cmogW7xdQZy','itu6W7RdGq','kCklWQ1Hr28PzsSNF8oiWOpdO8oFWRm','wmk2WOBcP2lcVmkgy8oWW6JcH8oEW6O','W7hdOmkxhmoo','4P+Yj8ohWPJcQaaSoCoPW5xcMCo3W4utb8o+5QQf5zYD5yM26lYO5As06lEba+kDIvW','WQVcUmouW5NdNG','FLr8WRNcKZXFW68','AKxdHsTK','WOK5W7OiW7e','ySoSW5b+rW','8yg6GGRdMMDzW73dLSktvConW7JNR7hLKQtOJBpLJy3LPi3OT7K','afvZ','qX4oeZy','bmkfW6iDWRylWQCGgSk6W4ldTmk8WO1isu0','8jc7T8oNBGaul1RdNGWiW5pMJPlLJy/LKBdLUO7LVRVLU6NcGEkCNCoZ','FCooW6XKDrah','xreCxSot','tbC7kcvDWQ46W6SoW5PbW690WPyq','WReYWR7cGanbW7xdLGXuWOegW7dcR8o3W6NcSq','WR3cUc58FsK4','W4TPhvDuW4et','W5nIWOv/WQm','W7jqW6ZcNmk1','WPPeW7tdHcxcPY3dL8o7xNaSW6FdV0/cM8k25zkZ55EiWQyjzSo0qthdTfS/ibSSWRpKUllNKyvk5PsHEbZdVW5bWPChiSoXWPbZrtJcPxpdQLu8','W70GBdBcJq','p09Cy8kc','WPngeuC9W5pdPSkEaG','WOVcRCou','8kcRHCo1CsGjhSkcW5ldIJqJ566D5zo96iYn5y2e5AAc6lsj','W5tcGte','DbJcMea2nIrHW7OIi8k9AmoGW6DrW7pcJSoXW4JcNsKbCJNcSZbX','WP92cCohFG','W6JdHmoobsyCW7bkbt/dJq','pIGuax/cSfy','W7vFEfn5','WOZdRSomwCox','dXZcUM40pIxcG8oFW4y9','mmkZW4K3WO0BWPKDoCkYW6JdLmkxWRr0C3bkq8o6W4ZcLhhdQre','bYKLW4pdLef+gLddSmoH','l8obWRe','wmkWn8kTtKqKW6/dR8kZW6uoh8oqW5mEWOpdRYrlEtBdMqtcJeG','idCpbW','8l+5TbeLWRJdVgJdV2/dJLhcQEwEIEwKSEEtSoIVJoAWSUAxLoMcGUwiR+s4V+MwK+IUNW','WQPIoeia','W6VdHSonfcS','kcqxdNhcVv1VW6eS','eIm+W4NdJgfLif/dTmoJW7j+kCkRW4C','j1ddJGjk','4P2SvHO5feFcUe7ML7lMJi3LUkZOV4ZMJl7LVjFLU4na4P+ByG','WRrlnmovzxhcIG','W5PfW4xcNmkl','W7rtW75PW7O','WQvhzxD2','4P60WQhMJBJKVOpNMiRKUOBNKzxLNkRLN5NML7hMLzpVV6BOTixOVyBLKP3NL5NdQXJdHgKlWOKKWOXTWR/KUktNKQtMSRRKUlNNKja','8ysRUKb2bSkNp0pdUf9Vnmogc8oSvCo457+D5A6v5AwN6lwdWQVINi7dJa','lrmBWR1ZWOVcQCkrW7/cMColW6Do','WPejW4ddOCkO','WRLKW4ddKIe','WOXQnmoNsG','WQ1dtLu','W5CDEbVcSG','W7BcLv8rWQC'],...(function(){return['WPPyz3fw','qHC7or5pWQyl','8yYPK8omWR/cQ8obWRXKaSodW6FcLoIUL+AYGUMxNoITM8os4P+JW57OJO7LJjhLIkRMGORKUiVNK4NLN7hLNjNLPAlOTihVVypLTB7ORBdNVzBOTz7OVlZOR4ZMSRS','W7W2wa','tcmYcXG','FmoeW7G','W5ldRmovlcW','WR3cRIG','WQ05femv','W6tcQGZdNK0','W53cIINdM3JdLa','DCofW6K','W53cGca','W4fZW4nh','zMBcTmofW63dRa','8yMQL8kSW5G1WO0lW6HxgCoxgoISIUAYQ+MvVoIVSCkI4PYVeoImP+wmSEwiMEAcRUs5PUErTEwDSowETowLIEI1HE+8JEw3OEITVEE/JEI0S+I8REIVIoAZQG','qNfzWR3cVG','W7auf8kapXdcLmkeW4unWP7dPCkYWPtdUCkM5zct55E0CSkavwNcKd45W6ldSCke5lUq55cS5Rk85lMu55gqjoAwTxXYFSklkwWiWR/dV8k0fmk/W4ZcQCkjjW','wYtcS3SeaW9HW5Wea8kaq8onW5bQ','WQXDiSoQBxVcHKe','W5RcHaJdU24','CLrP','DmokW6T2','WPxdOmobDG','W4nhla','WQdcGCkVWPVcGG','WRHoW6NdNItcNbZdQ1uzW5Dm','WRXamq','WP/dPmoCuSollq','F8oOWOWLaCk3W5xcTCoCWQFcLa','qdpdJt93jdu','WOZdQmofFCocdd5ZW60','W7VcQXJdTv/dQHK+gsuCW4ddHCojqw/cG8oSW7yqW7NdSZZcVCk4W6mrg8o8kgGlx8oSy2NdIwThb3FdLetcH2WCWPVdPLddSKFdTmojuSoFoCofFhBdKq','WOnAgLKF','t3mZWQraW4VcJa','WQHmW6ddLIq','ktuqh3/cSeDEW6S1fCkFW6JdNgPL','WO3dSSonFmoAdd5/W6O','ueegemogowW','W6VdS2SIowuVv2f1kmkB','pfRdOG','W6fmtezgW4BcK8kJWQRdU8kAW44PiIiwWQhdJ3unW7yPxGNdNhC','qwn4WO/cMdPZjhJdMSo1W5y','W6jclhbIW7q4eSoBWPa0WQCcW4iLge3dSWdcGaZdGmobimkmegHZuSkIes5N','W7tdMCog','WPzgtq','W7xdK8osdJ44W7O','WP9hxa','FWxdOqvffq/cRmk9WQuXnMnrW5zjgqFcRGaUW5T6WP7dSsb3aCkw','l39AxCk0WOVcRCkwWPa5W6lcPCkWW7zHv8kqWQ5oAbhcOgJcI1xdRCkSWQXKzCom','WRS4WQ0','8kAkKcvZWOlcQCkMWQ3cTbFdICol5z+h5AAG55cI6k+K5RkB5Psl6ygw5yIB5lUw6zE66k+p','hmoyWPCeea','pLRdSG','kSkQW64NWRS','W7WwWQ4','W5TfxW','FCkGpCk0Da','W7PSogL8','W5jetG','tNKN','W4RdOCkrj8oSWOZdMW','W7zlbwf4','WRBcHWTrDG','fCoeWRmhnSkCWRRcIW','dCkfW64iWQq','pGpcKxW8','yMdcNSoq','WQRcH8krsMLQWQLhmq/dIebF','WOKdW78','WRqnWP06WRdcGCk0W7hdQmk6kcGdifxcVCkYgangW7O5WOuzhaNcICo2jSoMex4','Ce5n','WPpcTSovz8k7WOZdKWCcWRWV','Dmk6pSkRuG','aSk7WPnKCW'];}())];}())];}());Iii11l=function(){return li1i1I;};return Iii11l();};const path=require('path'),common=require(iil1lI(0x242,'A$is'));let scriptName=null,expireMinutes=0x1d;try{let tmpMinutes=parseInt(process[iil1lI(0x26f,'PNXG')][iil1lI(0x228,'m5rO')]||'29');expireMinutes=tmpMinutes;}catch{}const defaultCacheTTL=expireMinutes*0x3c*0x3e8,TokenCache=new common['DataCache'](process[iil1lI(0x249,'2DGP')][iil1lI(0x248,'xb9q')]||__dirname+iil1lI(0x2bf,'$D^A'),defaultCacheTTL,0x2bf20),lzkjPinFilter=(process[iil1lI(0x215,'B9IF')][iil1lI(0x282,'2DGP')]||'')['split']('@'),lzkjPinFilter_interactsaas_and_interaction_v1=(process[iil1lI(0x231,'5]Yx')][iil1lI(0x2c2,'jUxJ')]||process[iil1lI(0x245,'epBE')][iil1lI(0x207,'Rl)b')]||process[iil1lI(0x1f9,'gfS7')][iil1lI(0x234,'NO[K')]||'')[iil1lI(0x290,'xb9q')]('@'),lzkjPinFilter_interaction_v2=(process[iil1lI(0x2b7,'pQwH')]['JD_ISV_TOKEN_LZKJ_INTERACTION_V2_PIN_FILTER']||'')[iil1lI(0x2c5,'ptk[')]('@'),cjhyPinFilter=(process['env']['JD_ISV_TOKEN_CJHY_PIN_FILTER']||'')[iil1lI(0x24a,'jUxJ')]('@');let requestAxiosProxyConfig,requestDynamicProxyConfig;try{const proxyAddress=process[iil1lI(0x2a9,'uR9n')][iil1lI(0x289,'kj%l')]||process[iil1lI(0x22e,'0nb]')][iil1lI(0x23f,'@1!D')]||'';if(proxyAddress){const proxyConfig=common['_getProxyConfigWithAddress'](proxyAddress);proxyConfig?(requestAxiosProxyConfig=proxyConfig,console[iil1lI(0x218,'PNXG')](iil1lI(0x2b3,'2VUZ'))):console['log'](iil1lI(0x299,'m5rO'));}else{const proxyApi=process['env']['RS_ISV_TOKEN_PROXY_API']||process[iil1lI(0x24e,')!Ez')]['JD_ISV_TOKEN_PROXY_API']||'';if(proxyApi){requestDynamicProxyConfig={'api':null,'proxyConfig':null,'useLimit':null,'timeLimit':null,'fetchFailContinue':null,'extractTimestamp':null,'lastUseTimeStamp':null,'usedTimes':null},requestDynamicProxyConfig['api']=proxyApi;const useLimit=process[iil1lI(0x1f0,'2VUZ')]['RS_ISV_TOKEN_PROXY_USE_LIMIT']||process[iil1lI(0x238,'Stk$')][iil1lI(0x28c,'0nb]')]||'0';try{requestDynamicProxyConfig['useLimit']=parseInt(useLimit);}catch{requestDynamicProxyConfig['useLimit']=0x1;}const timeLimit=process[iil1lI(0x2bd,'@1!D')][iil1lI(0x1f1,'E^a2')]||iil1lI(0x26c,'cCE4');try{requestDynamicProxyConfig['timeLimit']=parseInt(timeLimit);}catch{requestDynamicProxyConfig[iil1lI(0x22f,')!Ez')]=0x2710;}requestDynamicProxyConfig[iil1lI(0x276,'epBE')]=(process[iil1lI(0x281,'jUxJ')][iil1lI(0x25a,'!$wv')]||iil1lI(0x204,']oQc'))==='true',console[iil1lI(0x217,'9k*p')](iil1lI(0x27b,'Zahc'));}}const globalProxy=process[iil1lI(0x22d,'E^a2')]['RS_ISV_TOKEN_GLOBAL_PROXY']===iil1lI(0x25f,'2DGP');if(globalProxy)try{require(iil1lI(0x21c,'!$wv')),console[iil1lI(0x254,'(^T1')](iil1lI(0x240,'QWBo'));}catch(iI1lil){console[iil1lI(0x246,'QWBo')]('❌\x20getToken\x20代理模块加载失败\x20➜\x20'+iI1lil['message']);}}catch{}const redisUrl=process['env']['JD_ISV_TOKEN_REDIS_CACHE_URL']||'',redisKey=process[iil1lI(0x216,'cCE4')]['JD_ISV_TOKEN_REDIS_CACHE_KEY']||'',redisSubmit=!(process[iil1lI(0x2bd,'@1!D')][iil1lI(0x1f2,'PNXG')]==='false'),hasRedisKey=/<pt_pin>/[iil1lI(0x221,'kj%l')](redisKey);function iii1II(_0x2c146d,_0x4951d6){const _0xefffb8=Iii11l();return iii1II=function(_0x3bbb61,_0x2212e8){_0x3bbb61=_0x3bbb61-0x1ef;let _0x36b05d=_0xefffb8[_0x3bbb61];if(iii1II['RYYYkA']===undefined){var _0x6c724a=function(_0x4fcfdc){const _0x537892='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4c3e05='',_0xafac7c='';for(let _0x15b6a7=0x0,_0xb383f0,_0x351b7d,_0x3378fa=0x0;_0x351b7d=_0x4fcfdc['charAt'](_0x3378fa++);~_0x351b7d&&(_0xb383f0=_0x15b6a7%0x4?_0xb383f0*0x40+_0x351b7d:_0x351b7d,_0x15b6a7++%0x4)?_0x4c3e05+=String['fromCharCode'](0xff&_0xb383f0>>(-0x2*_0x15b6a7&0x6)):0x0){_0x351b7d=_0x537892['indexOf'](_0x351b7d);}for(let _0x24cb6f=0x0,_0x4854f4=_0x4c3e05['length'];_0x24cb6f<_0x4854f4;_0x24cb6f++){_0xafac7c+='%'+('00'+_0x4c3e05['charCodeAt'](_0x24cb6f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xafac7c);};const _0x52aa4a=function(_0x1ceb1d,_0x1bc9d7){let _0x3f1f59=[],_0x563acd=0x0,_0xc5cbfd,_0x322d29='';_0x1ceb1d=_0x6c724a(_0x1ceb1d);let _0x4066bd;for(_0x4066bd=0x0;_0x4066bd<0x100;_0x4066bd++){_0x3f1f59[_0x4066bd]=_0x4066bd;}for(_0x4066bd=0x0;_0x4066bd<0x100;_0x4066bd++){_0x563acd=(_0x563acd+_0x3f1f59[_0x4066bd]+_0x1bc9d7['charCodeAt'](_0x4066bd%_0x1bc9d7['length']))%0x100,_0xc5cbfd=_0x3f1f59[_0x4066bd],_0x3f1f59[_0x4066bd]=_0x3f1f59[_0x563acd],_0x3f1f59[_0x563acd]=_0xc5cbfd;}_0x4066bd=0x0,_0x563acd=0x0;for(let _0x2d8043=0x0;_0x2d8043<_0x1ceb1d['length'];_0x2d8043++){_0x4066bd=(_0x4066bd+0x1)%0x100,_0x563acd=(_0x563acd+_0x3f1f59[_0x4066bd])%0x100,_0xc5cbfd=_0x3f1f59[_0x4066bd],_0x3f1f59[_0x4066bd]=_0x3f1f59[_0x563acd],_0x3f1f59[_0x563acd]=_0xc5cbfd,_0x322d29+=String['fromCharCode'](_0x1ceb1d['charCodeAt'](_0x2d8043)^_0x3f1f59[(_0x3f1f59[_0x4066bd]+_0x3f1f59[_0x563acd])%0x100]);}return _0x322d29;};iii1II['jyAhal']=_0x52aa4a,_0x2c146d=arguments,iii1II['RYYYkA']=!![];}const _0x1826ce=_0xefffb8[0x0],_0x4d9ea7=_0x3bbb61+_0x1826ce,_0x3b1414=_0x2c146d[_0x4d9ea7];return!_0x3b1414?(iii1II['rSTsKK']===undefined&&(iii1II['rSTsKK']=!![]),_0x36b05d=iii1II['jyAhal'](_0x36b05d,_0x2212e8),_0x2c146d[_0x4d9ea7]=_0x36b05d):_0x36b05d=_0x3b1414,_0x36b05d;},iii1II(_0x2c146d,_0x4951d6);}let redisClient=null;if(redisUrl){let redis=null;try{redis=require(iil1lI(0x258,'9k*p'));}catch(l1lIi1){console[iil1lI(0x254,'(^T1')](iil1lI(0x260,'0w[r')+l1lIi1[iil1lI(0x295,'@1!D')]);}if(redis)try{redisClient=redis[iil1lI(0x2bc,'ptk[')]({'url':redisUrl});}catch(iIli1l){console[iil1lI(0x2a7,'g5Cc')](iil1lI(0x294,'72va')+(iIli1l[iil1lI(0x1ef,'xb9q')]||iIli1l));}}async function getToken(i1i1II,liiIIl,iil1iI=!![]){const iiiliI=iil1lI,IlIllI={'FMKmo':iiiliI(0x28e,']N0J'),'teXMJ':'已设置跳过运行该账号（全局屏蔽）','yhegR':iiiliI(0x21e,'PNXG'),'jtELH':function(lI1li1,iI11II){return lI1li1(iI11II);},'kkOGb':function(iIII1I,ilil1i){return iIII1I===ilil1i;},'CCACi':'IDKsc','VduHC':iiiliI(0x274,'(^T1'),'JZtQs':function(IlIIi,IiI1l){return IlIIi(IiI1l);},'EDWns':iiiliI(0x2b0,']oQc'),'BhtRv':function(illlII,iIII11){return illlII!==iIII11;},'FXNaz':'bXLmq','weKMS':'.js','todAY':iiiliI(0x28d,'lC]M'),'GQMqa':function(IiI1i,llll1){return IiI1i!==llll1;},'wKNhC':iiiliI(0x263,'PzS3'),'xuJGH':'mEscv','CofUX':function(lil11l,i1i1Il){return lil11l>i1i1Il;},'dBeaW':function(I1lIl1,lil11i){return I1lIl1!==lil11i;},'GfnBR':'OKWHT','uMyLq':'MCiFz','KtQao':'xdZHh','UKFhX':iiiliI(0x28f,')!Ez'),'PmVUc':'Vbebe','TFbBv':iiiliI(0x1fb,'mTIW'),'tPJSC':'1|3|2|0|4|5','yMRbN':'https://api.m.jd.com/client.action?functionId=isvObfuscator','BSGsH':iiiliI(0x2af,'A$is'),'JHEHs':'application/x-www-form-urlencoded','oTUPi':'zh-Hans-CN;q=1','LDtJt':iiiliI(0x239,'$D^A'),'oyCCL':function(IlIIl,lI1liI){return IlIIl>=lI1liI;},'UEKbA':function(i1i1Ii,lllii){return i1i1Ii-lllii;},'tNKsE':iiiliI(0x200,'uR9n'),'YoPlU':iiiliI(0x214,'ptk['),'lUzWh':function(iI11Ii,iIII1l){return iI11Ii===iIII1l;},'fNVOO':function(lllil,iI11Il){return lllil&&iI11Il;},'TtMAB':function(iIII1i,iil1i1){return iIII1i/ iil1i1;},'rGOiS':'HFSjh','kFmSP':iiiliI(0x203,']x9k'),'ucDvZ':'YcNIJ','YPDkj':iiiliI(0x2c3,')!Ez')};let il1i1I='';try{if(IlIllI['kkOGb'](IlIllI[iiiliI(0x226,'5]Yx')],IlIllI[iiiliI(0x267,'!$wv')]))I1i11i=I1i11l;else{const IlIll1=IlIllI[iiiliI(0x2a8,'xb9q')](decodeURIComponent,common['getCookieValue'](i1i1II,IlIllI[iiiliI(0x2a0,'YweQ')]));if(IlIll1){if(!scriptName){if(IlIllI[iiiliI(0x2aa,'Stk$')](IlIllI[iiiliI(0x283,'@1!D')],iiiliI(0x29d,'ptk[')))return IllIII[iiiliI(0x206,'NO[K')](iiiliI(0x2b1,'ptk[')),'';else{const IIIIIl=require[iiiliI(0x2b9,'m5rO')][iiiliI(0x250,'&8L$')];scriptName=path[iiiliI(0x2a3,'72va')](IIIIIl,IlIllI[iiiliI(0x293,'qfxr')]);}}if(iil1iI){let I1lIil=[];if(liiIIl['includes'](IlIllI[iiiliI(0x287,'m5rO')])){if(scriptName[iiiliI(0x255,'QWBo')](iiiliI(0x22b,'YweQ')))I1lIil=lzkjPinFilter_interaction_v2;else scriptName[iiiliI(0x241,'0nb]')](iiiliI(0x22a,'0w[r'))?IlIllI[iiiliI(0x20b,'5]Yx')](IlIllI[iiiliI(0x20e,'xb9q')],IlIllI['xuJGH'])?I1lIil=lzkjPinFilter_interactsaas_and_interaction_v1:l1lIil=IiiIli:I1lIil=lzkjPinFilter;}else liiIIl[iiiliI(0x252,'NO[K')]('cjhy')&&(I1lIil=cjhyPinFilter);if(IlIllI[iiiliI(0x251,'ptk[')](I1lIil[iiiliI(0x2ac,'jUxJ')],0x0)&&(I1lIil['includes'](IlIll1)||I1lIil[iiiliI(0x26a,'pQwH')](encodeURIComponent(IlIll1))))return IlIllI[iiiliI(0x296,'GJ)D')](iiiliI(0x237,'EbV#'),'fvEkz')?(l1llII[iiiliI(0x225,'ptk[')](IlIllI[iiiliI(0x25d,'SDwD')]),IilIll['log'](lI11Ii),Iiill):(console['log'](IlIllI[iiiliI(0x29c,'NO[K')]),'');il1i1I=TokenCache['get'](IlIll1)||'';if(il1i1I)return il1i1I;if(redisClient){if(IlIllI[iiiliI(0x298,'9k*p')](IlIllI['GfnBR'],IlIllI[iiiliI(0x213,'QWBo')]))return llIliI[iiiliI(0x24d,'PzS3')](iiiliI(0x26e,'2VUZ')),'';else{try{IlIllI['KtQao']!==IlIllI[iiiliI(0x286,'gfS7')]?iiilll[iiiliI(0x1f8,'Zahc')](iiiliI(0x29a,'Stk$')+(lI11Il[iiiliI(0x257,'uR9n')]||lIII1i)):await redisClient[iiiliI(0x278,'QWBo')]();}catch{}try{const i11ili=encodeURIComponent(hasRedisKey?redisKey[iiiliI(0x285,'lC]M')](/<pt_pin>/g,IlIll1):''+redisKey+IlIll1);il1i1I=await redisClient['get'](i11ili);if(il1i1I){if(iiiliI(0x227,'Rl)b')==='XYgfL')return il1i1I;else try{i1ilii(iiiliI(0x20d,'qfxr')),iIIII1[iiiliI(0x2ba,'mTIW')]('\x0a===============启用\x20getToken\x20代理池代理(旧)==============\x0a');}catch(lllli){I1iIiI[iiiliI(0x2cf,'2VUZ')]('❌\x20getToken\x20代理模块加载失败\x20➜\x20'+lllli['message']);}}}catch(iiili1){console[iiiliI(0x2ca,'qfxr')]('🚫\x20getToken\x20Redis缓存异常\x20➜\x20'+(iiili1[iiiliI(0x2c4,')rK6')]||iiili1));}}}}}const IlIII=await common['getSign'](iiiliI(0x210,'Rl)b'),{'url':liiIIl,'id':''});if(!IlIII)return console[iiiliI(0x23b,'5]Yx')](iiiliI(0x280,']x9k')),'';let ilil1l=null,illlIi=![];if(requestAxiosProxyConfig||requestDynamicProxyConfig){if(requestAxiosProxyConfig)IlIllI[iiiliI(0x20c,')rK6')](iiiliI(0x27a,'GJ)D'),IlIllI[iiiliI(0x2b2,'pQwH')])?(lI1Il1=lilIi1,IiilII[iiiliI(0x233,')!Ez')]('\x0a===============启用\x20getToken\x20代理池代理(新)==============\x0a')):ilil1l=requestAxiosProxyConfig;else{if(requestDynamicProxyConfig){if(requestDynamicProxyConfig[iiiliI(0x22c,'2VUZ')]){if(iiiliI(0x259,'A$is')===IlIllI['PmVUc'])ilil1l=requestDynamicProxyConfig[iiiliI(0x284,'xb9q')],illlIi=!![];else return lIIiii;}else{const ill11l=await common[iiiliI(0x222,')!Ez')](requestDynamicProxyConfig[iiiliI(0x21b,'$D^A')]),I1lIiI=common[iiiliI(0x2cb,'gfS7')](ill11l);if(I1lIiI){if(IlIllI[iiiliI(0x2b6,'jUxJ')](iiiliI(0x29e,'@1!D'),IlIllI[iiiliI(0x219,'9k*p')])){const lllili=IlIllI[iiiliI(0x261,'E^a2')][iiiliI(0x290,'xb9q')]('|');let IliiiI=0x0;while(!![]){switch(lllili[IliiiI++]){case'0':ilil1l=I1lIiI;continue;case'1':requestDynamicProxyConfig[iiiliI(0x2b4,'2DGP')]=Date[iiiliI(0x2a5,'YweQ')]();continue;case'2':requestDynamicProxyConfig[iiiliI(0x28a,'lw%(')]=I1lIiI;continue;case'3':requestDynamicProxyConfig[iiiliI(0x2c7,'m5rO')]=0x0;continue;case'4':console[iiiliI(0x1f8,'Zahc')]('刷新Token代理IP：'+I1lIiI[iiiliI(0x220,'&8L$')]+':'+I1lIiI[iiiliI(0x211,'QWBo')]);continue;case'5':illlIi=!![];continue;}break;}}else l1lIll['log']('🚫\x20getToken\x20Redis缓存异常\x20➜\x20'+(I1l1II[iiiliI(0x1fe,'!$wv')]||IIli1I));}else{if(!requestDynamicProxyConfig[iiiliI(0x271,'kj%l')])return console[iiiliI(0x1f3,'epBE')](iiiliI(0x2a4,'R@t$')),'';}}}}}const I1lIii={'url':IlIllI['yMRbN'],'method':IlIllI['BSGsH'],'headers':{'Host':'api.m.jd.com','Content-Type':IlIllI[iiiliI(0x244,')rK6')],'User-Agent':common['genUA'](IlIll1)||iiiliI(0x24b,'!$wv'),'Accept-Language':IlIllI[iiiliI(0x1fa,'0nb]')],'Accept-Encoding':IlIllI[iiiliI(0x1f5,'$D^A')],'J-E-H':common[iiiliI(0x2be,'m5rO')](),'J-E-C':common[iiiliI(0x224,'xb9q')](IlIll1),'Cookie':i1i1II},'proxy':ilil1l,'data':IlIII,'debug':![],'timeout':0xea60},IiI1I=0x2;let illlIl=0x0,i11ill=null;while(illlIl<IiI1I){const liiIII=await common['request'](I1lIii);if(illlIi){requestDynamicProxyConfig[iiiliI(0x265,'5]Yx')]=Date[iiiliI(0x247,'g5Cc')](),requestDynamicProxyConfig['usedTimes']++;const li1i11=IlIllI['CofUX'](requestDynamicProxyConfig[iiiliI(0x23c,']N0J')],0x0)&&requestDynamicProxyConfig[iiiliI(0x27e,')!Ez')]>=requestDynamicProxyConfig[iiiliI(0x2b5,'@1!D')],iI11I1=requestDynamicProxyConfig[iiiliI(0x2c1,'m5rO')]>0x0&&IlIllI[iiiliI(0x27c,'YweQ')](IlIllI[iiiliI(0x2ab,'jUxJ')](Date['now'](),requestDynamicProxyConfig[iiiliI(0x2c6,'lC]M')]),requestDynamicProxyConfig[iiiliI(0x223,'uR9n')]);(li1i11||iI11I1)&&(requestDynamicProxyConfig[iiiliI(0x288,']x9k')]=null,requestDynamicProxyConfig[iiiliI(0x275,'72va')]=null,requestDynamicProxyConfig[iiiliI(0x292,'lw%(')]=null,requestDynamicProxyConfig[iiiliI(0x25e,']x9k')]=0x0);}if(!liiIII[iiiliI(0x21f,'pQwH')]){i11ill='❌\x20getToken\x20请求失败\x20➜\x20'+liiIII['error'],illlIl++;continue;}if(!liiIII['data']){if(IlIllI[iiiliI(0x232,'lC]M')](IlIllI['tNKsE'],'nGUBy')){i11ill=IlIllI['YoPlU'],illlIl++;continue;}else iliIIi[iiiliI(0x208,'h7Pt')](iiiliI(0x268,'GJ)D')+ill11I[iiiliI(0x273,'g5Cc')]);}try{if(IlIllI[iiiliI(0x2a6,'72va')](iiiliI(0x1f7,'kj%l'),'vOnsB'))ilI1li=IIliI;else{const IIIl1I=liiIII[iiiliI(0x2b8,'g5Cc')];if(IIIl1I[iiiliI(0x29f,'9k*p')]==='0'){if(iiiliI(0x24c,'qfxr')!==iiiliI(0x2a1,']N0J'))return IIlii[iiiliI(0x24f,'@1!D')](IlIllI[iiiliI(0x26b,'SDwD')]),'';else{il1i1I=IIIl1I[iiiliI(0x230,'@1!D')],TokenCache['put'](IlIll1,il1i1I,defaultCacheTTL);if(IlIllI[iiiliI(0x20a,'0nb]')](redisClient,redisSubmit)){try{await redisClient[iiiliI(0x253,'!$wv')]();}catch{}const IlIlli=encodeURIComponent(hasRedisKey?redisKey[iiiliI(0x23e,'Rl)b')](/<pt_pin>/g,IlIll1):''+redisKey+IlIll1),il1i1i=il1i1I,lil111=Math['floor'](IlIllI[iiiliI(0x2a2,'9k*p')](Date[iiiliI(0x1f6,'qfxr')]()+defaultCacheTTL,0x3e8));try{await redisClient['set'](IlIlli,il1i1i),await redisClient[iiiliI(0x201,'$D^A')](IlIlli,lil111);}catch(i11ilI){if(iiiliI(0x269,'B9IF')==='LzgTB')console[iiiliI(0x1fd,')rK6')]('🚫\x20getToken\x20Redis缓存失败\x20➜\x20'+(i11ilI[iiiliI(0x2c0,'E^a2')]||i11ilI));else return IilliI;}}}}else IlIllI['lUzWh'](IIIl1I['code'],'3')&&IIIl1I['errcode']===0x108?iiiliI(0x264,'lw%(')===iiiliI(0x202,'kj%l')?Iliili=Iliill[iiiliI(0x236,'pQwH')]({'url':IIII11}):console[iiiliI(0x2ae,'jUxJ')]('🚫\x20getToken\x20接口响应异常\x20➜\x20账号无效'):console[iiiliI(0x208,'h7Pt')]('🚫\x20getToken\x20接口响应异常\x20➜\x20'+JSON['stringify'](IIIl1I));}}catch(lllil1){console['log'](iiiliI(0x21d,'Zahc')+(lllil1['message']||lllil1));}break;}return IlIllI[iiiliI(0x2bb,'R@t$')](illlIl,IiI1I)&&(IlIllI[iiiliI(0x26d,'g5Cc')]===iiiliI(0x229,'QWBo')?console[iiiliI(0x28b,'#eGW')](i11ill):I1llii[iiiliI(0x2ce,'xb9q')](iiiliI(0x256,'Stk$')+(lilIll[iiiliI(0x2c8,'0w[r')]||l1i111))),il1i1I;}}catch(ilil1I){if(IlIllI['kFmSP']===IlIllI['kFmSP'])return console[iiiliI(0x246,'QWBo')](iiiliI(0x1f4,'PNXG')),console[iiiliI(0x27f,'B9IF')](ilil1I),il1i1I;else lI1Iii['log'](IlIllI[iiiliI(0x20f,'0w[r')]);}finally{if(IlIllI[iiiliI(0x279,'cCE4')](iiiliI(0x27d,'PNXG'),iiiliI(0x270,'72va')))l1l11I[iiiliI(0x1fc,'gfS7')](iiiliI(0x272,'2DGP')+lilIl[iiiliI(0x243,'qfxr')](IilIlI));else{if(redisClient){if(iiiliI(0x1ff,'mTIW')!==IlIllI['ucDvZ']){let ilil11=IlIllI['jtELH'](lilIl1,i1l1ii[iiiliI(0x2ad,'g5Cc')][iiiliI(0x2cd,'QWBo')]||'29');i1l1=ilil11;}else try{IlIllI[iiiliI(0x21a,'cCE4')]===iiiliI(0x297,'A$is')?await redisClient[iiiliI(0x291,'lC]M')]():IllII1[iiiliI(0x23c,']N0J')]=0x1;}catch{}}}}}module[iil1lI(0x277,'uR9n')]=getToken;var version_ = 'jsjiami.com.v7';