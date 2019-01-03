window.onload = function(){
	var top = document.getElementsByClassName('top')[0];
	window.onscroll = function(){
		var judge = document.documentElement.scrollTop || document.body.scrollTop;
		if(judge>180){
			top.style.position='fixed';
		}else{
			top.style.position='static';
		}
	}

}
function animate(obj,json,callback){		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){	
			var isStop = true;
			for (var attr in json){
				if(attr=='opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}else{
					var now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr]-now)/5;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=='opacity') {
					obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				var current = now+speed;
				if(json[attr]!==current){
					isStop = false;
				}
			}					
			if(isStop){
				clearInterval(obj.timer)
				callback&&callback();
			}
	 	},10)	
}
function getStyle(obj,style){
	if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
	}else{
			return obj.currentStyle[style];
	}
}