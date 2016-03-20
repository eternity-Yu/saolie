$(function(){
	var v=function(){
	var e="";
	for(var i=0;i<22;i++){
		for(var j=0;j<22;j++){
			e+='<div class="box"></div>'
		}
	}
	$('.sence').html(e);
	$('.sence div:lt(21)').removeClass('box');
	$('.sence div:gt(460)').removeClass('box');
	$('.sence div:nth-child(22n)').removeClass('box');
	$('.sence div:nth-child(22n+1)').removeClass('box');
	$('.sence div').each(function(i){
		return $(this).data('index',i);
	})
	$('.sence').find('.box').each(function(i){
		if(Math.random()>0.8){
			$(this).data('lei',true);
		}
	}).click(function(){
		if($(this).data('lei')){
			$(this).addClass('lei');
			$('.sence div').addClass(function(i){
				if($('.sence div').eq(i).data('lei')){
					return 'leis';
				}
			});
		}
		else{
			var num=0;
			var cur=$(this).data('index');
			if($('.sence div').eq(cur-1).data('lei')){num+=1;}
			if($('.sence div').eq(cur+1).data('lei')){num+=1;}
			if($('.sence div').eq(cur-22).data('lei')){num+=1;}
			if($('.sence div').eq(cur-23).data('lei')){num+=1;}
			if($('.sence div').eq(cur-21).data('lei')){num+=1;}
			if($('.sence div').eq(cur+22).data('lei')){num+=1;}
			if($('.sence div').eq(cur+23).data('lei')){num+=1;}
			if($('.sence div').eq(cur+21).data('lei')){num+=1;}
			$(this).text(num).addClass('boxs');
		}
	});
	$('.sence').find('.box').mousedown(function(e){
		if(e.which==3){
			$(this).html('<div class="qizi"></div>');
		}
	});
	document.oncontextmenu = function (){
	  return false;
	}

	}
	v();
	$('.again').click(function(){
		var q="";
		$('.sence').html(q);
		v();
	})
})