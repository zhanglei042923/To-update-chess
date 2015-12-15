window.onload=function(){
var sence=document.getElementById('sence');
var ROW=20;
for(var i=0;i<ROW;i++){
	var el=document.createElement('div');
	el.style.position='absolute';
	el.style.top=(600/ROW)/2+(600/ROW)*i+'px';
	el.style.width='600px';
	el.style.height='1px';
	el.style.background='black';
	sence.appendChild(el);
	var el2=document.createElement('div');
	el2.style.position='absolute';
	el2.style.left=(600/ROW)/2+(600/ROW)*i+'px';
	el2.style.width='1px';
	el2.style.height='600px';
	el2.style.background='black';
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
var hei=document.getElementById('hei');
var bai=document.getElementById('bai');
var time=document.getElementById('time');
var pinglun=document.getElementById('pinglun')
var jisuqi=false,timee=0;
for(var i=0;i<cc.length;i++){
	cc[i].onclick=function(){
		var id=(this.getAttribute('id'))
		if(this.hasAttribute('aa')) return;
		if(kaiguan){
			this.style.background='red';kaiguan=false;
            dict1[id]=true;
            bai.style.display='block';
            hei.style.display='none';kaiguan=false;
            if(panduan(id,dict1)){alert('红色赢了');clearInterval(timeId);
            if(timee<20){
                pinglun.innerHTML='你小子牛逼'
            }else if(timee>20||timee<30){
                pinglun.innerHTML='cai'
            }
        }
		}else{
			this.style.background='black';kaiguan=true;
	        dict2[id]=true;
            hei.style.display='block'
            bai.style.display='none';kaiguan=true;
	        if(panduan(id,dict2)){alert('绿色赢了');clearInterval(timeId);}
		}
		this.setAttribute('aa','true');
        if(!jisuqi){
            timeId=setInterval(function(){
                timee++;
                time.innerHTML=timee+'s'
            },1000)
            jisuqi=true;
        }
     }
  }
}