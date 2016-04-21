$(document).ready(function() {

   $(function() {
       $("#calc .js-calc-save").click(function() {
           $("#calc form").removeClass("js-calc-two");
           $("#calc form").addClass("js-calc-one");
        });
    });
        
    $(function() {
        $("#calc .js-calc-order").click(function() {
            $("#calc form").removeClass("js-calc-one"); 
            $("#calc form").addClass("js-calc-two");
        });
    });
                                        
    $(function(){
        $(document).on('change', 'select[name=texture]', function(){
            displayVals($(this));
        });
        
        $(document).on('change', 'input[name=color]', function(){
            calcUsage($(this));
        });
        
        $(document).on('change', 'input[name=country]', function(){
            calcUsage($(this));
        });
        
        $(document).on('keyup', 'input[name=square]', function(){
            calcUsage($(this));
        });
        
        $(document).on('keyup', 'input[name=corner]', function(){
            calcUsage($(this));
        });
        
        $(document).on('keyup', 'input[name=light]', function(){
            calcUsage($(this));
        });
    }); 

    function displayVals(ele) { // get option value
        calcUsage(ele);
        var singleValues = ele.val();
    }
    
    function calcUsage(ele) {
        var a = ele.parent().parent().find('.texture').val();
            b = ele.parent().parent().find('.square').val();
            c = ele.parent().parent().find('.corner').val();
            d = ele.parent().parent().find('.light').val();
            e = ele.parent().parent().find('input[name=color]:checked');
            i = ele.parent().parent().find('input[name=country]:checked');
            corner = 100;
            light = 500;
            ee = 300;
            ii = 99;
            wch = 499;
            weu = 599;
            wru = 399;
            cch = 449;
            ceu = 649;
            cru = 399;
        $cba = ele.parent().parent().find('select[name=texture]'),
        $cbb = ele.parent().parent().find('input[name=square]'),
        $cbc = ele.parent().parent().find('input[name=corner]'),
        $cbd = ele.parent().parent().find('input[name=light]'),
        $cbe = ele.parent().parent().find('input[name=color]:checked'),
        $cbi = ele.parent().parent().find('input[name=country]:checked'),
        $cba.each(function() {
            if(this.checked) aa = (parseFloat(a) || 0);
        });
        $cbb.each(function() {
            if($(this)) bb = (parseFloat(b) || 0);
        });
        $cbc.each(function() {
            if($(this)) cc = (parseFloat(c) || 0);
        });
        $cbd.each(function() {
            if($(this)) dd = (parseFloat(d) || 0);
        });
        $cbe.each(function() {
            if($(this).val() == 'Белый') ee = 300; else if($(this).val() == 'Цветной') ee = 350;
        });
        $cbi.each(function() {
            if($(this).val() == 'Китай') ii = 199; else if($(this).val() == 'Европа') ii = 299; else if($(this).val() == 'Россия')  ii = 99;
        });
        $("#total_price").html(bb*(ee+ii)+cc*corner+dd*light); // display total
    }   
    
    $("#photo").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
    
    $(".slide-text-mob").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
    
    $('.p_gal_head').fotorama({
        allowfullscreen: true,
        nav: 'thumbs'
    });
      
    $('.p_gal').fotorama({
        allowfullscreen: true,
        nav: 'thumbs'
    });
    
    $('.otz').fotorama({
        width: '100',
        height: '100',
        allowfullscreen: false,
        nav: false,
        arrows: 'always'
    });
    
    $('.gallery').fotorama({
        allowfullscreen: true,
        nav: 'thumbs',
        arrows: 'always',
        click: false,
        swipe: false
    });
    
    var boxen = [];

    $("a[class^=fancybox]").each(function() {
        if ($.inArray($(this).attr('class'),boxen)) boxen.push($(this).attr('class'));
    });
        
    $(boxen).each(function(i,val) { 
        $('a[class='+val+']').attr('rel',val).fancybox({ 
            padding : 0 
        }); 
    });

    function hasPlaceholderSupport() {
        var input = document.createElement('input');
        return ('placeholder' in input);
    }
    var isCallback =  false,
        isOrder = false,
        ert = {};
    $('.js-form').eq(1).find('input').each(function () {
        var el = $(this);
        ert[el.attr('name')] = {
            el: el,
            val: el.val()
        };
    });
    
    $('.js-mob-btn').on('click', function (e) {
        e.preventDefault();
        $.fancybox($('#overlay_form_mob_call').html());
        $('.phone').mask('+79999999999');
        
        if (!hasPlaceholderSupport()) {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() === '' || input.val() === input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        }
        
        $('.js-form').submit(function () {
            $(this).find('input').each(function () {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            });
        });
        
    });
 
    $('.js-btn-call').on('click', function (e) {
        e.preventDefault();
        $.fancybox($('#overlay_form_call').html());
        $('.phone').mask('+79999999999');
        
        if (!hasPlaceholderSupport()) {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() === '' || input.val() === input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        }
        
        $('.js-form').submit(function () {
            $(this).find('input').each(function () {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            });
        });
        
    });
    
    $('.js-btn-order').on('click', function (e) {
        e.preventDefault();
        $.fancybox($('#overlay_form_order').html());
        $('.phone').mask('+79999999999');
        
        if (!hasPlaceholderSupport()) {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() === '' || input.val() === input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        }
        
        $('.js-form').submit(function () {
            $(this).find('input').each(function () {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            });
        });
        
    });
    
    $('.js-btn-sale').on('click', function (e) {
        e.preventDefault();
        $.fancybox($('#overlay_form_sale').html());
        $('.phone').mask('+79999999999');
        
        if (!hasPlaceholderSupport()) {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() === '' || input.val() === input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        }
        
        $('.js-form').submit(function () {
            $(this).find('input').each(function () {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            });
        });
        
    });
    
    $('.js-calc-save').on('click', function (e) {
        e.preventDefault();
        $.fancybox($('#overlay_calc_save').html());
        $('.phone').mask('+79999999999');
        
        if (!hasPlaceholderSupport()) {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() === '' || input.val() === input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        }
        
        $('.js-form-calc-save').submit(function () {
            $(this).find('input').each(function () {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            });
        });
        
    });
    
    $('.js-calc-order').on('click', function (e) {
        e.preventDefault();
        $.fancybox($('#overlay_calc_order').html());
        $('.phone').mask('+79999999999');
        
        if (!hasPlaceholderSupport()) {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() === '' || input.val() === input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        }
        
        $('.js-form-calc-order').submit(function () {
            $(this).find('input').each(function () {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            });
        });
        
    });
    
    $('body').on('submit', '.js-form', function (e) {
        var form = $(this),
            inputs = form.find('input'),
            fio = form.find('input.name'),
            el = {},
            data = {},
            errorClass = 'error',
            i;
        e.preventDefault();
        inputs.each(function () {
            var element = $(this);
            if (element.attr('type') !== 'submit' || element.attr('type') !== 'button') {
                el[element.attr('data-id')] = element;
                data[element.attr('data-id')] = element.val();
            }
        });
        for (i in el) {
            if (el[i].hasClass(errorClass)) el[i].removeClass(errorClass);
        }
        if (validation(form, errorClass)) return false;
        data.callback = isCallback;
        data.order = isOrder;
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            cache: false,
            data: data,
            complete: function (xhr, response) {
                isCallback = isOrder = false;
                if ('success') {
                    $.fancybox('<div class="result"><h3>Спасибо, ' + fio.val() + ' за Ваше обращение!</h3><p>Наш консультант свяжется с Вами в ближайшее время.</p></div>', {
                        autoSize: true,
                        autoHeight: true,
                        autoWidth: true,
                        autoResize: true
                    });
                    
                } else {
                    $.fancybox('<div class="result err"><h3>Упс!</h3><p>Произошла ошибка, попробуйте еще раз.</p></div>', {
                        autoSize: true,
                        autoHeight: true,
                        autoWidth: true,
                        autoResize: true
                    });
                }
            }
        });
        return false;
    });
    
    $('body').on('submit', '.js-form-calc-save', function (e) {
        var form = $(this),
            calc = $('.js-calc-one'),
            inputs = form.find('input[type="text"]'),
            inputc = calc.find('input[type="text"], input[type="radio"]:checked, select[name="texture"]'),
            price = $('.js-calc-one').find("#total_price"),
            el = {},
            data = {},
            errorClass = 'error',
            i;
        e.preventDefault();
        inputs.each(function () {
            var element = $(this);
            if (element.attr('type') !== 'submit' || element.attr('type') !== 'button') {
                el[element.attr('data-id')] = element;
                data[element.attr('data-id')] = element.val();
            }
        });
        inputc.each(function () {
            var element = $(this);
            if (element.attr('type') !== 'submit' || element.attr('type') !== 'button') {
                el[element.attr('data-id')] = element;
                data[element.attr('data-id')] = element.val();
            }
        });
        price.each(function () {
            var element = $(this);
            if (element.attr('type') !== 'submit' || element.attr('type') !== 'button') {
                el[element.attr('data-id')] = element;
                data[element.attr('data-id')] = element.html();
            }
        });
        for (i in el) {
            if (el[i].hasClass(errorClass)) el[i].removeClass(errorClass);
        }
        if (validation(form, errorClass)) return false;
        data.callback = isCallback;
        data.order = isOrder;
        $.ajax({
            url: 'calc_save.php',
            type: 'POST',
            cache: false,
            data: data,
            complete: function (xhr, response) {
                isCallback = isOrder = false;
                if ('success') {
                    $("#savediv").slideToggle('slow');
                    $.fancybox('<div class="result"><h3>Расчет успешно отправлен!</h3><p>Спасибо что воспользовались нашим сервисом.</p></div>', {
                        autoSize: true,
                        autoHeight: true,
                        autoWidth: true,
                        autoResize: true
                    });
                    
                } else {
                    $.fancybox('<div class="result err"><h3>Упс!</h3><p>Произошла ошибка, попробуйте еще раз.</p></div>', {
                        autoSize: true,
                        autoHeight: true,
                        autoWidth: true,
                        autoResize: true
                    });
                }
            }
        });
        return false;
    });
    
    $('body').on('submit', '.js-form-calc-order', function (e) {
        var form = $(this),
            calc = $('.js-calc-two'),
            inputs = form.find('input[type="text"]'),
            inputc = calc.find('input[type="text"], input[type="radio"]:checked, select[name="texture"]'),
            fio = form.find('input.name'),
            price = $('.js-calc-two').find("#total_price"),
            el = {},
            data = {},
            errorClass = 'error',
            i;
        e.preventDefault();
        inputs.each(function () {
            var element = $(this);
            if (element.attr('type') !== 'submit' || element.attr('type') !== 'button') {
                el[element.attr('data-id')] = element;
                data[element.attr('data-id')] = element.val();
            }
        });
        inputc.each(function () {
            var element = $(this);
            if (element.attr('type') !== 'submit' || element.attr('type') !== 'button') {
                el[element.attr('data-id')] = element;
                data[element.attr('data-id')] = element.val();
            }
        });
        price.each(function () {
            var element = $(this);
            if (element.attr('type') !== 'submit' || element.attr('type') !== 'button') {
                el[element.attr('data-id')] = element;
                data[element.attr('data-id')] = element.html();
            }
        });
        for (i in el) {
            if (el[i].hasClass(errorClass)) el[i].removeClass(errorClass);
        }
        if (validation(form, errorClass)) return false;
        data.callback = isCallback;
        data.order = isOrder;
        $.ajax({
            url: 'calc_order.php',
            type: 'POST',
            cache: false,
            data: data,
            complete: function (xhr, response) {
                isCallback = isOrder = false;
                if ('success') {
                    $("#orderdiv").slideToggle('slow');
                    $.fancybox('<div class="result"><h3>Спасибо, ' + fio.val() + ' за Ваше обращение!</h3><p>Наш консультант свяжется с Вами в ближайшее время.</p></div>', {
                        autoSize: true,
                        autoHeight: true,
                        autoWidth: true,
                        autoResize: true
                    });
                    
                } else {
                    $.fancybox('<div class="result err"><h3>Упс!</h3><p>Произошла ошибка, попробуйте еще раз.</p></div>', {
                        autoSize: true,
                        autoHeight: true,
                        autoWidth: true,
                        autoResize: true
                    });
                }
            }
        });
        return false;
    });
    
    function validation (element, errorClass) {
        
        var input = element.find('input[type="text"]'),
            spaces = new RegExp(/^(\s|\u00A0)+|(\s|\u00A0)+$/g),
            isNecessatily,
            isError = false;
        input.on('focus', function () {
            var el = $(this);
            if (el.hasClass(errorClass)) el.removeClass(errorClass);
        });
        input.each(function () {
            var el = $(this);
            if (el.attr('data-necessarily') === 'true' && el.val().replace(spaces, '') === '') {
                el.addClass(errorClass);
                isError = true;
            }
            if (el.attr('data-id') === 'name' && el.val().substr(10)) {
                el.addClass(errorClass);
                isError = true;
            }
            if (el.attr('data-id') === 'email' && el.val().match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) === null) {
                el.addClass(errorClass);
                isError = true;
            }
        });
        return isError;
    }
    
    $('.phone').mask('+79999999999');

    if (!hasPlaceholderSupport()) {
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() === '' || input.val() === input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    }
    
    $('.js-form').submit(function () {
        $(this).find('input').each(function () {
            if ($(this).val() == $(this).attr('placeholder')) {
                $(this).val('');
            }
        });
    });
    
});