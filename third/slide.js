$.fn.slideRight = function(speed, callback) {
	//获取元素position
	var position = this.css('position');
	this.show().css({
		position: 'absolute',
		visibility: 'hidden'
	});
	$('html,body').css({
		overflow: 'hidden',
		height: '100%'
	});
	//获取元素宽度
	var width = this.width() === 0 ? $(window).width() : this.width();

	//-------通过伸缩元素宽度实现动画-------
	//return this.css({
	//    top: $(window).scrollTop(),
	//    width: 0,
	//    position: position,
	//    visibility: 'visible',
	//    overflow: 'auto'
	//}).animate({ width: width }, speed, null, callback);

	//-------通过移动元素相对位置实现动画-------
	return this.css({
		top: $(window).scrollTop(),
		right: -width,
		position: position,
		visibility: 'visible',
		overflow: 'auto',
	}).animate({
		right: '-30px'
	}, speed, null, callback);
};

$.fn.slideLeft = function(speed, callback) {
	//获取元素position
	var position = this.css('position');
	this.show().css({
		position: 'absolute',
		visibility: 'hidden'
	});
	$('html,body').css({
		overflow: '',
		height: ''
	});
	//获取元素宽度
	var width = this.width();
	//-------通过伸缩元素宽度实现动画-------
	//return this.css({
	//    top: 0,
	//    position: position,
	//    visibility: 'visible',
	//    overflow: 'auto'
	//}).animate({ width: 0 }, speed, null, callback);

	//-------通过移动元素相对位置实现动画-------
	return this.css({
		top: 0,
		position: position,
		visibility: 'visible',
		overflow: 'auto'
	}).animate({
		right: -width
	}, speed, null, callback);
};