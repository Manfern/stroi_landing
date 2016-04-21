$(document).ready(function() {
    
    ymaps.ready(init);

    function init (){
        var phone_spb = '8 (812) 322 47 25';
        var phone_msk = '8 (495) 989 90 01';
        
        var map = new ymaps.Map('map', {
			center: [59.936636,30.306631],
			zoom: 11,
			controls: ['smallMapDefaultSet']
		});
		
        var map2 = new ymaps.Map('map2', {
			center: [55.751353,37.620507],
			zoom: 11,
			controls: ['smallMapDefaultSet']
		});
		
		var point = new ymaps.Placemark(
			[59.971799,30.259414], {
			balloonContent: '<strong>м. Крестовский остров</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point);
		
		var point2 = new ymaps.Placemark(
			[60.016729,30.315693], {
			balloonContent: '<strong>м. Удельная</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point2);
		
		var point3 = new ymaps.Placemark(
			[59.935261,30.327007], {balloonContent: '<strong>м. Невский проспект</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />'},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point3);
		
		var point4 = new ymaps.Placemark(
			[59.891492,30.317855], {
			balloonContent: '<strong>м. Московские ворота</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point4);
		
		var point5 = new ymaps.Placemark(
			[59.833139,30.349345], {
			balloonContent: '<strong>м. Звездная</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point5);
		
		var point6 = new ymaps.Placemark(
			[59.895992,30.357665], {
			balloonContent: '<strong>м. Волковская</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point6);
		
		var point7 = new ymaps.Placemark(
			[59.901169,30.274833], {
			balloonContent: '<strong>м. Нарвская</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point7);
		
		var point8 = new ymaps.Placemark(
			[59.842087,30.250588], {
			balloonContent: '<strong>м. Проспект ветеранов</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point8);
		
		var point9 = new ymaps.Placemark(
			[60.012842,30.395856], {
			balloonContent: '<strong>м. Академическая</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point9);
		
		var point10 = new ymaps.Placemark(
			[59.970992,30.347290], {
			balloonContent: '<strong>м. Выборгская</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point10);
		
		var point11 = new ymaps.Placemark(
			[59.924245,30.385176], {
			balloonContent: '<strong>м. пл. Александра Невского</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point11);
		
		var point12 = new ymaps.Placemark(
			[59.865144,30.470240], {
			balloonContent: '<strong>м. Пролетарская</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point12);
		
		var point13 = new ymaps.Placemark(
			[59.907374,30.483338], {
			balloonContent: '<strong>м. ул. Дыбенко</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point13);
		
		var point14 = new ymaps.Placemark(
			[60.066986,30.334048], {
			balloonContent: '<strong>м. Парнас</strong><br />телефон: '+phone_spb+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map.geoObjects.add(point14);
		
		var point200 = new ymaps.Placemark(
			[55.766369,37.603055], {
			balloonContent: '<strong>м. Пушкинская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point200);
		
		var point201 = new ymaps.Placemark(
			[55.777044,37.585293], {
			balloonContent: '<strong>м. Белорусская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point201);
		
		var point202 = new ymaps.Placemark(
			[55.805893,37.514181], {
			balloonContent: '<strong>м. Сокол</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point202);
		
		var point203 = new ymaps.Placemark(
			[55.855447,37.476463], {balloonContent: '<strong>м. Речной вокзал</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />'},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point203);
		
		var point204 = new ymaps.Placemark(
			[55.826674,37.436403], {
			balloonContent: '<strong>м. Тушинская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point204);
		
		var point205 = new ymaps.Placemark(
			[55.757245,37.408957], {
			balloonContent: '<strong>м. Крылатское</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point205);
		
		var point206 = new ymaps.Placemark(
			[55.736168,37.466233], {
			balloonContent: '<strong>м. Пионерская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point206);
		
		var point207 = new ymaps.Placemark(
			[55.663097,37.481578], {
			balloonContent: '<strong>м. Юго-Западная</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point207);
		
		var point208 = new ymaps.Placemark(
			[55.692731,37.533817], {
			balloonContent: '<strong>м. Университет</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point208);
		
		var point209 = new ymaps.Placemark(
			[55.684645,37.625170], {
			balloonContent: '<strong>м. Нагатинская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point209);
		
		var point210 = new ymaps.Placemark(
			[55.709677,37.624331], {
			balloonContent: '<strong>м. Тульская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point210);
		
		var point211 = new ymaps.Placemark(
			[55.739330,37.546279], {
			balloonContent: '<strong>м. Студенческая</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point211);
		
		var point212 = new ymaps.Placemark(
			[55.611337,37.600681], {
			balloonContent: '<strong>м. Пражская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point212);
		
		var point213 = new ymaps.Placemark(
			[55.651730,37.599683], {
			balloonContent: '<strong>м. ул. Севастопольская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point213);
		
		var point214 = new ymaps.Placemark(
			[55.672600,37.861103], {
			balloonContent: '<strong>м. Котельники</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point214);
		
		var point215 = new ymaps.Placemark(
			[55.706339,37.763270], {
			balloonContent: '<strong>м. Кузьминки</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point215);
		
		var point216 = new ymaps.Placemark(
			[55.730394,37.664447], {
			balloonContent: '<strong>м. Пролетарская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point216);
		
		var point217 = new ymaps.Placemark(
			[55.768124,37.649728], {
			balloonContent: '<strong>м. Красные ворота</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point217);
		
		var point218 = new ymaps.Placemark(
			[55.751517,37.713737], {
			balloonContent: '<strong>м. Авиамоторная</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point218);
		
		var point219 = new ymaps.Placemark(
			[55.750726,37.817567], {
			balloonContent: '<strong>м. Новогиреево</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point219);
		
		var point220 = new ymaps.Placemark(
			[55.811153,37.797431], {
			balloonContent: '<strong>м. Щелковская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point220);
		
		var point221 = new ymaps.Placemark(
			[55.789089,37.681420], {
			balloonContent: '<strong>м. Сокрольники</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point221);
		
		var point222 = new ymaps.Placemark(
			[55.819962,37.644225], {
			balloonContent: '<strong>м. ВДНХ</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point222);
		
		var point223 = new ymaps.Placemark(
			[55.854624,37.652680], {
			balloonContent: '<strong>м. Свиблово</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point223);
		
		var point224 = new ymaps.Placemark(
			[55.846167,37.587842], {
			balloonContent: '<strong>м. Владыкино</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point224);
		
		var point225 = new ymaps.Placemark(
			[55.898823,37.585921], {
			balloonContent: '<strong>м. Алуфьево</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point225);
		
		var point226 = new ymaps.Placemark(
			[55.657534,37.748590], {
			balloonContent: '<strong>м. Братиславская</strong><br />телефон: '+phone_msk+' <br /><i>бесплатный вызов замерщика</i> <br />',
			},
			{iconLayout: 'default#image',iconImageHref: 'img/point.png',iconImageSize: [34, 49],iconImageOffset: [-17, -24]}
		);
		map2.geoObjects.add(point226);
		
		var position = map.getGlobalPixelCenter();
		map.behaviors.disable('scrollZoom');
		
		var position2 = map2.getGlobalPixelCenter();
		map2.behaviors.disable('scrollZoom');
    }
    
});