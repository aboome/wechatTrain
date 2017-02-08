/*按键反馈色*/
$('.yh-btn').on('touchstart', function() {
	$(this).css({
		'background-color': '#10629B',
		'color': '#fff'
	});
});
$('.yh-btn').on('touchend', function() {
	$(this).css('background-color', '#1479BF');
});

/*切换课程分类*/
$('.yh-navbar').on('tap', function() {
	$(this).addClass('yh-navbar-on').siblings('.yh-navbar-on').removeClass('yh-navbar-on');

	var dataId = $(this).attr('data-id');
	if(dataId == 'profession') {
		$('#profession-content').removeClass('none');
		$('#common-content').addClass('none');
	} else if(dataId == 'common') {
		$('#common-content').removeClass('none');
		$('#profession-content').addClass('none');
	}

});

/*专业切换*/
function toggleContent(t) {
	var $id = $(t).attr('id');
	$('.lesson-content').addClass('none');
	$('#' + $id + '-content').removeClass('none');
}

/*搜索框*/
$('#searchBtn').on('tap', function() {
	$('.yh-search-control').fadeIn(200);
});
$('#searchCancel').on('tap', function() {
	$('.yh-search-control').fadeOut(200);
});

/*
 * 00  --线上培训/线下培训 
 * 
 * 01  --线上直播
 * 
 * 02  --线下培训 
 * 
 * 03  --点播 
 * 
 * 000 --重要
 * 
 * 001 --不重要
 * */

/*报名弹出层*/
$('.yh-btn').on('tap', function() {
	var isImportant = $(this).parents('.weui-media-box_appmsg').attr('data-value');
	var dataType = $(this).attr('data-type');
	
	if(isImportant == '000'){
		if(dataType == '00') {
			/*$('.lessonWay').removeAttr('checked');*/
			$('#online').attr('checked', true);
			$('#enrollDialog1').fadeIn(200);
			$('.lineShow').hide();
		} else if(dataType == '01') {
			$('#enrollDialog2').fadeIn(200);
		} else if(dataType == '02') {
			$('#enrollDialog3').fadeIn(200);
		}
	} else if(isImportant == '001'){
		if(dataType == '00') {
			/*$('.lessonWay').removeAttr('checked');*/
			$('#online-1').attr('checked', true);
			$('#enrollDialog4').fadeIn(200);
			$('.lineShow').hide();
		} else if(dataType == '01') {
			$('#enrollDialog5').fadeIn(200);
		} else if(dataType == '02') {
			$('#enrollDialog6').fadeIn(200);
		}
	}
	
});

$('.weui-dialog__btn').on('tap', function() {
	$(this).parents('.js_dialog').fadeOut(200);
});

$('.lesson-details').on('tap', function(){
	var t = $(this).parents('.lesson-panel').find('.weui-media-box__title').text();
	window.location.href = "details.html?" + t;
});
