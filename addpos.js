<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="/js/plugin/layui-v2.3.0/layui/css/layui.css">
	<link rel="stylesheet" href="/css/reset.css">
	<link rel="stylesheet" href="/css/index.css">
	<link rel="stylesheet" href="/css/project_set.css">
	<script src="/js/jquery-2.1.1.min.js"></script>
	<script src="/js/plugin/layui-v2.3.0/layui/layui.js"></script>
	<script src="/js/common.js"></script>
	<style>
		 ::-webkit-scrollbar-thumb {
		  background:#a2a2a2; 
		  border-radius: 10px;
		  height:50%;
		
		::-webkit-scrollbar{width:6px;}
			body{
				overflow-y: scroll;
			} 
	</style>
<script>
	$(document).ready(function() {
		/* $.post("/system/org/dept/selectjson/0",function(res){
			$("#deptid").append("<option value=''></option>");  
			for(var i=0;i<res.length;i++){
				//console.log(res)
				$("#deptid").append("<option value='"+res[i].id+"'>"+res[i].text+"</option>");  
				
			}
	    },"json"); 
		
		
		initFormSelects("userids","/system/org/user/selectjson","");
		initFormSelects("projectProvince","/system/province/selectjson/0_","");
	     */
		initFormSelects("fkProject","/app/projectBuilding/selectjson","");
	});
	
</script>
<style>
.layui-form-label{
	text-align:left
}
.kb-form-container{
	padding-left:20px;
}
.layui-form-item .layui-inline{
	margin-right:0px
}
</style>
</head>
<body style="overflow-y:scroll">
<div class="addemployee-wrap" id="employee-wrap">
<span style="color: rgb(153, 153, 153); font-size: 14px; padding: 35px;">分区是空间中不同位置的区域,如独立的办公室或同一位置的开放工位区</span>
	<div class="kb-form-container" >
		<form class="layui-form" id="defaultForm" th:action="@{/app/projectPartition/save}" th:method="post" lay-filter="employee-form">
			<fieldset class="fieldset">
				<div class="layui-form-item">
				    <label class="layui-form-label"><span class="must-fill">*</span>名称</label>
				    <div class="layui-input-block">
				      	<input type="text" name="partitionName" id="partitionName" required  lay-verify="partitionName" placeholder="" autocomplete="off" class="layui-input">
				    	<span style="color: rgb(153, 153, 153); font-size: 12px; padding: 4px 0px 0px;">可根据位置或者编号进行命名,如南1区,ROOM101</span>
				    </div>
				</div>
				<div class="layui-form-item">
				    <div class="layui-inline">
					    <label class="layui-form-label"><span class="must-fill">*</span>所属大厦</label>
				        <div class="layui-input-inline" style="width: 200px;">
				            <select name="fkProject" id="fkProject" lay-filter="fkProject" lay-verify="fkProject">
						    </select>
				        </div>
				    </div>
				     <div class="layui-inline">
				        <label class="layui-form-label text-r" style="width: 80px;"><span class="must-fill">*</span>所属楼层</label>
				        <div class="layui-input-inline" style="width:200px;">
				            <select name="fkFloor" id="fkFloor" lay-filter="fkFloor" lay-verify="fkFloor">
						    </select>
				        </div>
				     </div>
				</div>
				<div class="layui-form-item">
				    <label class="layui-form-label"><span class="must-fill">*</span>类型</label>
				    <div class="layui-input-block">
				    	<input name="partitionType" lay-verify="partitionType" title="封闭办公室" type="radio" value="2"/>
				      	<input name="partitionType" title="开放办公室" type="radio" value="1" />
			     	 	<input name="partitionType" title="灵活办公室" type="radio" value="0" />
			     	 	<br>
			     	 	<span style="color: rgb(153, 153, 153); font-size: 12px; padding: 4px 0px 0px;">有多个合同的分区不能更改为封闭分区</span>
				    </div>
				</div>
				<div class="layui-form-item">
				    <label class="layui-form-label"><span class="must-fill">*</span>容纳人数</label>
				    <div class="layui-input-block">
				      	<input type="text" name="partitionNumber" id="partitionNumber" required  lay-verify="partitionNumber" placeholder="" autocomplete="off" class="layui-input">
				    </div>
				</div>
				<div class="layui-form-item">
				    <label class="layui-form-label"><span class="must-fill">*</span>面积</label>
				    <div class="layui-input-block">
				      	<input type="text" name="area" id="area" required lay-verify="area" placeholder="" autocomplete="off" class="layui-input">
				    </div>
				</div>
				<div class="layui-form-item">
				    <div class="layui-inline">
					    <label class="layui-form-label">价格</label>
				        <div class="layui-input-inline" style="width: 200px;">
				            <input autocomplete="off" class="layui-input" name="price" placeholder="" type="tel" />
				        </div>
				    </div>
				    <div class="layui-inline">
				        <label class="layui-form-label text-r" style="width: 80px;">非入驻价格</label>
				        <div class="layui-input-inline" style="width:200px;">
				            <input autocomplete="off" class="layui-input" name="wrongPrice" placeholder="" type="tel" />
				        </div>
				    </div>
				</div>
				<div class="layui-form-item">
				    <label class="layui-form-label">朝向</label>
				    <div class="layui-input-block">
				      	<input name="orientation" title="东" type="radio" value="3"/>
				      	<input name="orientation" title="西" type="radio" value="2" />
			     	 	<input name="orientation" title="南" type="radio" value="1" />
			     	 	<input name="orientation" title="北" type="radio" value="0" />
				    </div>
				</div>
				<div class="layui-form-item">
				    <label class="layui-form-label">硬件设备</label>
				    <div class="layui-input-block">
				      	<input name="lock" title="有锁" lay-skin="primary" type="checkbox" value="1" />
				      	<input name="wall" title="靠墙" lay-skin="primary" type="checkbox" value="1" />
				    </div>
				</div>
				<div class="layui-form-item">
				    <div class="layui-inline">
					    <label class="layui-form-label">使用率</label>
				        <div class="layui-input-inline" style="width: 200px;">
				            <input autocomplete="off" class="layui-input" name="usageRate" placeholder="" type="tel" />
				            <span style="color: rgb(153, 153, 153); font-size: 12px; padding: 4px 0px 0px;">总物理面积比率</span>
				        </div>
				    </div>
				     <div class="layui-inline">
				        <label class="layui-form-label text-r" style="width: 80px;">签约得房率</label>
				        <div class="layui-input-inline" style="width:200px;">
				            <input autocomplete="off" class="layui-input" name="contractRoomRate" placeholder="" type="tel" />
				            <span style="color: rgb(153, 153, 153); font-size: 12px; padding: 4px 0px 0px;">可出租面积比率</span>
				        </div>
				     </div>
				</div>
				<div class="layui-form-item">
				    <label class="layui-form-label">工位前缀</label>
				    <div class="layui-input-block">
				      	<input autocomplete="off" class="layui-input" name="deskPrefix" placeholder="" type="tel" />
				    </div>
				</div>
				<div class="layui-form-item">
				    <div class="layui-inline">
					    <label class="layui-form-label">工位号</label>
				        <div class="layui-input-inline" style="width: 200px;">
				            <input autocomplete="off" class="layui-input" name="capacity" placeholder="" type="tel" />
				            <span style="color: rgb(153, 153, 153); font-size: 12px; padding: 4px 0px 0px;">工位号只能是数字或区间,如8,15-20</span>
				        </div>
				    </div>
				     <div class="layui-inline">
					        <span class="layui-btn layui-btn-normal btn-bg certain-btn">生成</span>&nbsp;&nbsp;
					        <a class="" onclick="closeLayer()">自动添加工位号</a>
				     </div>
				</div>
				<div class="layui-form-item" style="padding-left: 110px;">
					<span class="layui-btn layui-btn-radius layui-btn-danger mag-bot-20 clear-criteria hide" style="width: 150px;"><i class="layui-icon">&#x1006;</i> 删除全部工位</span>
				    <div class="desks-block">
				    	 <!-- <div><span>22222</span><i class="layui-icon">&#x1006;</i></div>  -->
				    </div>    
				</div>
			</fieldset>
			<fieldset class="fieldset">	
				<div class="layui-form-item" style="">
				    <div class="layui-input-block">
				      <button class="layui-btn layui-btn-normal btn-bg" lay-submit lay-filter="formEmployee" id="submit-btn">提交</button>
				      <a class="layui-btn layui-btn-primary" onclick="closeLayer()">取消</a>
				    </div>
				</div>
			</fieldset>
		</form>	
	</div>
</div>
</body>
<script>
$(function(){
	layui.config({
	        base: '/js/plugin/layui-v2.3.0/layui/' //此处路径请自行处理, 可以使用绝对路径
	    }).extend({
	        formSelects: 'formSelects-v3'
	    }).use(['element',"layer","form",'formSelects'], function(){
			var layer=layui.layer,form = layui.form,formSelects = layui.formSelects;
			form.on('select(fkProject)', function(data){
				initFormSelects("fkFloor","/app/projectFloor/selectjson/"+data.value,"");
			});
			 
			form.verify({
				partitionName: function(value, item){ //value：表单的值、item：表单的DOM对象
		      	  if(value==""){
			       	  return '名称不能为空';
			      }
			  }
				,fkProject: function(value, item){ //value：表单的值、item：表单的DOM对象
		      	  if(value==""){
			       	  return '大厦不能为空';
			      }
			  }
				,fkFloor: function(value, item){ //value：表单的值、item：表单的DOM对象
		      	  if(value==""){
			       	  return '楼层不能为空';
			      }
			  }
			  ,partitionType: function(value, item){ 
				  var val=$('input:radio[name="partitionType"]:checked').val();
		      	  if(val==null){
			       	  return '类型不能为空';
			      }
			  }
			  ,partitionNumber: function(value, item){ //value：表单的值、item：表单的DOM对象
			    if(value==""){
			    	return '人数不能为空';
			    }
			  }
			  ,area: function(value, item){ //value：表单的值、item：表单的DOM对象
			     if(value==""){
			     	return '面积不能为空';
			     }else if(!new RegExp("^\\d+(\\.\\d+)?$").test(value)){
				      return '面积不能有特殊字符';
				    }
			  }
			  
			}); 
			//监听提交
			  form.on('submit(formEmployee)', function(data){
				  $.post($("#defaultForm").attr('action'), data.field, function(result) {
						window.parent.layer.msg(result.msg);
						closeLayer();
					}, 'json');
					return false;
			  });
			
		});
	//手动生成工位号
	var res=[];//存储工位内容；
	$('.certain-btn').on("click",function(){
		var deskPrefix=$("input[name='deskPrefix']").val()+'';//工位前缀
		var capacity=$("input[name='capacity']").val();//工位内容
		var reg=/^[0-9,-]/;
		if(reg.test(capacity)){
			console.log(res,'99999999999')
			if(capacity.split(',').length>1){
				var arr=capacity.split(',');
				for(var i=0;i<arr.length;i++){
					if(arr[i]!=''){
						/* if(res.indexOf(deskPrefix+parseInt(arr[i]))==-1){
							res.push(deskPrefix+parseInt(arr[i]));
						}else{
							layer.msg('工位不能重复');
							$("input[name='capacity']").val('')
							return false;
						} */
						console.log('oooooooo',parseInt(arr[i]))
						cleaRepeat(deskPrefix+parseInt(arr[i]))
					}
				}
				console.log('oooooooo',arr)
			}else if(capacity.split('-').length>1){
					var arr=capacity.split('-');
					if(parseInt(arr[0])-parseInt(arr[1])>0){
						$("input[name='capacity']").val('')
					}else if(arr[0]==''&&arr[1]!=''){
						//res.push(-arr[1])
						/* if(res.indexOf(deskPrefix+(-arr[1]))==-1){
							res.push(deskPrefix+(-arr[1]));
						}else{
							layer.msg('工位不能重复');
							$("input[name='capacity']").val('')
							return false;
						} */
						cleaRepeat(deskPrefix+(-arr[1]))
					}else if(arr[1]==''){
						$("input[name='capacity']").val('')
					}else{
						for(var j=parseInt(arr[0]);j<=parseInt(arr[1]);j++){
							console.log(parseInt(arr[0]),parseInt(arr[1]),0)
							//res.push(j)
							if(res.indexOf(deskPrefix+j)==-1){
								res.push(deskPrefix+j);
							}else{
								layer.msg('工位不能重复');
								$("input[name='capacity']").val('')
								return false;
							} 
						}
					}
					console.log(arr,'k')
			}else{
				console.log('kkkkkkk')
				//res.push(parseInt(capacity))
				/* if(res.indexOf(deskPrefix+parseInt(capacity))==-1){
					res.push(deskPrefix+parseInt(capacity));
				}else{
					layer.msg('工位不能重复');
					$("input[name='capacity']").val('')
					return false;
				} */
				cleaRepeat(deskPrefix+parseInt(capacity))
			}
		}else{
			$("input[name='capacity']").val('')
		}
		
		if(res.length>0){//清空工位是否显示
			$('.clear-criteria').addClass("show").removeClass("hide");
		}else{
			$('.clear-criteria').addClass("hide").removeClass("show");
		}
		rendfn(res);
		$("input[name='capacity']").val('');//生成工位后的，input内容清空；
	})
	//点击删除全部工位
	$('.clear-criteria').on('click',function(){
		$('.desks-block').html('');
		res=[];
	})
	//每个工位的单独删除
	$('.desks-block').on("click",'.del-icon',function(){
		var txt=$(this).prev('span').text();
		var index=delfn(res,txt);
		console.log($(this),txt,index,'p')
		if(index!=-1){
			res.splice(index,1);
		}
		rendfn(res);
	})
	
	//去重工位内容，不能重复
	function cleaRepeat(cont){
		if(res.indexOf(cont)==-1){
			res.push(cont);
		}else{
			layer.msg('工位不能重复');
			$("input[name='capacity']").val('')
			return false;
		}
	}
	//删除指定工位
	function delfn(res,cont){
		var index=-1;
		for(var i=0;i<res.length;i++){
			if(res[i]==cont){
				index=i;
			}
		}
		return index;
	}
	//渲染工位
	function rendfn(res){
		var deskstr="";
		for(var i=0;i<res.length;i++){//渲染工位
			deskstr+='<div><span>'+res[i]+'</span><i class="layui-icon del-icon">&#x1006;</i></div>';
		}
		$('.desks-block').html(deskstr);
	}
})
</script>
</html>