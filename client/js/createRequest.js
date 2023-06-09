const mainBlock = document.querySelector('main');
const navDays = Array.from(document.querySelectorAll('.page-nav__day'));

/* let day = new Date('Apr 30, 2000');
console.log(day); // Apr 30 2000
let nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
Метод getDay() возвращает порядковый номер дня недели указанной даты по местному времени, где 0 соответствует воскресенью.
Синтаксис: dateObj.getDay()

getDate()
Получить день месяца, от 1 до 31, что несколько противоречит названию метода.


Чтобы получить data-атрибут можно взять свойство объекта dataset с именем, равным части имени атрибута после data.
(обратите внимание, что дефисы в имени преобразуются в camelCase).

let article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
*/
  const getCookie = () => {
    const value = "; " + document.cookie;
    const parts = value.split('; popup=');
    if (parts.length === 2) {
      subscribeModal.classList.remove('modal_active');
    }
  }

/*
<section class="movie">
      <div class="movie__info">
        <div class="movie__poster">
          <img class="movie__poster-image" alt="Звёздные войны постер" src="i/poster1.jpg">
        </div>
        <div class="movie__description">
          <h2 class="movie__title">Звёздные войны XXIII: Атака клонированных клонов</h2>
          <p class="movie__synopsis">Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.</p>
          <p class="movie__data">
            <span class="movie__data-duration">130 минут</span>
            <span class="movie__data-origin">США</span>
          </p>
        </div>
      </div>  
      
      <div class="movie-seances__hall">
        <h3 class="movie-seances__hall-title">Зал 1</h3>
        <ul class="movie-seances__list">
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">10:20</a></li>
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">14:10</a></li>
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">18:40</a></li>
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">22:00</a></li>
        </ul>
      </div>
      <div class="movie-seances__hall">
        <h3 class="movie-seances__hall-title">Зал 2</h3>
        <ul class="movie-seances__list">
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">11:15</a></li>
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">14:40</a></li>
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">16:00</a></li>
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">18:30</a></li>
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">21:00</a></li>
          <li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html">23:30</a></li>     
        </ul>
      </div>      
    </section>
*/
function weekdayDeterminant(date, index) {
  let weekday = date.getDay();
  if (weekday = 0) {
    navDays[index].classList.add('page-nav__day_weekend');
    return 'Вс';
  } else if (weekday = 1) {
    return 'Пн';
  } else if (weekday = 2) {
    return 'Вт';
  } else if (weekday = 3) {
    return 'Ср';
  } else if (weekday = 4) {
    return 'Чт';
  } else if (weekday = 5) {
    return 'Пт';
  } else if (weekday = 6) {
    navDays[index].classList.add('page-nav__day_weekend');
    return 'Сб';
  } 
}

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  let response = xhr.response;
  let films = response.films.result;
  let halls = response.halls.result;
  let seances = response.seances.result;

  for (let i = 0; i < films.length; i++) {
    mainBlock.insertAdjacentHTML('beforeEnd', '<section class="movie"></section>');
    let movie = mainBlock.querySelectorAll('.movie')[i];
    movie.insertAdjacentHTML('beforeEnd', '<div class="movie__info"></div>');
    let movieInfo = movie.querySelector('.movie__info');
    movieInfo.insertAdjacentHTML('beforeEnd', '<div class="movie__poster"><img class="movie__poster-image"></div>');
    let namePoster = films[i][film_name] + 'постер';
    let linkPoster = films[i][film_poster];
    movieInfo.querySelector('.movie__poster-image').setAttribute('alt', namePoster);
    movieInfo.querySelector('.movie__poster-image').setAttribute('src', linkPoster);   
    movieInfo.insertAdjacentHTML('beforeEnd', '<div class="movie__description"><h2 class="movie__title"></h2><p class="movie__synopsis"></p><p class="movie__data"><span class="movie__data-duration"></span><span class="movie__data-origin"></span></p></div>');
    let filmName = films[i][film_name];
    movie.setAttribute('data-film-name', filmName);
    movieInfo.querySelector('.movie__title').textContent = filmName;
    let filmDescription = films[i][film_description];
    movie.setAttribute('data-film-description', filmDescription);
    movieInfo.querySelector('.movie__synopsis').textContent = filmDescription;
    let filmDuration = films[i][film_duration];
    movie.setAttribute('data-film-duration', filmDuration);
    movieInfo.querySelector('.movie__data-duration').textContent = filmDuration;
    let filmOrigin = films[i][film_origin];
    movie.setAttribute('data-film-origin', filmOrigin);
    movieInfo.querySelector('.movie__data-origin').textContent = filmOrigin;
    let filmId = films[i][film_id];
    movie.setAttribute('data-film-id', filmId);
    let storedMovieInfo = 'storedMovie' + i;
    let storedMovie = 'film' + filmId + '; ' + 'filmName=' + filmName + '; ' + 'filmDescription=' + filmDescription + '; ' + 'filmDuration=' + filmDuration + '; ' + 'filmOrigin=' + filmOrigin;
    localStorage.setItem(storedMovieInfo, storedMovie);

    let hallsOpen = halls.filter(hall => hall[hall_open] === 1);
    let filmHalls = [];
    hallsOpen.forEach(hall => {
      let hallId = hall[hall_id];
      let hallName = hall[hall_name]; 
      let seanceInHall = seances.find(seance => seance[seance_filmid] === filmId && seance[seance_hallid] === hallId);
      if (seanceInHall) {
        filmHalls.push({hallId, hallName});
        movie.insertAdjacentHTML('beforeEnd', '<div class="movie-seances__hall"><h3 class="movie-seances__hall-title"></h3><ul class="movie-seances__list"></ul></div>');
      }
    });

    filmHalls.forEach((item, index) => {
      let filmSeances = seances.filter(seance => seance[seance_filmid] === filmId && seance[seance_hallid] === item[hallId]);
      let hallName = item[hallName];
      let hallNumber = hallName.substring(hallName.length - 1);
      movie.querySelectorAll('.movie-seances__hall-title')[index].textContent = 'Зал ' + hallNumber;
      movie.querySelectorAll('.movie-seances__hall')[index].setAttribute('data-hall-name', hallNumber);
      movie.querySelectorAll('.movie-seances__hall')[index].setAttribute('data-hall-id', item[hallId]);
      let seancesList = movie.querySelectorAll('.movie-seances__list')[index];
      filmSeances.forEach((seance, i) => {
        seancesList.insertAdjacentHTML('beforeEnd', '<li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html"></a></li>');
        let seanceTime = seancesList.querySelectorAll('.movie-seances__time')[i];
        let seanceTimestamp = +seance[seance_start] * 60;
        seanceTime.setAttribute('data-seance-timestamp', seanceTimestamp);
        let seanceTimeStart = seance[seance_time];
        seanceTime.textContent = seanceTimeStart;
        seanceTime.setAttribute('data-seance-start', seanceTimeStart);
        let seanceId = seance[seance_id];
        seanceTime.setAttribute('data-seance-id', seanceId);
      }); 
    });
  }

  navDays.forEach((navDay, index, array) => {
    navDay.insertAdjacentHTML('beforeEnd', '<span class="page-nav__day-week"></span><span class="page-nav__day-number"></span>');
    let day = new Date();
    if (index = 0) {
      navDay.classList.add('page-nav__day_today');
    } 
  
    day.setDate(day.getDate() + index); 
    navDay.querySelector('.page-nav__day-number').textContent = day.getDate();
    let dayWeek = weekdayDeterminant(day, index);
    navDay.querySelector('.page-nav__day-week').textContent = dayWeek;
  
    let activeNumberPage = 0;
    let allSeances = Array.from(document.querySelectorAll('.movie-seances__time'));
    navDay.addEventListener('click', (e) => {
      e.preventDefault();
      array[activeNumberPage].classList.remove('page-nav__day_chosen');
      navDay.classList.add('page-nav__day_chosen');
      activeNumberPage = index; 
      allSeances.forEach(seance => {
        let initialValue = +seance.dataset.seanceTimestamp;
        value = initialValue + (86400 * activeNumberPage);
        seance.setAttribute('data-seance-timestamp', value);
      });
    });

    allSeances.forEach(seance => {
      seance.addEventListener('click', (e) => {
        e.preventDefault();

        let storedSeanceId = seance.dataset.seanceId;
        localStorage.setItem('seanceId', storedSeanceId);
        let storedTimestamp = seance.dataset.seanceTimestamp;
        localStorage.setItem('seanceTimestamp', storedTimestamp);
        let storedSeanceStart = seance.dataset.seanceStart;
        localStorage.setItem('seanceStart', storedSeanceStart);
        let filmOfSeance = seance.closest('.movie');
        let storedfilmName = filmOfSeance.dataset.filmName;
        localStorage.setItem('filmName', storedfilmName);
        let hallOfSeance = seance.closest('.movie-seances__hall');
        let storedHallId = hallOfSeance.dataset.hallId;
        localStorage.setItem('hallId', storedHallId);
        let storedHallName = hallOfSeance.dataset.hallName;
        localStorage.setItem('hallName', storedHallName);
        location = 'hall.html';    
      });
    });
  } 
});

xhr.open('POST', 'http://f0769682.xsph.ru/', true);

xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr.responseType = 'json';

xhr.send('event=update');