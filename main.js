const menuBtn = document.querySelector('.menu-btn');
const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.navbar-right');
const guestList = document.querySelector('.guest-list');
const showMore = document.querySelector('.more-btn');
const userPopup = document.querySelector('.login-popup');
const loginBtn = document.querySelector('.login-btn');
const userPopupLayer = document.getElementById('pop-for-users');
const userPopupClose = document.querySelector('.pop-close');

// Feature data Object
const speakers = [
  {
    speaker: 'PAOLO MORELLINI',
    role: 'Education Programs Lead',
    description:
      'McKenzie Brunelle is the PTC Education Partnerships and Outreach Programs Team Lead. ',
    quotation: 'better tomorrow, save energy today.',
    image: './img/people1.jpg',
  },
  {
    speaker: 'LEILA COSTA',
    role: ' sustainability manager for Sodexo ',
    description:
      'Leila Costa is the Director of ESG Metrics and Reporting at PTC.',
    quotation: 'Save Energy, Save the planet.',
    image: './img/people2.jpeg',
  },
  {
    speaker: 'JONATHAN KATEMAN',
    role: 'Chief of Digital Manufacturing',
    description:
      'I am a leader who transforms complex organisations to be more competitive and sustainable through technology. ',
    quotation: 'Energy saved is Energy generated.',
    image: './img/people3.jpg',
  },
  {
    speaker: 'JENNY JOHNSON',
    role: 'Cloud Infrastructure, Onshape',
    description:
      'Jenny Johnson, Principal Technical Services Engineer is a Principal Technical Services Engineer.',
    quotation: 'Reduce, Reuse and Recycle',
    image: './img/people4.jpg',
  },
  {
    speaker: ' AMARACHI DIMKPA',
    role: 'Software Engineer',
    description:
      'Hello Im a software developer! I can help you build a product , feature or website Look through some of my work and experience!',
    quotation: 'Rock your world by saving energy.',
    image: './img/people5.jpg',
  },
  {
    speaker: 'Golda Onyia',
    role: 'Business Development Associate',
    description:
      'Golda Onyia is a Business Development Associate from Amokwe Udi near Enugu.  She has been with Solar Sister since 2021.',
    quotation: 'Think. Act. Save.',
    image: './img/people6.jpg',
  },
];

// Login user popup
loginBtn.addEventListener('click', () => {
  document.body.classList.add('no-scroll');
  userPopupLayer.classList.add('pop-for-users');
  userPopup.classList.add('hide-login-popup');
});

// Login user Popup close
userPopupClose.addEventListener('click', () => {
  document.body.classList.remove('no-scroll');
  userPopupLayer.classList.remove('pop-for-users');
  userPopup.classList.remove('hide-login-popup');
});

// burger menu action
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// glue navigation menu
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add('glue');
  } else {
    navbar.classList.remove('glue');
  }
};

// open menu on click
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbarMenu.classList.toggle('show-menu');
});

// generate Dynamic guest list
for (let i = 0; i < speakers.length; i += 1) {
  const specialGuest = speakers[i];

  const guest = document.createElement('guest');
  guest.classList.add('guest');
  guest.innerHTML = `
    <div class="guest-item">
        <div class="guest-item-img">
            <img src="${specialGuest.image}" alt="">
        </div>
        <div class="guest-item-text">
            <h3>${specialGuest.speaker}</h3>
            <hr class = "guest-line">
            <span class="role">${specialGuest.role} </span>
            <p>
                ${specialGuest.description}
            </p>
            <q>${specialGuest.quotation}</q>
        </div>
    </div>
  `;
  guestList.appendChild(guest);
}

// unhide guest List on click
showMore.addEventListener('click', (e) => {
  e.preventDefault();
  guestList.classList.toggle('hide');
  showMore.textContent = showMore.textContent.includes('See More')
    ? 'See Less'
    : 'See More';
});
