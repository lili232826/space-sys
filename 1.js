var stateDate={
		"code": 0,
		"msg": "",
		"count": 8,
		"data": [{
			"folderid": "001",
			"foldername": "元霆数据",
			"id": "a41304a3837c36911e7886e4ccc62ab4",
			"modified": "2018-05-11",
			"parentfolderid": "root",
			"state":"status-scheme",
			"sortNumber": 4
		}, {
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-win",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		}, {
			"created": "2018-02-28",
			"creater": "admin",
			"folderid": "002",
			"foldername": "信息部门",
			"state":"status-scheme",
			"id": "1c080197cb924d17b060f5fa5757a71f",
			"modified": "2018-04-09",
			"parentfolderid": "root",
			"sortNumber": 6
		}, {
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-initial",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		},{
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-initial",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		},{
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-initial",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		},{
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-failed",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		},{
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-failed",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		},{
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-failed",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		},{
			"folderid": "001",
			"foldername": "元霆数据",
			"id": "a41304a3837c36911e7886e4ccc62ab4",
			"modified": "2018-05-11",
			"parentfolderid": "root",
			"state":"status-scheme",
			"sortNumber": 4
		}, {
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-win",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		}, {
			"folderid": "001",
			"foldername": "元霆数据",
			"id": "a41304a3837c36911e7886e4ccc62ab4",
			"modified": "2018-05-11",
			"parentfolderid": "root",
			"state":"status-scheme",
			"sortNumber": 4
		}, {
			"created": "2018-06-08",
			"creater": "admin",
			"folderid": "009",
			"foldername": "测试",
			"state":"status-win",
			"id": "fc499066ddbc4c32a19c1a14c0d1c3cc",
			"modified": "2018-06-08",
			"parentfolderid": "a41304a3837c36911e7886e4ccc62ab4",
			"sortNumber": 1
		}]
	};
$(function(){
	
	layui.use(['form','flow'], function(){
	  var form = layui.form;
	  var flow = layui.flow; 
	    flow.load({
	      elem: '#comment-wrap' //流加载容器
	      ,isAuto: false
	      ,isLazyimg: true
	      ,done: function(page, next){ //加载下一页
	        //模拟插入
	        setTimeout(function(){
	          var data=stateDate.data,numAll=Math.ceil(data.length/10);
	          console.log(numAll,'ppp')
	          var lis = [];
	          for(var i = 0; i < 10; i++){	
	        	  
				if(data[( (page-1)*10 + i )]['foldername']!=undefined||data[( (page-1)*10 + i )]['foldername']!=null){
		            lis.push(`<div class="nav-comment-content border-bottom-lg">`
							+`<header class="clearfix">`
							+`<div class="comment-portrait">`
								+`<img src="../../images/user_head.jpg" alt="">`
							+`</div>`
							+`<div class="comment-name">`
								+`<span class="comment-people">`+ data[( (page-1)*10 + i )]['foldername'] +`</span>`
								+`<span class="comment-time">1 个月前</span>`
							+`</div>`
						+`</header>`
						+`<div class="nav-comment-text">`
							+`<p>`
								+`已成交`
								+`<span class="flow">#客户上门</span>`
							+`</p>`
							+`<p>`
								+`<span style="color: rgb(51, 51, 51);">可对比竞品：</span>无`
							+`</p>`
							+`<div class="communicate under-line">`
								+`<span class="status-win" >赢单</span>`
								+`<i class="layui-icon layui-icon-username"></i>`
								+`<span>`
									+`<a href="javascript:void(0)">北京燕博园教育科技有限公司</a>`
								+`</span>`
							+`</div>`
						+`</div>`
						+`<div>`
							+`<div class="nav-comment-children"></div>`
							+`<div class="comment-reply-box flex-between clear-fix ">`
								+`<img src="../../images/user_head.jpg" style="width: 36px; height: 36px; border-radius: 100px;">`
								+`<div class="layui-input-inline">`
									+`<input class="layui-input" name="recodeComment" value="" placeholder="添加回复">`
								+`</div>`
								+`<button class="layui-btn  layui-btn-sm layui-btn-normal btn-bg f-right">发送</button>`
							+`</div>`
						+`</div>`
					+`</div>`);
				}
		      }
	          next(lis.join(''), page < numAll); //假设总页数为 6
	        }, 500);
	      }
	    });
	});
	
})
function renderComment(data){
	var num=data.length/10;
	var commentStr=`<div class="nav-comment-content border-bottom-lg">`
						+`<header class="clearfix">`
							+`<div class="comment-portrait">`
								+`<img src="../../images/user_head.jpg" alt="">`
							+`</div>`
							+`<div class="comment-name">`
								+`<span class="comment-people">孟卓炳</span>`
								+`<span class="comment-time">1 个月前</span>`
							+`</div>`
						+`</header>`
						+`<div class="nav-comment-text">`
							+`<p>`
								+`已成交`
								+`<span class="flow">#客户上门</span>`
							+`</p>`
							+`<p>`
								+`<span style="color: rgb(51, 51, 51);">可对比竞品：</span>无`
							+`</p>`
							+`<div class="communicate under-line">`
								+`<span class="status-win" >赢单</span>`
								+`<i class="layui-icon layui-icon-username"></i>`
								+`<span>`
									+`<a href="javascript:void(0)">北京燕博园教育科技有限公司</a>`
								+`</span>`
							+`</div>`
						+`</div>`
						+`<div>`
							+`<div class="nav-comment-children"></div>`
							+`<div class="comment-reply-box flex-between clear-fix ">`
								+`<img src="../../images/user_head.jpg" style="width: 36px; height: 36px; border-radius: 100px;">`
								+`<div class="layui-input-inline">`
									+`<input class="layui-input" name="recodeComment" value="" placeholder="添加回复">`
								+`</div>`
								+`<button class="layui-btn  layui-btn-sm layui-btn-normal btn-bg f-right">发送</button>`
							+`</div>`
						+`</div>`
					+`</div>`; 	
}















-------------------------------------------------------------------------
/*划上去的提示*/
		var timeFloor=null;
		$("#station-all>div").on('mouseenter',function(event) {
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
			clearTimeout(timeFloor);
			layer.closeAll();
		});