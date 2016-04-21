var pricemin=1000000;
var pricemax=0;

$(function(){
	$("#slider").ionRangeSlider({
		min: 5,
		max: 50,
		from: 15,
		hide_from_to: true,
		onChange: function (data) {
			$.cookie('user_sq', data['from'], { expires: 1, path:'/' } );
			$('.slide_price .loading').fadeIn(100);
			$('.var_m2t').html(data['from']);
		},
		onFinish: function (data) {
			count(data);
		},
		onStart: function (data) {
			count(data);
		},
		onUpdate: function (data) {
			$('.var_m2t').html(data['from']);
			$.cookie('user_sq', data['from'], { expires: 1, path:'/' } );
			count(data);
		},
	});
	if($.cookie('user_sq')) {
		var slider = $("#slider").data("ionRangeSlider");
		slider.update({
			from: $.cookie('user_sq'),
		});
	};

	$('.slide_hdr b').inlineEdit('.var_m2t');
});

function calc(el, per, m2){
	el.addClass('appear');
	pr1 = parseInt(el.data('m2'))*m2 + parseInt(el.data('p')) * per;
	pr2 = parseInt(el.data('m2d'))*m2 + parseInt(el.data('pd')) * per;
	if (pr1!=pr2) {el.find('.priced').show();el.find('.pricen').hide();}
	if (pr2<window.pricemin) window.pricemin = pr2;
	if (pr2>window.pricemax) window.pricemax = pr2;
	el.find('.pr1').html(pr1);
	el.find('.pr2').html(pr2);
	setTimeout(function(){
		el.removeClass('appear');
		}, 1000);

}

function count(data){
	$('.slide_price .loading').fadeIn(100);

	
	per = Math.ceil(10*Math.sqrt(data['from']/6));
	$('.var_per').html(per);
	window.pricemin = 1000000;
	window.pricemax = 0;
	$('.calc_items .item').each(function(){calc( $(this), per, data['from']);});

	setTimeout(function(){
		$('.var_m2').html(data['from']);
		$('.slide_price .loading').fadeOut(100);
		$('input.inline').val(data['from']);
		$('.slide_price .submit').addClass('active');
		$('.slide_price .pricemin').html(window.pricemin);
		$('.slide_price .pricemax').html(window.pricemax);
	}, 600);
}

$.fn.inlineEdit = function(el) {

	replaceWith = $('<input name="temp" type="text" class="inline" />')

	
	$(this).click(function() {

		var elem = $(el);
		
		elem.hide();
		elem.after(replaceWith);
		replaceWith.focus();
		replaceWith.mask("?99",{autoclear: false})

		replaceWith.keyup(function(e) {
			if (e.which == 13)
				$(this).blur();
		});

		replaceWith.blur(function() {

			if (($(this).val() != $.cookie('user_sq')) && ($(this).val() != "")) {
				var slider = $("#slider").data("ionRangeSlider");
				if ($(this).val() > 50) $(this).val(50);
				slider.update({
					from: $(this).val(),
				});
			}

			$(this).remove();
			elem.show();
		});
	});
};

