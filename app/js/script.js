let bookmark = document.querySelector(".bookmarks"); // находим элемент с количеством закладок
let cart = document.querySelector(".cart"); // находим элемент с количеством товаров в корзине

let buttonBuy = document.querySelectorAll(".buy-button"); // находим все кнопки, добавляющие товар в корзину
let buttonBookmark = document.querySelectorAll(".button-bookmark"); // находим все кнопки, добавляющие товар в закладки

buttonBuy.forEach(function (item) { // перебираем все кнопки, добавляющие товар в корзину
  item.addEventListener("click", function(evt) { // навешиваем на каждую кнопку обработчик события клика
    evt.preventDefault(); // запрещаем действие по умолчанию
    cart.classList.add("background-red"); // добавляем элементу с количеством товаров в корзине класс с красным фоном
  })
});

buttonBookmark.forEach(function (item) { // перебираем все кнопки, добавляющие товар в закладки
  item.addEventListener("click", function(evt) { // навешиваем на каждую кнопку обработчик события клика
    evt.preventDefault(); // запрещаем действие по умолчанию
    bookmark.classList.add("background-red"); // добавляем элементу с количеством закладок класс с красным фоном
  })
});

// оживление слайдера на главной странице
let prevSliderButton = document.querySelector(".prev-slider-button"); // находим элемент переключения на предыдущий слайд
let nextSliderButton = document.querySelector(".next-slider-button"); // находим элемент переключения на следующий слайд

let firstSlider = document.querySelector(".promo-block-slider.first"); // находим первый слайд
let secondSlider = document.querySelector(".promo-block-slider.second"); // находим второй слайд

if (prevSliderButton) { // проверяем наличие элемента переключения на странице, чтобы не падал javascript при его отсутствии
  prevSliderButton.addEventListener("click", function(evt) { // вешаем обработчик события на клик
    evt.preventDefault(); // запрещаем действие по умолчанию
    if (firstSlider.classList.contains("js-higher")) { // проверяем виден ли первый слайд
      secondSlider.classList.remove("js-lower"); // если первый слайд виден, тогда удаляем класс скрывающий второй слайд
      secondSlider.classList.add("js-higher"); // добавляем второму слайду класс, поднимающий слайд выше
      firstSlider.classList.add("js-lower"); // добавляем первому слайду класс, опускающий элемент вглубь
      firstSlider.classList.remove("js-higher"); // удаляем у первого слайда класс, поднимающий элемент выше
    } else { // если первый слайд не виден
      firstSlider.classList.remove("js-lower"); // удаляем класс скрывающий первый слайд
      firstSlider.classList.add("js-higher"); // добавляем первому слайду класс, поднимающий слайд выше
      secondSlider.classList.add("js-lower"); // добавляем второму слайду класс, опускающий элемент вглубь
      secondSlider.classList.remove("js-higher"); // удаляем у второго слайда класс, поднимающий элемент выше
    }
  });
}

if (nextSliderButton) {
  nextSliderButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (firstSlider.classList.contains("js-higher")) {
      secondSlider.classList.remove("js-lower");
      secondSlider.classList.add("js-higher");
      firstSlider.classList.add("js-lower");
      firstSlider.classList.remove("js-higher");
    } else {
      firstSlider.classList.remove("js-lower");
      firstSlider.classList.add("js-higher");
      secondSlider.classList.add("js-lower");
      secondSlider.classList.remove("js-higher");
    }
  });
}

// оживляем блок Сервисы
let deliveryButton = document.querySelector(".service-item.delivery"); // находим элемент-кнопку Доставка
let guaranteeButton = document.querySelector(".service-item.guarantee"); // находим элемент-кнопку Гарантия
let creditButton = document.querySelector(".service-item.credit"); // находим элемент-кнопку Кредит

let deliveryBlock = document.querySelector(".service-item-block.delivery"); // находим блок-описание Доставки
let guaranteeBlock = document.querySelector(".service-item-block.guarantee"); // находим блок-описание Гарантий
let creditBlock = document.querySelector(".service-item-block.credit"); // находим блок-описание Кредита

