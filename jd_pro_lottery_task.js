/*
PRO抽奖机任务

jd_pro_lottery_task_id // 活动ID
jd_pro_lottery_task_opencard // 是否入会，默认不入会

走代理，不然403


cron:1 1 1 1 * jd_pro_lottery_task.js

*/

const $ = new Env('PRO抽奖机任务');
var iｉl='jsjiami.com.v7';const iiillI=iii1II;function iii1II(_0x28ef17,_0x27080f){const _0x54afac=Iii11l();return iii1II=function(_0x2840e4,_0x1b0b95){_0x2840e4=_0x2840e4-0x15e;let _0x286f35=_0x54afac[_0x2840e4];if(iii1II['phqgeJ']===undefined){var _0x404366=function(_0x43d0ee){const _0x304a84='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xb2880a='',_0x4fcd0f='';for(let _0x2e8224=0x0,_0x4af4ee,_0x2e41c5,_0x1ab450=0x0;_0x2e41c5=_0x43d0ee['charAt'](_0x1ab450++);~_0x2e41c5&&(_0x4af4ee=_0x2e8224%0x4?_0x4af4ee*0x40+_0x2e41c5:_0x2e41c5,_0x2e8224++%0x4)?_0xb2880a+=String['fromCharCode'](0xff&_0x4af4ee>>(-0x2*_0x2e8224&0x6)):0x0){_0x2e41c5=_0x304a84['indexOf'](_0x2e41c5);}for(let _0x11604d=0x0,_0x2c4a59=_0xb2880a['length'];_0x11604d<_0x2c4a59;_0x11604d++){_0x4fcd0f+='%'+('00'+_0xb2880a['charCodeAt'](_0x11604d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4fcd0f);};const _0x383b77=function(_0x576c96,_0x370ef0){let _0x34cb55=[],_0x390f46=0x0,_0x32bff9,_0x1edfc6='';_0x576c96=_0x404366(_0x576c96);let _0x5202b9;for(_0x5202b9=0x0;_0x5202b9<0x100;_0x5202b9++){_0x34cb55[_0x5202b9]=_0x5202b9;}for(_0x5202b9=0x0;_0x5202b9<0x100;_0x5202b9++){_0x390f46=(_0x390f46+_0x34cb55[_0x5202b9]+_0x370ef0['charCodeAt'](_0x5202b9%_0x370ef0['length']))%0x100,_0x32bff9=_0x34cb55[_0x5202b9],_0x34cb55[_0x5202b9]=_0x34cb55[_0x390f46],_0x34cb55[_0x390f46]=_0x32bff9;}_0x5202b9=0x0,_0x390f46=0x0;for(let _0x159bb9=0x0;_0x159bb9<_0x576c96['length'];_0x159bb9++){_0x5202b9=(_0x5202b9+0x1)%0x100,_0x390f46=(_0x390f46+_0x34cb55[_0x5202b9])%0x100,_0x32bff9=_0x34cb55[_0x5202b9],_0x34cb55[_0x5202b9]=_0x34cb55[_0x390f46],_0x34cb55[_0x390f46]=_0x32bff9,_0x1edfc6+=String['fromCharCode'](_0x576c96['charCodeAt'](_0x159bb9)^_0x34cb55[(_0x34cb55[_0x5202b9]+_0x34cb55[_0x390f46])%0x100]);}return _0x1edfc6;};iii1II['JgiCBH']=_0x383b77,_0x28ef17=arguments,iii1II['phqgeJ']=!![];}const _0x3298ea=_0x54afac[0x0],_0xbcf421=_0x2840e4+_0x3298ea,_0x48c4df=_0x28ef17[_0xbcf421];return!_0x48c4df?(iii1II['ZkIWrz']===undefined&&(iii1II['ZkIWrz']=!![]),_0x286f35=iii1II['JgiCBH'](_0x286f35,_0x1b0b95),_0x28ef17[_0xbcf421]=_0x286f35):_0x286f35=_0x48c4df,_0x286f35;},iii1II(_0x28ef17,_0x27080f);}(function(i11iii,llI1Ii,lllI1i,li1i1l,II1i1,lI1lll,iIiII){return i11iii=i11iii>>0x9,lI1lll='hs',iIiII='hs',function(iil1lI,iiiliI,li1i1I,illIii,ii1il1){const liil11=iii1II;illIii='tfi',lI1lll=illIii+lI1lll,ii1il1='up',iIiII+=ii1il1,lI1lll=li1i1I(lI1lll),iIiII=li1i1I(iIiII),li1i1I=0x0;const lI1llI=iil1lI();while(!![]&&--li1i1l+iiiliI){try{illIii=-parseInt(liil11(0x1cd,'E]4!'))/0x1*(parseInt(liil11(0x1ed,'kUx*'))/0x2)+-parseInt(liil11(0x233,'4zF['))/0x3*(parseInt(liil11(0x211,'QeUZ'))/0x4)+-parseInt(liil11(0x23d,'o7Be'))/0x5+-parseInt(liil11(0x1e7,'8]VO'))/0x6+-parseInt(liil11(0x18f,'8]VO'))/0x7*(-parseInt(liil11(0x195,'c^tl'))/0x8)+parseInt(liil11(0x234,'8LJa'))/0x9+parseInt(liil11(0x240,'V6tR'))/0xa;}catch(illIil){illIii=li1i1I;}finally{ii1il1=lI1llI[lI1lll]();if(i11iii<=li1i1l)li1i1I?II1i1?illIii=ii1il1:II1i1=ii1il1:li1i1I=ii1il1;else{if(li1i1I==II1i1['replace'](/[bUrGYCWSRJwBQXIN=]/g,'')){if(illIii===iiiliI){lI1llI['un'+lI1lll](ii1il1);break;}lI1llI[iIiII](ii1il1);}}}}}(lllI1i,llI1Ii,function(Ill1I,i11iiI,lIli11,lllI1I,lillI1,IlIlii,i1l1i1){return i11iiI='\x73\x70\x6c\x69\x74',Ill1I=arguments[0x0],Ill1I=Ill1I[i11iiI](''),lIli11=`\x72\x65\x76\x65\x72\x73\x65`,Ill1I=Ill1I[lIli11]('\x76'),lllI1I=`\x6a\x6f\x69\x6e`,(0x15bfb7,Ill1I[lllI1I](''));});}(0x18200,0xde7de,Iii11l,0xc3),Iii11l)&&(iｉl=0xc3);const jdCookie=require('./jdCookie'),notify=require(iiillI(0x23b,'rCZ7')),common=require(iiillI(0x29c,'nUN7')),{H5st}=require(iiillI(0x225,'!$Jo'));console[iiillI(0x184,'#E*7')](''),console[iiillI(0x1ec,'yd3q')]('=========='+$[iiillI(0x259,'E]4!')]+iiillI(0x26c,'(&^m')),console[iiillI(0x1e2,'kUx*')](iiillI(0x1c1,'1fIG')),console['log'](iiillI(0x178,'Zk0l')),console[iiillI(0x174,'Moax')]('=========='+$[iiillI(0x22e,'(rY7')]+'提示结束=========='),console[iiillI(0x20c,'ZF3P')]('');const configCode=process[iiillI(0x220,'Moax')][iiillI(0x1f1,'(rY7')]||'',joinMember=process[iiillI(0x26b,'tUeO')][iiillI(0x1de,'yNs3')]==='true',isNotify=![];let cookie='';const cookiesArr=Object['keys'](jdCookie)[iiillI(0x1b2,'Zk0l')](iI1liI=>jdCookie[iI1liI])['filter'](l1lIiI=>l1lIiI);!cookiesArr[0x0]&&($[iiillI(0x205,'Jehd')]($[iiillI(0x265,'$uCZ')],iiillI(0x1af,')WMT')),process[iiillI(0x271,'VDm0')](0x1));!(async()=>{const l1l111=iiillI,llliiI={'miMmR':function(IilIiI,i1i1I1){return IilIiI!==i1i1I1;},'XcyvC':l1l111(0x291,'yd3q'),'pWSyv':function(IlII1,IiI11){return IlII1<IiI11;},'HeJZE':function(lli,liIlI){return lli===liIlI;},'COaLo':l1l111(0x18e,'AiiS'),'zjVbY':l1l111(0x1c0,')JSy'),'mzQiG':l1l111(0x182,')WMT'),'Upqxe':function(lll){return lll();}};if(!configCode){if(llliiI[l1l111(0x190,')WMT')](l1l111(0x1a4,'N!*1'),'Lchjv')){console['log'](llliiI['XcyvC']);return;}else ll1li[l1l111(0x19b,'c^tl')]=!![],Illl1I['message']&&ll1ll[l1l111(0x29b,'#E*7')]['fix'](Illl11);}notify[l1l111(0x25a,'m5ja')]({'title':$['name']});for(let iIli1i=0x0;llliiI[l1l111(0x1bd,'$uCZ')](iIli1i,cookiesArr[l1l111(0x286,'UDDG')]);iIli1i++){if(llliiI['HeJZE'](l1l111(0x268,']Be!'),llliiI['COaLo'])){$[l1l111(0x1d7,'TlP(')]=iIli1i+0x1,cookie=cookiesArr[iIli1i],common[l1l111(0x26d,'4zF[')](cookie),$[l1l111(0x245,'wNkw')]=decodeURIComponent(common[l1l111(0x1bc,']Be!')](cookie,l1l111(0x1fc,'4(5Y'))),$[l1l111(0x165,'4zF[')]=notify['create']($[l1l111(0x194,'ZF3P')],$[l1l111(0x254,'!$Jo')]),$['nickName']='',$['fp']=randomString(0x20,llliiI['zjVbY']),$[l1l111(0x1c2,'Zk0l')]=randomString(0x5a,llliiI[l1l111(0x272,'UHFP')])['toUpperCase'](),console['log'](l1l111(0x288,')WMT')+$[l1l111(0x1a7,'xITP')]+'】'+($[l1l111(0x1a8,'6&H9')]||$['UserName'])+l1l111(0x285,'0!CA')),$['UA']=common[l1l111(0x28d,'Jehd')]($['UserName']),await llliiI['Upqxe'](Main),common[l1l111(0x1ff,'ZF3P')]();if($['runEnd'])break;await $[l1l111(0x207,'^RYH')](0x7d0);}else{iIIII1[l1l111(0x20c,'ZF3P')](l1l111(0x1e5,'75hf')+i1l1ll+'\x20开始，晚点再来吧~'),I1iIiI['runEnd']=!![];return;}}isNotify&&notify[l1l111(0x204,'V6tR')]()&&await notify['push']();})()[iiillI(0x199,'UHFP')](IilIii=>$[iiillI(0x197,'$sP#')](IilIii))[iiillI(0x1d4,'AiiS')](()=>$['done']());async function Main(){const l1iIII=iiillI,iI1lil={'uiFgl':l1iIII(0x261,'VDm0'),'pltcS':function(iIli1l,i1i1II){return iIli1l>i1i1II;},'zTkjf':function(liiIIl,iil1iI){return liiIIl===iil1iI;},'LPbWq':function(IlIllI){return IlIllI();}},l1lIi1=await common[l1iIII(0x169,'UDDG')](cookie);if(!l1lIi1&&typeof l1lIi1===l1iIII(0x26f,'TkAj')){console[l1iIII(0x206,'N!*1')](l1iIII(0x222,'1fIG'));return;}try{$[l1iIII(0x177,'(&^m')]=![],$[l1iIII(0x22b,'UDDG')]=![],$[l1iIII(0x1b3,'V6tR')]='',await sendRequest('moduleGetActivity');if($['runEnd'])return;if(iI1lil['zTkjf']($[l1iIII(0x2a2,'QeUZ')],0x1)){const il1i1I=$[l1iIII(0x1cc,'AiiS')](iI1lil['uiFgl'],$[l1iIII(0x270,'6&H9')]),lI1li1=$[l1iIII(0x24e,'N!*1')](iI1lil['uiFgl'],$['endTime']);console[l1iIII(0x1a9,'u@Q$')](($[l1iIII(0x1f7,'E]4!')]&&'活动名称：'+$[l1iIII(0x255,'RluL')]+'\x0a')+l1iIII(0x258,'yd3q')+il1i1I+l1iIII(0x1db,'4(5Y')+lI1li1+'\x0a');const iI11II=Date[l1iIII(0x1ef,'Jehd')]();if($[l1iIII(0x1f8,'aC(a')]&&iI11II<$[l1iIII(0x219,'yd3q')]){if(iI1lil['zTkjf']('fWMtD',l1iIII(0x23a,'#E*7'))){const ilil1i=IiilII[l1iIII(0x16e,'4(5Y')](iI1lil[l1iIII(0x1ac,'vbXr')],IliI1I[l1iIII(0x1f0,'vbXr')]),IlIIi=lI1Iii[l1iIII(0x1fe,'$sP#')]('yyyy-MM-dd\x20HH:mm',i1li[l1iIII(0x249,'Moax')]);li1II['log']((IliI11[l1iIII(0x196,'N2VE')]&&'活动名称：'+i1ll[l1iIII(0x22d,'m5ja')]+'\x0a')+l1iIII(0x26e,'$sP#')+ilil1i+'\x0a结束时间：'+IlIIi+'\x0a');const IiI1l=i1l1lI['now']();if(i1iliI[l1iIII(0x238,'vbXr')]&&IiI1l<I1iIii['startTime']){IiilIl[l1iIII(0x17f,'rCZ7')](l1iIII(0x27d,'(&^m')+ilil1i+l1iIII(0x295,'Zk0l')),iii1Ii['runEnd']=!![];return;}if(lI1Iil[l1iIII(0x236,'^RYH')]&&iI1lil[l1iIII(0x228,'xITP')](IiI1l,lilIiI['actEndTime'])){iii1Il[l1iIII(0x27c,'^RYH')](l1iIII(0x1aa,'B%nb')+IlIIi+l1iIII(0x1f3,'B%nb')),lI1IiI[l1iIII(0x241,'tUeO')]=!![];return;}}else{console['log']('活动将在\x20'+il1i1I+l1iIII(0x243,'4(5Y')),$['runEnd']=!![];return;}}if($[l1iIII(0x236,'^RYH')]&&iI1lil['pltcS'](iI11II,$['actEndTime'])){console[l1iIII(0x206,'N!*1')]('活动已于\x20'+lI1li1+'\x20结束，下次早点来吧~'),$['runEnd']=!![];return;}}await iI1lil[l1iIII(0x20f,'wNkw')](doDailyTask),$[l1iIII(0x173,'^RYH')]&&console['log'](l1iIII(0x1da,'Zk0l')),joinMember&&await iI1lil[l1iIII(0x17e,'0!CA')](memberList),await iI1lil[l1iIII(0x18d,'tUeO')](rewardStatus);}catch(illlII){console['log'](l1iIII(0x201,'u@Q$')+illlII);}}async function doDailyTask(){const llI1I1=iiillI,iIII11={'dsWfn':function(llll1,lil11l){return llll1>=lil11l;},'Vsulf':'VSyEZ','QHlKv':llI1I1(0x181,'Jehd'),'nxnWv':function(i1i1Il,I1lIl1){return i1i1Il==I1lIl1;},'etzkR':llI1I1(0x1c9,'4zF['),'ThfsB':function(lil11i,IlIIl){return lil11i(IlIIl);},'YAjeV':function(lI1liI,i1i1Ii){return lI1liI!==i1i1Ii;},'ifztL':llI1I1(0x25f,'4(5Y'),'bBHFl':'uJRty','dGUkI':function(lllii){return lllii();}};let IiI1i=!![];for(let iI11Ii of $['moduleGetActivity']?.[llI1I1(0x264,')WMT')]?.[llI1I1(0x202,'!$Jo')]||[]){if(iIII11[llI1I1(0x246,'UDDG')](iI11Ii[llI1I1(0x1f6,'nUN7')],iI11Ii[llI1I1(0x23f,'yNs3')])){if(iIII11['Vsulf']!==llI1I1(0x294,'4(5Y'))continue;else I1l1II[llI1I1(0x16f,'UDDG')](llI1I1(0x21b,'B%nb')+IIli1I+'\x20请求响应\x20'+(I1i11I[llI1I1(0x27a,'N!*1')]||llIliI));}else IiI1i=![];$[llI1I1(0x1f4,'N2VE')]=iI11Ii['groupType']==0x1?iIII11['QHlKv']:iIII11[llI1I1(0x227,'yNs3')](iI11Ii[llI1I1(0x203,'o7Be')],0x2)?iIII11[llI1I1(0x198,')WMT')]:'',$['rewardQuantity']=iI11Ii[llI1I1(0x22f,'RluL')]||0x0,$[llI1I1(0x1a3,'yd3q')]=iI11Ii[llI1I1(0x1c8,'UHFP')],$['itemId']=iI11Ii[llI1I1(0x22c,'wNkw')]['itemId'],$['has_done_task']=![],await iIII11[llI1I1(0x2a0,'6&H9')](sendRequest,'moduleDoTask'),await $[llI1I1(0x266,'N2VE')](0x3e8);if($[llI1I1(0x1fa,'75hf')])break;}if(IiI1i)$[llI1I1(0x257,'0!CA')]=!![];if(!$['doTaskrun']&&!$['pro_hot']){if(iIII11[llI1I1(0x23e,'VDm0')](iIII11[llI1I1(0x176,'wNkw')],iIII11[llI1I1(0x23c,'QeUZ')]))await iIII11[llI1I1(0x18c,')WMT')](sendRequest,llI1I1(0x1dd,'AiiS')),await $[llI1I1(0x25d,'0!CA')](0x3e8),await iIII11[llI1I1(0x1cb,'rCZ7')](doDailyTask);else{i1ill1[llI1I1(0x21f,'yNs3')](llI1I1(0x160,'E]4!')+iIIl1l+llI1I1(0x29f,'8]VO')),llIli1[llI1I1(0x280,'ZF3P')]=!![];return;}}}async function memberList(){const IlIlil=iiillI,iI11Il={'Asgvo':function(iIII1i,iil1i1){return iIII1i*iil1i1;},'xypvg':function(il1i11,IlIll1){return il1i11===IlIll1;},'qxckL':IlIlil(0x1e6,'u@Q$'),'dPzQZ':function(IlIII,ilil1l){return IlIII!==ilil1l;},'wLOoz':'ozEhQ','vtGzF':function(illlIi,I1lIii){return illlIi(I1lIii);},'YClgh':IlIlil(0x20a,'8LJa')};$['cannot_open_list']=[];for(let IiI1I of $[IlIlil(0x20d,'B%nb')]?.['memberTask']?.[IlIlil(0x16d,'yd3q')]||[]){if(iI11Il[IlIlil(0x214,'vbXr')](iI11Il['qxckL'],iI11Il[IlIlil(0x22a,'yNs3')])){$[IlIlil(0x20b,'Moax')]=IiI1I[IlIlil(0x216,'#E*7')]||0x0,$[IlIlil(0x281,'yNs3')]=IiI1I['venderId'];if($[IlIlil(0x1d8,')JSy')][IlIlil(0x1ad,'QNwJ')]($[IlIlil(0x21d,'yd3q')]))continue;switch(IiI1I[IlIlil(0x298,'4zF[')]){case 0x0:$[IlIlil(0x1d5,'c^tl')]=await common[IlIlil(0x289,'yd3q')]($[IlIlil(0x24c,'B%nb')]);if($['open_flag']){if(iI11Il[IlIlil(0x230,'UHFP')]('PUFjK',iI11Il['wLOoz'])){$['cannot_open_list'][IlIlil(0x1c7,')JSy')]($[IlIlil(0x281,'yNs3')]);continue;}else iIIl1i[IlIlil(0x186,'8]VO')]('日常任务做完了~');}await $['wait'](0x3e8);case 0x1:$['taskName']='['+IiI1I[IlIlil(0x209,'TlP(')]+IlIlil(0x21a,'$sP#'),$[IlIlil(0x277,']Be!')]='7',$[IlIlil(0x1bf,'N2VE')]=$[IlIlil(0x168,'$sP#')],await iI11Il[IlIlil(0x279,'o7Be')](sendRequest,iI11Il[IlIlil(0x1e8,'o7Be')]),await $[IlIlil(0x262,'tUeO')](0x3e8);break;}if($['pro_hot'])break;}else Iiil1+=iiilli[l1iIIl[IlIlil(0x224,'(rY7')](iI11Il[IlIlil(0x28b,')JSy')](iiilll[IlIlil(0x297,'Zk0l')](),lI11Il[IlIlil(0x185,'TkAj')]))];}}async function rewardStatus(){const lIli1I=iiillI,IIIIIi={'ZIWZm':function(IIIIIl,I1lIil){return IIIIIl(I1lIil);},'nYXSh':lIli1I(0x1dd,'AiiS'),'RROce':function(IIIl1i,liiII1){return IIIl1i==liiII1;},'hiLNV':function(IIIl1l,lllll){return IIIl1l(lllll);}};$[lIli1I(0x162,'$sP#')]='',await IIIIIi[lIli1I(0x19e,'ZF3P')](sendRequest,IIIIIi[lIli1I(0x163,'Zk0l')]),IIIIIi[lIli1I(0x273,'1fIG')]($['moduleGetActivity']?.[lIli1I(0x1ae,'75hf')]?.[lIli1I(0x276,'TlP(')],0x1)&&($[lIli1I(0x252,'E]4!')]=lIli1I(0x189,'#E*7'),$[lIli1I(0x1a6,'xITP')]=$[lIli1I(0x237,']Be!')]?.[lIli1I(0x2a1,'(rY7')]?.[lIli1I(0x208,'aC(a')],$[lIli1I(0x166,'4zF[')]='5',$['itemId']='1',await IIIIIi['hiLNV'](sendRequest,'moduleGetReward'),await $[lIli1I(0x218,'1fIG')](0x7d0));}async function handleResponse(i11ili,iil1l1){const II1il=iiillI,lllli={'vAUHr':function(iiili1,ill11i){return iiili1<ill11i;},'slMmm':II1il(0x28e,'8LJa'),'pspnJ':'3|2|4|1|0','SMzWL':II1il(0x1fb,'AiiS'),'JdBDM':function(lllill,ill11l){return lllill==ill11l;},'pQBoy':II1il(0x1bb,'8]VO')};try{switch(i11ili){case lllli[II1il(0x1b8,'ZF3P')]:if(iil1l1[II1il(0x18b,'m5ja')]&&iil1l1[II1il(0x15e,'rCZ7')]==!![]){const I1lIiI=lllli[II1il(0x251,'^RYH')][II1il(0x217,'#E*7')]('|');let lllili=0x0;while(!![]){switch(I1lIiI[lllili++]){case'0':!$['moduleGetActivity']?.[II1il(0x1ab,'yd3q')]&&($[II1il(0x263,'Moax')]=!![],console[II1il(0x1e0,'m5ja')](II1il(0x172,'tUeO')));continue;case'1':$['configName']=$[II1il(0x284,'Jehd')]?.['moduleBaseInfo']?.[II1il(0x196,'N2VE')];continue;case'2':$[II1il(0x183,'UHFP')]=$[II1il(0x19c,'$uCZ')]?.['moduleBaseInfo']?.[II1il(0x1f2,'8]VO')];continue;case'3':$[II1il(0x162,'$sP#')]=iil1l1?.['data'];continue;case'4':$[II1il(0x21e,'vbXr')]=$[II1il(0x1f9,'6&H9')]?.[II1il(0x248,'Moax')]?.[II1il(0x232,'E]4!')];continue;}break;}}else console['log']('❓'+i11ili+'\x20'+JSON[II1il(0x1b6,'AiiS')](iil1l1));break;case lllli[II1il(0x27e,'Zk0l')]:if(lllli[II1il(0x193,'4zF[')](iil1l1[II1il(0x1ba,'o7Be')],!![])){if('nQtZr'===II1il(0x250,'Jehd')){let Ill11='';for(let liiIII=0x0;lllli[II1il(0x17a,'!$Jo')](liiIII,ll1lI);liiIII++){Ill11+=lIIill[I11iIi[II1il(0x1d9,'$sP#')](I1ilII[II1il(0x1b5,'75hf')]()*I11iIl[II1il(0x1c6,'!$Jo')])];}return Ill11;}else console['log']('完成'+$[II1il(0x161,')WMT')]+II1il(0x17b,')WMT')+$['rewardQuantity']+'京豆');}else(iil1l1['errorMessage'][II1il(0x1f5,'75hf')](II1il(0x247,'8]VO'))||iil1l1[II1il(0x17d,'Jehd')]['includes'](lllli[II1il(0x293,'QeUZ')])||iil1l1['errorMessage'][II1il(0x28c,'$uCZ')]('奖励已抢光'))&&($[II1il(0x292,'AiiS')]=!![]),console[II1il(0x299,'AiiS')]('完成'+$['taskName']+II1il(0x210,')JSy')+iil1l1['errorMessage']);break;case'moduleGetReward':lllli[II1il(0x296,'VDm0')](iil1l1[II1il(0x29d,'TlP(')],!![])?console[II1il(0x1e0,'m5ja')]('领取'+$[II1il(0x231,'N!*1')]+II1il(0x1ee,'RluL')+($[II1il(0x164,'4(5Y')]?':\x20'+$[II1il(0x1e4,'kUx*')]+'京豆':'')):(iil1l1[II1il(0x1d1,'Zk0l')][II1il(0x278,'N!*1')](II1il(0x1fd,'AiiS'))&&($[II1il(0x25c,'u@Q$')]=!![]),console[II1il(0x16f,'UDDG')]('领取'+$[II1il(0x188,'#E*7')]+II1il(0x1d2,'4zF[')+iil1l1[II1il(0x282,'4zF[')]));break;}}catch(li1i11){console[II1il(0x1c3,'aC(a')](II1il(0x24a,'vbXr')+i11ili+II1il(0x215,'wNkw')+(li1i11['message']||li1i11));}}async function sendRequest(iI11I1){const lllI11=iiillI,il1i1l={'DlaRk':lllI11(0x1b4,'N!*1'),'PHAXy':'GET','wvirH':'moduleGetActivity','kMfMu':lllI11(0x20e,'u@Q$'),'feOoa':lllI11(0x17c,'1fIG'),'bdDGw':'3.1','flXaq':lllI11(0x223,'c^tl'),'wrgMD':lllI11(0x25b,'yNs3'),'gxVLj':lllI11(0x212,'ZF3P'),'GESlf':lllI11(0x171,'vbXr'),'exHfJ':lllI11(0x287,'vbXr'),'nsXVn':lllI11(0x170,'1fIG'),'qZDUE':function(ii1iiI,lllilI){return ii1iiI<lllilI;},'lmSnG':function(ilil11,illlI1){return ilil11>illlI1;},'NuUKh':function(IIIl11,I1lIi1,liiIIi){return IIIl11(I1lIi1,liiIIi);},'BnZUR':function(lil11I,Iliii1){return lil11I===Iliii1;},'mEeAc':lllI11(0x28f,']Be!')};if($[lllI11(0x25e,'V6tR')])return;let IlIlll='',IIIl1I=null,iil1ii=null,IlIlli=il1i1l[lllI11(0x24b,'kUx*')],il1i1i={},lil111={};switch(iI11I1){case lllI11(0x226,'aC(a'):IlIlli=il1i1l[lllI11(0x1d3,'N!*1')],lil111={'appId':lllI11(0x274,'UDDG'),'functionId':il1i1l[lllI11(0x229,'4zF[')],'appid':il1i1l[lllI11(0x239,'m5ja')],'clientVersion':common['getLatestAppVersion'](),'client':il1i1l['feOoa'],'body':{'configCode':configCode,'fp':$['fp'],'eid':$[lllI11(0x1eb,'UHFP')]},'version':il1i1l['bdDGw'],'t':!![]},il1i1i=await H5st['getH5st'](lil111),IlIlll=il1i1l['flXaq'],iil1ii=il1i1i['paramsData'];break;case il1i1l[lllI11(0x269,'tUeO')]:lil111={'appId':lllI11(0x283,'aC(a'),'functionId':lllI11(0x1b9,')WMT'),'appid':il1i1l[lllI11(0x275,'$sP#')],'clientVersion':common[lllI11(0x1a1,'N!*1')](),'client':lllI11(0x187,'6&H9'),'body':{'groupType':$[lllI11(0x203,'o7Be')],'configCode':configCode,'itemId':$['itemId'],'fp':$['fp'],'eid':$[lllI11(0x24f,'(&^m')]},'version':il1i1l[lllI11(0x192,'nUN7')],'t':!![]},il1i1i=await H5st['getH5st'](lil111),IlIlll=il1i1l[lllI11(0x213,'(&^m')],IIIl1I=Object[lllI11(0x180,'UDDG')]({},il1i1i[lllI11(0x1e3,'N!*1')],{'groupType':$['groupType'],'configCode':configCode,'itemId':$[lllI11(0x28a,'VDm0')],'fp':$['fp'],'eid':$['eid']});break;case il1i1l[lllI11(0x221,'8]VO')]:lil111={'appId':il1i1l['GESlf'],'functionId':il1i1l[lllI11(0x221,'8]VO')],'appid':il1i1l[lllI11(0x16c,'wNkw')],'clientVersion':common[lllI11(0x19a,'$uCZ')](),'client':il1i1l[lllI11(0x1cf,'tUeO')],'body':{'groupType':$[lllI11(0x1ca,'(rY7')],'configCode':configCode,'itemId':$[lllI11(0x29e,'AiiS')],'fp':$['fp'],'eid':$[lllI11(0x179,'0!CA')]},'version':lllI11(0x267,'75hf'),'t':!![]},il1i1i=await H5st[lllI11(0x18a,'$uCZ')](lil111),IlIlll=il1i1l[lllI11(0x256,'rCZ7')],IIIl1I=il1i1i[lllI11(0x16b,'4(5Y')];break;default:console['log']('❌\x20未知请求\x20'+iI11I1);return;}const i11ilI={};IIIl1I&&Object['assign'](IIIl1I,i11ilI);iil1ii&&Object[lllI11(0x19f,'ZF3P')](iil1ii,i11ilI);const ii1ii1={'url':IlIlll,'method':IlIlli,'headers':{'Accept':lllI11(0x1c4,'Moax'),'Accept-Encoding':lllI11(0x260,'yNs3'),'Accept-Language':lllI11(0x27f,'B%nb'),'Connection':il1i1l[lllI11(0x242,'B%nb')],'Content-Type':'application/x-www-form-urlencoded','Cookie':cookie,'Origin':lllI11(0x15f,'N2VE'),'Referer':'https://pro.m.jd.com/','User-Agent':$['UA']},'params':iil1ii,'data':IIIl1I,'timeout':0x7530};IlIlli===il1i1l[lllI11(0x175,'(&^m')]&&(delete ii1ii1[lllI11(0x1b0,'Zk0l')],delete ii1ii1['headers'][il1i1l[lllI11(0x24d,')JSy')]]);const llllI=0x1;let lllil1=0x0,iil1il=null,ilil1I=![];while(il1i1l[lllI11(0x1e1,'0!CA')](lllil1,llllI)){il1i1l[lllI11(0x1a0,'TkAj')](lllil1,0x0)&&await $[lllI11(0x1e9,'xITP')](0x3e8);const iIiIi=await common[lllI11(0x1a2,'4zF[')](ii1ii1);if(!iIiIi[lllI11(0x1d0,')JSy')]){iil1il='🚫\x20'+iI11I1+'\x20请求失败\x20➜\x20'+iIiIi['error'],lllil1++;continue;}if(!iIiIi[lllI11(0x290,'c^tl')]){iil1il=lllI11(0x26a,'nUN7')+iI11I1+lllI11(0x1dc,'#E*7'),lllil1++;continue;}await il1i1l[lllI11(0x29a,'u@Q$')](handleResponse,iI11I1,iIiIi['data']),ilil1I=![];break;}lllil1>=llllI&&(console[lllI11(0x1c5,'c^tl')](iil1il),ilil1I&&(il1i1l['BnZUR'](il1i1l[lllI11(0x1ce,'AiiS')],lllI11(0x1df,'0!CA'))?($[lllI11(0x191,'m5ja')]=!![],$[lllI11(0x244,'TkAj')]&&$[lllI11(0x1be,'TlP(')][lllI11(0x1ea,'RluL')](iil1il)):Iliil1['log'](lllI11(0x1b7,'#E*7')+i1III)));}function randomString(iiilil,iil1li='qwertyuiopasdfghjklzxcvbnm'){const I1lIll=iiillI,lillIl={'qGjYw':I1lIll(0x253,'$uCZ')};let iIiIl='';for(let iiilii=0x0;iiilii<iiilil;iiilii++){lillIl[I1lIll(0x200,'UHFP')]!==lillIl[I1lIll(0x27b,')JSy')]?(I1llii['runEnd']=!![],lilIll[I1lIll(0x235,'4zF[')](I1lIll(0x21c,'xITP'))):iIiIl+=iil1li[Math['floor'](Math[I1lIll(0x1a5,'(rY7')]()*iil1li['length'])];}return iIiIl;}function Iii11l(){const I1lIli=(function(){return[...[iｉl,'IBRjCGrsrCSjJiCXwamiIYY.cBGoNQBmBbW.IUv7==','eCkfW6tdP8kFW5K','WRzYWQPCyXi9kNC','4P2eW5VOH4lMNONOV7lOOzdPGzpLI7ZKU6RPLkVOROBdUq','W753W5b8W5q','WQyKW47cQhiUkNKoW6ywDG','WPDoW4RdL8kHyMS','6kkj5AsU5PIv5lMF5OIp6lAk','D8k/xHxdLCk5W7BdUmohW4PFaNJdRa','ldZcHtzh','hMZdOSo2idXw','hmk5Cmo/WP5P','vhDVW6FcICoEjuVcGuKGfXtdV8kgma','WQPIuKj8qSkIsCoNW4uxW5pcKa4VW6Dsgb3dG8kkjdfsWOG/5RAs5yUqfmkT','wwr6','zSopW4y','ygbZpmouWRiKW5rIWPVcVHScWRaByCkwgx1WW6pcJmkrF8oXEgdcGZSGiCoqqq','WOaBW5G','BhJcMKhdVIe','fdmUWRW','x8oTW4KZqq3cKYqz','wUA0P+INJEwuUEwsU8kS','W4e+bXGVW611W4Hq','WRJdQXC9jW','WRfVWRvq','qSkmWPXbW7TsfX4','WQHdWR10BG','fu7cPWFcGa','fZm+WRFdMmkyya','wx9SDHGLW4bJWPbFFmk9','5Awx5yUz5As06lwAqmor','tWf9W7ldNa','WQnVWRzuyrKT','WOmeW5RcN8kqW6SDmmkt','WQNdGflcTICvmqLQqg7dOW','gMFdTCoGoq','bYCZWRRdKSkFtbpdIruVkHVdSSkqiG','n8kXWQVdUSki','5PEz5BI15lUL5yQ45ycW5A+K5lIJBG','poE7S+AETUAxUEMxGo++SW','koISJoAYMUwMLoI0HZZINOJdRoAwJowtV+w7VEAwG+ApVa','WQHPWRXayratkxO5W7hcMNCBWQ07tq','fsaCymoMD8kCW4NdObiEW4ZcNSkzpGODW74qW5zed0CspCkRW4DP','eCoZxmoFrG','u8kqiW','e8o+w8ojwq','W5f+WQa','BYHoW4VdIatcG8oqy8kh','W490WRbuWRSwuSk6WRVcP8oRW5ldLCoL','5Rwy5yMm5Bkm5z6RW5a','BH8vrx0','eqe8W5pcRmokWORcR8oQymomW7pcOa','WR14W4xdK8kS','mSouWPDY','W4dcJNm','xCo2W4i','amoSWQC','WOWMW78aW7SyvmkgWPtcRCow','5AEW5yMw5OIB5yMr','WQSXAq','W43cICkfhwhcI8kwWPTg','W4WOnX0TW5ztW5rAfrNdUfSdBSoCWQnUWRPBWRBdSG','qf1TWOZdSSkUW5pcKCo1','m+E4PoAFN++9Oos6PEAVNUAwV+EdUUACP+wtU8oO','aCkSzSo5WPLSWPn2','cSkkW6NdR8kfW5ddG8op','ogdcHuzKW45xoX3cUSkr','f8orWR5aW7H+mb0AEW','ECouW4dcNqBdQIVdNCkj','uuKFWQZdMaOWWQjJW7VdSKBcUGjzWORdSa','e8kwW6xdNmkyW5VdKG','WQHPWRXayraqi1OzW6hcHq','rLtcTN9DW4C','6kgU5Asq5PUh5lQp5OQE6lsf','jCk0WQNdSa','W7H1W650W43cSCkIe8oWpY4','sCoyW4WFrG','4P2BAEIfQoACSoI/T+IHUUMcMEwkH+s4NUMxTUIUOHi','DhZcH03dHIdcR8kU','WOnjW4BdGCk0rwhcTSo3','W60GnrH5cCk1sgX8','WQGTEq','CYzB','hSoMWO1i','EmofW5BcJGddMGtdMCkcb8kDW50','egJdO8oHdZPEW5G','umoozComW416kunQWQhcQ8kAj8oLaG','C3v0mCopWRuuW5vQWPRcPf0CWRO','W6f0W7O','FSkyW6qzW4lcMHeMnSkDW7vEtmowW5X/Da','Fs0rDeHdWRtdNSo5WOeQrX4S','W5dcOqBdKgi','5lQF5yUN5AwS6lEXWOFdIW','W7DRuxldK0C0CY9ZW4iP','W6b0W7LKW5xcL8kkgCoVbc4OtmkWWRi','FmoUWPRcJ8oI','W5FcLCksaMG','WRZORiBMSkBLKyRLUOCb','ESkEWQ/dHfb4rCk5dvWDWPRdPIa','E8klWRtdJfy','WRDNzey','h8o3WQhdHbWEwIDo','dow/NEwoPq','4P2FW5FMNQROGPhMR43NOPhLPzlNKyvI','5Rw+5yID5lUZ5A2E5z2Z5zkoW7i','gSoMWQ7dKG04EI4','W4RcGSkgigBcSSkA','eYSK','zh51'],...(function(){return[...['rubCWQNdTG','6lEM5y+X5PET5Pw6','WOqaW4VcGCk8WRDEFSkvWR8FW5lcS8oNqG8Pk8kwD8kPomkYW70','W4aGbWiT','lJlcGvldOYxcR8o1W6JdSSoQlcdcUCocWQe','z8opW4xcMH7dMWxdLCkyl8knW4hdNmoWttFcSG','etWTr8oI','nCozWOPLca','DH5Sdti','dJWGE8oy','g8kqWQtcVmoBW6bLAu4','W7xcHqhdQG','xmkqkSoeWOJcMftdN1Dt','W4GTbqG','W5tcGNZcR8odW73dLHtdS8oAWRGBWO/dKW','xmopW5WxAW','AYHpW4hdQXBcQSou','eCoqWRrYW7H0gW','nYrOnHNcHGK','cSkwnmkbWPuQxLD8WOhcHSk6mq','BqDI','cmoKWPb5zSoeWOmYWQug','FCk1tIpdLSkZW5RdTmowW51DgMtdV8kLW6/dVG','W5ZcMmkdbNVcI8kwWPTg','vmkYiSoVWPq','qSkFWO7dK3e','W7lcGZCIb2C0wGmFWPWLlfnmn18uESotmZhcR8oGWO5CWO4','WQaylWxcIW','W5WdWPNcJCoYisJcPCoMW7RcISkDWPm','u8o4lSoppG','cYuWE8oxD8k2W4VdUW','WRHYDwCOtCo2gvXOB8oIWQ8I','av7cHI3cJ08','DSkpW4GkW6q','fUw8OowKOU+8G+AzRUEaKowhTEAEOUwtHXS','B8k1WR5mW5/cPMu','W4NcGGhdTv1agsG','g8kmWQFcU8og','5Rsz5yQq5AsG54ko54QA','Bh9NjCorWRqhW4f4WPhcMvOoWQW','zh5NbmouWRWG','4P+JW4ZMN4JOGONMRAZNORhLP7VNK7ad','W7L9WQzNWQi','zCksW64iW4VcJr8N','cJufWOldKW','AYbrW48','F8oRWQy','WRWlAZ11','gCo0WPrsqG','amoFWQnnW594eXK','gI/cKIvw','vw7cKvtdHcJcSCk/','W4xcIgxcQmoyW77dIqddV8or','WRRdGbO3hW','bSols8o9B8kuW7pdSaO','5B2S5Awi5Ps26zwc772Y','gSoFWR1d','xmkqkSoeWOJcMa','eISNzCo4FCkhW4RdMWCzW4i','zZSDq09zWQO','fCofDSoO','W7GWlXbYhG','D3lcHL9M','gd4Qymk4omkNW4ddQqOlW53cIComqrWo','C8oapCotrwBcNfhdPxNdM2Poaq0I','beRcGrW','C2vTfCotWRu','WQ8QW4pcSwCFd2uX','mGRcUYO','aSkSFmoM','umokWRS','CCkpwI7dIa','bfNcJYxcPq','8kI6OSol','fKxcNG','5y+c6ywn6kY25PUGWQ7cSmkUeG3dUmovW4/dRSkr','CG1XpbxcNHCrfq','5B2r5Asw5PsY6zwH77+G','ymk/WQjtW5VcOg4','xKmCWRddMJSEWQPY','B8oblCoE','vCoLW7CVDG','WPjuqLfR','t8okWPldRSkB','oSkqWQldMmkp','awZdPSoKmZ9GW4NdIeviWRW','D8kOrspdISkcW6tdOCoh','DIDFW4BdKbpcOSoc','WPjpW67dJSkc','CIXpW5NdHbdcOG','fqe3WO3dIG','bCoOWOm','5RsH5yIQ5Boe5z+gWRm','B0bKtIy','ACkFWQ0VW6ddKYWRB8kuW7DevSkBW4q2pwdcGG','W79UW7nuW5FcLG','cseTDmoXASkkW4e','zbP3eaJcVbKla8kIcKW','AmocW4FcJry','WQGXEJ9wDCosmSkjWQJdN8kVl0GQW7RdQG','smkonCk2nSovWOS','e8kAWP7cUSoCW6m','W4tcICkhbclcVSktWP9vWQa','W4fHWOddTZrHrow8LUwMKEocL+s7IEs4GEI0MEwmVa','bSoSWQNdMdSIxdPMmr5QWPeb','y8oniCohiu8','jtu6WQldKG','nqxcTsnevCkTEq','WQi7Cb97','umoozComW416kunQWRlcRCkzl8oHdYtcIq'],...(function(){return['y8knArxdOa','WOGvW4VcKa','4PUmWQpORlFLH77LR7lKUipLV7BOP4VNMQ/NJ7VLO7dLJ5dPHlVLKB3LHkFOViVOOzFOHPBMNz8','WRv0WRDQzrOG','WRiljsZcNG','Cg/cSgLb','how8JEwNLE+8LEAySoEdKEweQoADTEwtHea','qmoDbSoUjq','tMXWFquf','CW12cHBcHq','WQLPWR8','wtWNv08','zCkEWQVdLKn7Cq','CcBcNLT+W4PNEZRcSCkhiqdcMs16WOzfWRGSiKjt','ahZdSSoMjcHa','WQXYWR1yrbe','aUE7Q+ADLE+/QEs6L+AVM+AvK+EbHEAFTEwqLmog','Ae4DWQRdTG','W4SJdbGZW5XoW5LgbctdS08v','WQS0aYBcNW','WQ/dMse1c3G0','hCk5yCoIWQq3W5e8tGhcRSozbSo6W6FcUI0LW6GZ','5Rwp5yIw5BsI5lQOWRe','WR8QW5NcTLaQa3m','pmkYWQddOmkwW7pdNCk7WPldV3asqd/cLCkykW','uLrgsGi','rexcNM5gW40PWRlcGqVcO8kPk8kS','Ba12dbVcLHK','zHPQcGRcPquifq','th11jSkKkmoZW7BdTtuEW6ZcPq','j8k4WQRdSCkFW6tdK8k6','gmkAWOtcKCohW6X+CNpcM8k2W7xdVMW','j3emWPpcK0FdT8osy8kWimoTBa','rKhcM25zW5O8WQBcLaq','W7FcValdIMy','aCoMWQ3dLa04FYnyia','qKNcHgO','e8kqWPC','WOnPy0zRq8kjcmoCW4GtW5m','WP3dN8ourtO','5Rwi5yQd5lUL5AYW5z+j5zo0Ca','dCoOWRbDE8olWQuUWQy','Bx9K','sSokWOpcTSoQ','W7xcLX7dS18','ASoWWQ3cSCo7W6ldPW','vMLbArGhW7P8WOXkB8k9zGNcI8okW4hcL8kYeCo2mwdcOI3dMffDWQ3dR8klWR/MMRBLKltLHiRKVAdVVQNPUzZORB3KUOhLHyZKVla','b8onEW','DLZcOw7dUa','5lIW5yUQ5OQ65yMcjgS','WQLjxG','WQaSBcvixCoWjmkoWOJdM8k+','lSo0FColBq','WRddGYu','hSkmWOpcTmopW6u','WP7MTjhOP5BLU53PK4bn','WOOjW6NcMvSnkv4tW40UuxlcHw0nW40MWRFdLd9gWRbVW4pcKW','wSo6W4eVxW3cGZKz','zmkuWR8','BSk1WQnyW4RcQq','tLDT','vwKO','FmkAWQVdJMX9ECkP','u+AFU+E4KowNS+wkK0e','oW7cOGCeqSk8','w8kEmmod','WP8JW4ZcRLW','p3VcIJ/cKa','WQrtWQHnFW','eq8YW53cQmonW5dcSCo8q8oAW54','WQyIW6FcSeW','umkkmmoKWO3cNN0','pg3cR2HG','sWXhoZC','W6r1W7L0W4e','W5reW53cLmkLW6SLjq','fSkIE8o0WR5QWRbYuXy','pCkYWQpdKmkiW6q','WQ4/W5dcTKW','w8o+W5iLwq','oW7cOGnqrCkTEuJdKCk3WOlcISo7l8kIW4mijq','WOmbW4VcT8kJW6Ww','mqtcSJPDvmkpB0JdKCkKWOBcTCoOnmkLW5m','r8kjW6GEWQuUfdeBBHBdOa','W5DsW4PlW5q','W6XOW654W57cNa','BSk9WP5rW7K','EcXiW6BdHapcOSocy8kNnmoqtCoGE18bhuS','CW10cH/cGGG','c8oXWQ/dGXGEsJPo','tXfFW6ldKa','W5qTbGKWW5q','n8oqWOLNktu','lmoBWPPJiW','uK8yWRldUG4AWQi','EYyv','5RsO5yMF5BwY5lUIWO4','aCoSWQtdGWqVCsTymtPMWPiC','W5RcHCkKe2m','bsbitwtdRr9u','dSklW67dTSkCW5hdPmoDWQdcTIKuxgC','44oB5O6B56Aq44om6k+P5ysd6i+z5y+agCoOcNzwWQ4','wgXQEa','WR1YDg0Ot8o2wgLRFSopWOK','uwXU','W6CQjsbWh8kbth9yvCoSWPCSW77dOSor','tWzVW74'];}())];}())];}());Iii11l=function(){return I1lIli;};return Iii11l();};var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
