const navButton = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const headerMenu = document.querySelector('.header__top-row');

navButton.onclick = function () {
  navIcon.classList.toggle('nav-icon--active');
  headerMenu.classList.toggle('header__top-row--mobile');
  document.body.classList.toggle('no-scroll');
}

/* Phone Mask */
mask('[data-phone-input]');

/* Return placeholder to the empty phone-input */

const phoneInputs = document.querySelectorAll('[data-phone-input]');

phoneInputs.forEach((input)=> {

  input.addEventListener('blur', ()=> {
    if(input.value == '+') input.value = '';
  })
});


/* Yandex Map */
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543, 30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });
    var myPlacemark = new ymaps.Placemark(
      [59.943543, 30.338928], 
      {
        balloonContent: 
        `
          <div class="balloon">
            <div class='balloon__address'>Наб. реки Фонтанки 10-15</div>
            <div class='balloon__contacts'>
              <a href='tel:+79261234567'>8 (812) 123-45-67</a>
            </div>
          </div>
        `
      }, 
      {
      iconLayout: 'default#image',
      iconImageHref: '../img/map/location-pin.svg',
      icon_imagesize: [40, 40],
      iconImageOffset: [-20, -40]
      }
    );
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('routeButtonControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('rulerControl');
    // myMap.controls.remove('zoomControl');
    // myMap.controls.remove('fullscreenControl');

    myMap.behaviors.disable(['scrollZoom']); //откл скролл карты

    myMap.geoObjects.add(myPlacemark);

    // открыть инфобокс сразу при загрузке карты
    myPlacemark.balloon.open();
}


