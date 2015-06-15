/*滑过图片出现放大镜效果*/
// $(function(){
//        $(".last .v_show ul li").each(function(index){
// 			  var position = $(this).position();
// 			  var li_left = position.left;
// 			  var li_top = position.top;
// 			  var img_width = $(this).find("img").width();
// 			  var img_height = $(this).find("img").height();
//               var spanHtml = '<span style="position: absolute;  width:'+img_width+'px; height: '+img_height+'px; cursor: pointer;" class="imageMask"></span>';
// 			  $(spanHtml).hover(function(){
// 						$(this).addClass("imageOver");
// 				    },function(){
// 						$(this).removeClass("imageOver");
// 				 }).appendTo( $(this).find("a") );
// 		 })
// })
$(function  () {
	// body...
	 $(".last .v_show ul li").each(function(index){
			  var img = $(this).find("img");
			  // var li_left = position.left;
			  // var li_top = position.top;
			  var img_width =img.width();
			  var img_height = img.height();
              var spanHtml = '<span style="position: absolute; top:0;  left:'+(img_width*index+47*index)+'px; width:'+img_width+'px; height: '+img_height+'px; cursor: pointer;" class="imageMask"></span>';
			  $(spanHtml).hover(function(){
						$(this).addClass("imageOver");
				    },function(){
						$(this).removeClass("imageOver");
				 }).appendTo( $(this).find("a") );
		 })

})