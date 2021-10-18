'use strict';

/*assign variables*/
const bookmark = document.querySelector('.btn-bookmark');
const holder = document.querySelector('.bookmark-holder');
const color = document.getElementById('colored');
const moDal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const bookMarky = document.getElementById('bookmarky');
const backUp = document.querySelector('.btn-back');
const closE = document.querySelector('.close');
const filLy = document.querySelector('.fill');
const thanks = document.querySelector('.thanks');
const hamburger = document.querySelector('.hamburger');
const navMenuMob = document.querySelector('.nav-mobile');
const glocks = document.querySelectorAll('.glock');
const glock = document.querySelector('.glock');

const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');

const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');

const low2 = document.getElementById('low2');
const low3 = document.getElementById('low3');
const low4 = document.getElementById('low4');

const continue1 = document.querySelectorAll('.continue1');

const btn4 = document.getElementById('btn4');
const gotIt = document.getElementById('gotIt');

const pled2 = Number(document.getElementById('pled2').value);
const pled3 = Number(document.getElementById('pled3').value);
const pled4 = Number(document.getElementById('pled4').value);

let selected;

/*
if (!glocks.classList.contains('active')) {
  glock.classList.add('active');
  filLy.classList.remove('hidden');
} else {
  glock.classList.remove('active');
  filLy.classList.add('hidden');
}
*/
const gActive = function () {
  if (!glock.classList.contains('active')) {
    glock.classList.add('active');
    filLy.classList.remove('hidden');
  } else {
    glock.classList.remove('active');
    filLy.classList.add('hidden');
  }
};

const OCMenu = () => {
  if (navMenuMob.classList.contains('hide')) {
    navMenuMob.classList.remove('hide');
  } else {
    navMenuMob.classList.add('hide');
  }
};

const eScape2 = function (e) {
  if (e.key === 'Escape') {
    if (!navMenuMob.classList.contains('hide')) {
      OCMenu();
    }
  }
};

hamburger.addEventListener('click', OCMenu);
document.addEventListener('keydown', eScape2);

const bookMarked = function () {
  if (!bookMarky.classList.contains('hidden')) {
    bookMarky.classList.add('hidden');
    color.classList.add('active');
    color.style.display = 'block';
    bookmark.style.padding = '1rem 1rem 1rem 7rem';
    bookmark.classList.add('colory');
    bookmark.textContent = 'Bookmarked';
  } else {
    bookMarky.classList.remove('hidden');
    bookmark.classList.remove('colory');
    color.style.display = 'none';
    bookmark.style.padding = '1rem 1rem 1rem 5rem';
    bookmark.textContent = 'Bookmark';
  }
};

const backIt = function () {
  moDal.classList.remove('hide');
  overLay.classList.remove('hide');
};

const closeModal = function () {
  moDal.classList.add('hide');
  overLay.classList.add('hide');
};

backUp.addEventListener('click', backIt);
bookmark.addEventListener('click', bookMarked);

const eScape = function (e) {
  if (e.key === 'Escape') {
    if (!moDal.classList.contains('hide')) {
      closeModal();
    }
  }
};

const array = [g1, g2, g3, g4];

// Add 'active' tag for currently selected item

document.addEventListener('keydown', eScape);
closE.addEventListener('click', closeModal);
g1.addEventListener('click', event => {
  if (!g1.classList.contains('active2')) {
    g1.classList.add('active2');
    f1.classList.remove('hidden');
    g2.classList.remove('active2');
    g3.classList.remove('active2');
    g4.classList.remove('active2');
    selected = g1;
  } else {
    g1.classList.remove('active2');
    f1.classList.add('hidden');
  }
});
g2.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    if (!g2.classList.contains('active2')) {
      g2.classList.add('active2');
      low2.style.display = 'flex';
      f2.classList.remove('hidden');
      g1.classList.remove('active2');
      g3.classList.remove('active2');
      g4.classList.remove('active2');
      selected = g2;
    } else {
      low2.style.display = 'none';
      g2.classList.remove('active2');
      f2.classList.add('hidden');
    }
  }
});
g3.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    if (!g3.classList.contains('active2')) {
      g3.classList.add('active2');
      low3.style.display = 'flex';
      f3.classList.remove('hidden');
      g1.classList.remove('active2');
      g2.classList.remove('active2');
      g4.classList.remove('active2');

      selected = g3;
    } else {
      low3.style.display = 'none';
      g3.classList.remove('active2');
      f3.classList.add('hidden');
    }
  }
});
g4.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    if (!g4.classList.contains('active2')) {
      g4.classList.add('active2');
      low4.style.display = 'flex';
      f4.classList.remove('hidden');
      g1.classList.remove('active2');
      g2.classList.remove('active2');
      g3.classList.remove('active2');
      selected = g4;
    } else {
      low4.style.display = 'none';
      g4.classList.remove('active2');
      f4.classList.add('hidden');
    }
  }
});

const closeModal2 = function () {
  moDal.classList.add('hide');
  thanks.classList.remove('hide');
};
const closeModal3 = function () {
  thanks.classList.add('hide');
  overLay.classList.add('hide');
};
/*Pledge calculations*/

/*
const gActivate = function () {
  if (!this.classList.contains('active2')) {
    this.classList.add('active2');
    filLy.classList.remove('hidden');
  } else {
    this.classList.remove('active2');
    filLy.classList.add('hidden');
  }
};
for (let i = 0; i < array.length; i++) {
  glocks[i].addEventListener('click', gActivate);
}*/

const pledge = Number(document.querySelector('.pledge-amount').value);
const twentyfive = 25;
const pledger3 = function () {
  const pled44 = Number(document.getElementById('pled4').value);
  if (pled44 >= 200) {
    closeModal2();
  }
};
const pledger1 = function () {
  const pled22 = Number(document.getElementById('pled2').value);
  if (pled22 >= 25) {
    closeModal2();
  }
};
const pledger2 = function () {
  const pled33 = Number(document.getElementById('pled3').value);
  if (pled33 >= 75) {
    closeModal2();
  }
};

for (let i = 0; i < continue1.length; i++) {
  continue1[i].addEventListener('click', pledger1);
}
for (let i = 0; i < continue1.length; i++) {
  continue1[i].addEventListener('click', pledger2);
}
for (let i = 0; i < continue1.length; i++) {
  continue1[i].addEventListener('click', pledger3);
}

gotIt.addEventListener('click', closeModal3);
