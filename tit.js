/*划上去的提示*/

var timeFloor=null;
$("#station-all .desk-box").on('mouseenter',function(event) {
	var target=$(this);
	var tipStr=`<div class="station-popup" style="padding: 20px;">`
					+`<div class="kb-title">`
						+`<span>基本信息</span>`
					+`</div>`
					+`<ul class="basic-message">`
						+`<li class="clearfix">`
							+`<div class="group"><i class="layui-icon"  style="color:#333">&#xe66f;</i><span>田茂昌</span></div>`
							+`<div class="group"><i class="layui-icon" style="color:#333">&#xe68e;</i><span>燕博园</span></div>`
						+`</li>`
						+`<li class="clearfix">`
							+`<div class="group"><i class="layui-icon" style="color:#333">&#xe678;</i><span>13269503421</span></div>`
							+`<div class="group"><i class="layui-icon" style="color:#333">&#xe66e;</i><span>工位号201</span></div>`
						+`</li>`
					+`</ul>`
					+`<div class="kb-title"><span>备注</span></div>`
					+`<div class="remark">`
						+`<textarea name="" placeholder="编辑备注"></textarea>`
					+`</div>`
					+`<div class="footer">`
							+`<button class="layui-btn layui-btn-sm layui-btn-normal">个人主页</button>`
					+`</div>`
				+`</div>`;
	timeFloor=setTimeout(function(){
		layer.tips(tipStr,target , {
			  tips: [3, '#fff'],
			  area: ['400px', 'auto'],
			  time: 0
		});
	},300)		
}).mouseleave(function(event) {
	//clearTimeout(timeFloor);
	//layer.closeAll();
});