// JavaScript Document
function zanzhu(){
	var a=confirm("您真的要赞助吗？");
	if(a==true){
		var b=confirm("您考虑好了吗？");
		if(b==true){
			var c=confirm("请您再考虑一下吧！");
			if(c==true){
				alert("谢谢您的好意！");
				window.open("zanzhubiao.html");
			}
		}
	}
}
