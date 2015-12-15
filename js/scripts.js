window.onload=function(){
var sence=document.getElementById('sence');
var ROW=20;
for(var i=0;i<ROW;i++){
	var el=document.createElement('div');
	el.style.position='absolute';
	el.style.top=(600/ROW)/2+(600/ROW)*i+'px';
	el.style.width='600px';
	el.style.height='1px';
	el.style.background='#5A49A3';
	sence.appendChild(el);
	var el2=document.createElement('div');
	el2.style.position='absolute';
	el2.style.left=(600/ROW)/2+(600/ROW)*i+'px';
	el2.style.width='1px';
	el2.style.height='600px';
	el2.style.background='#5A49A3';
	sence.appendChild(el2);
	for(var j=0;j<ROW;j++){
	var block=document.createElement('div');
	block.setAttribute('class','block');
	block.setAttribute('id',i+'_'+j);
    block.style.width=(600-ROW)/ROW+'px';
    block.style.height=(600-ROW)/ROW+'px';
    sence.appendChild(block);
	}
}
var cc=document.getElementsByClassName('block')
var kaiguan=true;
var dict1={};
var dict2={};
var panduan=function(id,dic){
   var x=Number(id.split('_')[0]);
var y=Number(id.split('_')[1]);
    var hang=1;
    var tx,ty;
    tx=x; ty=y;
    while(dic[tx+'_'+(ty+1)]){hang++,ty++;}
    tx=x,ty=y;
    while(dic[tx+'_'+(ty-1)]){hang++,ty--;}
    if(hang==5) return true;
    
    var lie=1;
    tx=x;ty=y;
    while(dic[(tx-1)+'_'+ty]){lie++,tx--;}
    tx=x;ty=y;
    while(dic[(tx+1)+'_'+ty]){lie++,tx++;}
    if(lie==5) return true;
    
    var zx=1;
    tx=x; ty=y;
    while(dic[(tx-1)+'_'+(ty+1)]){zx++,ty++,tx--;}
    tx=x;ty=y;
    while(dic[(tx+1)+'_'+(ty-1)]){zx++,ty--,tx++;}
    if(zx==5) return true;

    var yx=1;
     tx=x; ty=y;
    while(dic[(tx-1)+'_'+(ty-1)]){yx++,ty--,tx--;}
    tx=x;ty=y;
    while(dic[(tx+1)+'_'+(ty+1)]){yx++,ty++,tx++;}
    if(yx==5) return true;
    return false;
}
var hei=document.getElementById('hei1');
var bai=document.getElementById('bai1');
var time=document.getElementById('time');
var pinglun=document.getElementById('pinglun')
var tim=document.getElementById('timee');
var pinglun1=document.getElementById('pinglun1')
var tim1=document.getElementById('timee2');
var ying=document.getElementById('xian');
var jisuqi=false,timee=0;
for(var i=0;i<cc.length;i++){
	cc[i].onclick=function(){
		var id=(this.getAttribute('id'))
		if(this.hasAttribute('aa')) return;
		if(kaiguan){
			this.style.background='white';kaiguan=false;
            dict1[id]=true;
            bai1.style.display='block';
            hei1.style.display='none';kaiguan=false;
            if(panduan(id,dict1)){xian.style.display='block';clearInterval(timeId);
            if(timee<20){
                pinglun.innerHTML='你小子牛逼'
            }else if(timee>20||timee<30){
                pinglun.innerHTML='cai'
            }
            tim.innerHTML=timee+'S';
        }
		}else{
			this.style.background='#5A49A3';kaiguan=true;
	        dict2[id]=true;
            hei1.style.display='block'
            bai1.style.display='none';kaiguan=true;
	        if(panduan(id,dict2)){xian1.style.display='block';clearInterval(timeId);
                if(timee<20){
                 pinglun1.innerHTML='你小子牛逼'
                   }else if(timee>20||timee<30){
                   pinglun1.innerHTML='cai'
            }
            tim1.innerHTML=timee+'S';
        }
		}
		this.setAttribute('aa','true');
        if(!jisuqi){
            timeId=setInterval(function(){
                timee++;
                time.innerHTML='计时开始：'+timee+'S'
            },1000)
            jisuqi=true;
        }
     }
  }
  var ww=document.getElementById('ww');
  var qw=document.getElementById('qw');
  var www=document.getElementById('ww1');
  var qww=document.getElementById('qw1');
  ww.onclick=function(){
    location.reload();
  }
  qw.onclick=function(){
    location.assign('login.html');
  }
    www.onclick=function(){
    location.reload();
  }
  qww.onclick=function(){
    location.assign('login.html');
  }

  var heqi=document.getElementById('heqi');
  var huiqi=document.getElementById('huiqi');
  var renshu=document.getElementById('renshuqi');
  var wwww=document.getElementById('ww2');
  var qwww=document.getElementById('qw2'); 
  var rr=document.getElementById('timee3');
  var xian4=document.getElementById('xian3');
   var wwww1=document.getElementById('ww3');
  var qwww1=document.getElementById('qw3'); 
  huiqi.onclick=function(){
     location.reload();
  }
  heqi.onclick=function(){
    clearInterval(timeId);
    rr.innerHTML=timee+'S'
    xian3.style.display='block';

  }
  wwww.onclick=function(){
    location.reload();
  }
  qwww.onclick=function(){
    location.assign('login.html'); 
  }
    wwww1.onclick=function(){
    location.reload();
  }
  qwww1.onclick=function(){
    location.assign('login.html'); 
  }
  var xian5=document.getElementById('xian5');
  renshu.onclick=function(){
    xian5.style.display='block';
  }
}