if (deliveryButton) { // проверяем наличие элемента на странице, для предотвращения падения javascript
  deliveryButton.addEventListener("click", function(evt) { // отслеживаем клик на кнопке переключения видов сервиса
    evt.preventDefault(); // запрещаем действие по умолчанию
    if (!deliveryButton.classList.contains("active")) { // проверяем содержит ли кнопка класс active (активна ли она в данный момент)
      deliveryButton.classList.add("active"); // если не содержит, присваиваем ей класс active
      guaranteeButton.classList.remove("active"); // убираем у двух других кнопок класс active
      creditButton.classList.remove("active");
      deliveryBlock.classList.remove("js-lower"); // убираем у требуемого к открытию блока-описания класс, понижающий его вглубь страницы (z-index)
      deliveryBlock.classList.add("js-higher"); // добавляем этому же блоку класс, который поднимет его вверх 
      guaranteeBlock.classList.remove("js-higher"); // у остальных двух блоков удаляем класс, поднимающий их, и добавляем понижающий класс
      guaranteeBlock.classList.add("js-lower");
      creditBlock.classList.remove("js-higher");
      creditBlock.classList.add("js-lower");
    }
  });
}

if (guaranteeButton) {
  guaranteeButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!guaranteeButton.classList.contains("active")) {
      guaranteeButton.classList.add("active");
      deliveryButton.classList.remove("active");
      creditButton.classList.remove("active");
      guaranteeBlock.classList.remove("js-lower");
      guaranteeBlock.classList.add("js-higher");
      deliveryBlock.classList.remove("js-higher");
      deliveryBlock.classList.add("js-lower");
      creditBlock.classList.remove("js-higher");
      creditBlock.classList.add("js-lower");
    }
  });
}

if (creditButton) {
  creditButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!creditButton.classList.contains("active")) {
      creditButton.classList.add("active");
      guaranteeButton.classList.remove("active");
      deliveryButton.classList.remove("active");
      creditBlock.classList.remove("js-lower");
      creditBlock.classList.add("js-higher");
      guaranteeBlock.classList.remove("js-higher");
      guaranteeBlock.classList.add("js-lower");
      deliveryBlock.classList.remove("js-higher");
      deliveryBlock.classList.add("js-lower");
    }
  });
}

// делаем всплывающее окно с картой
let mapButton = document.querySelector(".map"); // находим элемент, клик по которому должен открывать всплывающее окно с картой
let mapModal = document.querySelector(".modal-map"); // находим всплывающее окно с картой
let mapClose = document.querySelector(".modal-map .modal-close"); // находим кнопку закрытия всплывающего окна с картой

if (mapButton) { // проверяем наличие на странице элемента, чтобы javascript не "упал"
  mapButton.addEventListener("click", function(evt) { // вешаем обработчик события клика на элемент, открывающий всплывающее окно с картой
    evt.preventDefault(); // запрещаем действие по умолчанию
    mapModal.classList.add("show"); // добавляем модальному окну с картой класс show, который отображает окно на странице
  });
}

if (mapClose) { // проверяем наличие на странице элемента, чтобы javascript не "упал"
  mapClose.addEventListener("click", function(evt) { // вешаем обработчик события клика на элементе, закрывающем модальное окно
    evt.preventDefault(); // запрещаем действие по умолчанию
    mapModal.classList.remove("show"); // удаляем у модального окна класс show, который окно отображал на странице
  });
}

//отображение окна "Напишите нам"
let writeUsBtn = document.querySelector(".write-us-btn"); // находим элемент, открывающий модальное окно
let writeUsModal = document.querySelector(".modal-write-us"); // находим модальное окно
let writeUsClose = document.querySelector(".modal-write-us .modal-close"); // находим элемент, акрывающий модальное окно

let writeUsForm = document.querySelector(".modal-write-us form"); // находим форму в модальном окне
let userName = document.querySelector(".modal-write-us #user-name"); // находим поле формы Имя
let userEmail = document.querySelector(".modal-write-us #user-email"); // находим поле формы Электронная почта
let userMessage = document.querySelector(".modal-write-us #user-message"); // находим поле для ввода сообщения

let isStorageSupport = true; // задаем переменной с поддержкой localStorage истинное значение
let storageName = ""; // объяавляем переменную 
let storageEmail = ""; // объявляем переменную

try { // определяем наличие у браузера поддержки localStorage
  storageName = localStorage.getItem("name");  // присваиваем переменным значения из хранилища localStorage
  storageEmail = localStorage.getItem("e-mail");
} catch (err) { // если браузер не поддерживает localStorage
  isStorageSupport = false; // присваиваем переменной ложное значение
}

