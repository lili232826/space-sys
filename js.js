function renderTimeline(start,end,orderStart,orderEnd){
	//添加小方块	
	//添加linetime里面的内容
	var linetime='';
	var setStartTime=start*2,
		setEndTime=end*2,
		currentTime=parseInt(getnow().allMinutes/30);
	if(orderStart){
		var orderSval=orderStart.split(',')[0],
		orderSval2=orderStart.split(',')[1],
		orderEval=orderEnd.split(',')[0],
		orderEval2=orderEnd.split(',')[1],
		startleft=(orderSval*2+(orderSval2-1))*33,
		orderWidth=((orderEval-orderSval)*2+(orderEval2-orderSval2))*33;
	}
	for(var i=0;i<25;i++){
		if(i<10){
			i="0"+i;
		}
		linetime+='<div class="time-quantum">'+i+'</div>';
	}
	$('.line-time').html(linetime);
	//当前时间分割红线
	var leftRedPx=parseInt(getnow().allMinutes/30*33),
		leftMeetPx=parseInt(getnow().allMinutes/30)*33,
		width=leftRedPx-leftMeetPx;
	$(".current-time").css("left",leftRedPx+"px")
	var linebox="";
	for(var j=0;j<5;j++){
		linebox+='<div class="line-box">';
		for(var i=0;i<48;i++){
			if(i<setStartTime||i>setEndTime){
				linebox+='<div class="time-grid meeting-block_disabled"></div>';
			}
			if(i<=currentTime&&i>=setStartTime){
				linebox+='<div class="time-grid past-tense"></div>';
			}
			if(i>currentTime&&i<=setEndTime){
				linebox+='<div class="time-grid"></div>';
			}
		}
		if(j==2){
			//for(var n=0;n<orderTimeRender(orderArr).legtn;n++)
			linebox+='<div class="meeting-status" style="left:'+startleft+'px; width:'+orderWidth+'px; background-color: rgb(128, 164, 241);z-index: 9;"></div>';
		}
		linebox+='<div class="meeting-status" style="left:'+leftMeetPx+'px; width:'+width+'px; background-color: rgb(230, 230, 230); opacity: 1;"></div></div>';
	}
	$('.timeline-box').append($(linebox));
	
	setHeight()
}



