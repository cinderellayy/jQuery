//content-left
$(function() {
	// body...
	//content_left
	$(".m-expanded").click(function() {
		// body...
		var $ul = $(this).children("span").siblings();
		if ($ul.is(":visible")) {
			$ul.hide(600);
		} else {
			$ul.show(600);
		}
	})

})
//中间上下切换效果
function showImg (index) {
	// body...
	var $height=$(".content_right .ad").height();
	$(".slider").stop(true, false).animate({
		top: -$height*index},
		1000);
	$(".num li").removeClass('on').eq(index).addClass('on');

}
$(function() {
	// body...
	var len=$(".num > li").length;
	var index=0;
	var adTimer;
	$(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	
	 //滑入 停止动画，滑出开始动画.
	 $('.ad').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
})
// 最新动态展示
$(function  () {
	// body...
	 var $this = $(".scrollNews");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");

})
function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}
// 图片轮播
$(function() {
	// body...
	var page = 1,
		i = 3;
	$("span.next").click(function() {
		/* Act on the event */
		var $parent = $(this).parents('div.v_show'),
			$v_content = $parent.find("div.v_content"),
			$v_show = $parent.find('div.v_content_list'),
			v_width = $v_content.width(),
			v_len = $v_show.find('li').length,
			count = Math.ceil(v_len / i);
		if (!$v_show.is(':animated')) {
			if (page == count) {
				$v_show.animate({
					left: '0px'
				}, "slow");
				page = 1;
			} else {
				$v_show.animate({
					left: '-=' + v_width

				}, "slow");
				page++;
			}

		}
	});

	$("span.prev").click(function() {
		/* Act on the event */
		var $parent=$(this).parents('div.v_show'),
		    $v_content=$parent.find('div.v_content'),
		    $v_show=$parent.find('div.v_content_list'),
		     v_width=$v_content.width(),
		     v_len=$v_show.find('li').length,
		     count=Math.ceil(v_len/i);
		if(!$v_show.is(':animated')){
			if(page==1){
				$v_show.animate({left:'-='+v_width*(count-1)}, "slow");
				page=count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
	});

})
