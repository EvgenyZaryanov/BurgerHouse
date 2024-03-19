document.getElementById('main__action-button').onclick = function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
};

let links = document.querySelectorAll('.header__menu-item > a');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' });
  };
}

let buttons = document.getElementsByClassName('products__cardItem-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  };
}

function clearInputs() {
  document.getElementById('burger').value = '';
  document.getElementById('customerName').value = '';
  document.getElementById('phone').value = '';
}

// Обработчики событий input для каждого поля ввода
document.getElementById('burger').addEventListener('input', function () {
  this.style.borderColor = '';
});

document.getElementById('customerName').addEventListener('input', function () {
  this.style.borderColor = '';
});

document.getElementById('phone').addEventListener('input', function () {
  this.style.borderColor = '';
});

document.getElementById('order__form-button').onclick = function (event) {
  event.preventDefault();

  const burger = document.getElementById('burger');
  const nameInput = document.getElementById('customerName');
  const phone = document.getElementById('phone');

  let hasError = false;

  if (!burger.value) {
    burger.style.borderColor = 'red';
    hasError = true;
  }

  if (!nameInput.value) {
    nameInput.style.borderColor = 'red';
    hasError = true;
  }

  if (!phone.value) {
    phone.style.borderColor = 'red';
    hasError = true;
  }

  if (!hasError) {
    alert('Спасибо за заказ! Мы скоро свяжемся с Вами!');
    clearInputs();
  }
};

let prices = document.getElementsByClassName('products__cardItem-price');

document.getElementById('change-currency').onclick = function (e) {
  let currentCurrency = e.target.innerText;

  let newCurrency = ' $';
  let coefficient = 1;

  if (currentCurrency === '$') {
    newCurrency = ' ₽';
    coefficient = 95;
  } else if (currentCurrency === '₽') {
    newCurrency = ' BYN';
    coefficient = 3;
  } else if (currentCurrency === 'BYN') {
    newCurrency = ' €';
    coefficient = 0.9;
  } else if (currentCurrency === '€') {
    newCurrency = ' ¥';
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + '' + newCurrency;
  }
};