if (writeUsBtn) { // проверяем наличие на странице элемента, чтобы javascript не "упал"
  writeUsBtn.addEventListener("click", function(evt) { // вешаем обработчик события клика на элемент, открывающий всплывающее окно
    evt.preventDefault(); // запрещаем действие по умолчанию
    writeUsModal.classList.add("show"); // добавляем модальному окну класс show, который отображает окно на странице

    if (storageName && storageEmail) { // если в локальном хранилище есть оба значения: имя и почта
      userName.value = storageName; // тогда вводим в соответствующие поля формы значения
      userEmail.value = storageEmail;
      userMessage.focus(); // и помещаем фокус в поле ввода сообщения
    } else if (storageName) { // если в хранилище только значение имени присутствует
      userName.value = storageName; // тогда вводим значение имени в поле
      userEmail.focus(); // и ставим фокус в поле почты
    } else if (storageEmail) { // если в хранилище только значение почты имеется
      userEmail.value = storageEmail; // тогда вводим значение почты в поле
      userName.focus(); // и ставим фокус в поле имени
    } else { // если в хранилище нет никаких значений
      userName.focus(); // то ставим фокус в поле имени
    }
  });
}

if (writeUsClose) { // проверяем наличие на странице элемента, чтобы javascript не "упал"
  writeUsClose.addEventListener("click", function(evt) { // вешаем обработчик события клика на элементе, закрывающем модальное окно
    evt.preventDefault(); // запрещаем действие по умолчанию
    writeUsModal.classList.remove("show"); // удаляем у модального окна класс show, который окно отображал на странице
    writeUsModal.classList.remove("modal-error"); // удаляем у модального окна класс, показывающий наличие ошибки
  });
}

if (writeUsForm) { // проверяем наличие на странице элемента, чтобы javascript не "упал"
  writeUsForm.addEventListener("submit", function(evt) { // вешаем обработчик события отправки формы на форму
    if ( !userName.value || !userEmail.value ) { // если не введены имя или почта в поле ввода
      evt.preventDefault(); // запрещаем отправку формы
      writeUsModal.classList.remove("modal-error"); // удаляем класс, показывающий ошибку, чтобы сработал данный класс еще раз, если до этого была попытка отправить незаполненную форму
      writeUsModal.offsetWidth = writeUsModal.offsetWidth; // возвращаем размеры модального окна к исходному
      writeUsModal.classList.add("modal-error"); // добавляем класс, показывающий ошибку
    } else { // если требуемые поля заполнены
      if (isStorageSupport) { // и если браузер пддерживает localStorage
        localStorage.setItem("name", userName.value); // записываем в localStorage значения имени и почты
        localStorage.setItem("e-mail", userEmail.value);
      }
    }
  });
}

// настраиваем окно показа сообщения о добавлении в корзину
let buyButton = document.querySelectorAll(".buy-button"); // находим элемент, открывающий модальное окно
let addCartModal = document.querySelector(".modal-add-cart"); // находим модальное окно
let addCartClose = document.querySelector(".modal-add-cart .modal-close"); // находим элемент, закрывающий данное модальное окно

if (buyButton) { // проверяем наличие на странице элемента, чтобы javascript не "упал"
  buyButton.forEach(function(item) { // запускаем цикл проверки всех элементов, открывающих данное модальное окно
    item.addEventListener("click", function(evt) { // навешиваем обработчик события клика на все элементы, открывающие модальное окно
      evt.preventDefault(); // запрещаем действие по умолчанию
      addCartModal.classList.add("show"); // добавляем окну класс, показывающий его
    });
  });  
}

if (addCartClose) { // проверяем наличие на странице элемента, чтобы javascript не "упал"
  addCartClose.addEventListener("click", function(evt) { // навешиваем обработчик события клика на элемент, закрывающий модальное окно
    addCartModal.classList.remove("show"); // при клике удаляем у окна класс, его показывающий
  });
}

// закрываем модальные окна при нажатии клавиши Esc
window.addEventListener("keydown", function(evt) { // навешиваем обработчик события на всё окно браузера
  if ( evt.keyCode === 27 && ( writeUsModal.classList.contains("show") || mapModal.classList.contains("show") || addCartModal.classList.contains("show") ) ) { // если нажата кнопка Esc и в это время открыто какое-либо модальное окно
    evt.preventDefault(); // запрещаем действие по умолчанию
    writeUsModal.classList.remove("show"); // удаляем класс, показывающий модальные окна, у всех модальных окон
    mapModal.classList.remove("show");
    addCartModal.classList.remove("show");
    writeUsModal.classList.remove("modal-error"); // удаляем класс, показывающий ошибку
  }
});