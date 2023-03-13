const menuBtn = document.querySelector('.menu-btn');
const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.navbar-right');
const guestList = document.querySelector('.guest-list');
const showMore = document.querySelector('.more-btn');

// Feature data Object
const speakers = [
  {
    speaker: 'MCKENZIE BRUNELLE',
    role: 'Education Programs Lead',
    description:
      'McKenzie Brunelle is the PTC Education Partnerships and Outreach Programs Team Lead. She has been with PTC for four years. Following her passion for STEM education, she joined the education team as an Application Engineer. She now oversees content creation, competitions, and partner relations. She has a background in Biomedical Engineering and is currently pursuing her master’s in Learning Design and Technology from Purdue University.',
    quotation: 'For your better tomorrow, save energy today.',
    image: './img/mckenzie-brunelle.png',
  },
  {
    speaker: 'LEILA COSTA',
    role: ' sustainability manager for Sodexo (Atlanta)',
    description:
      'Leila Costa is the Director of ESG Metrics and Reporting at PTC. She is a graduate of the Yale School of the Environment. She has held leading positions in corporate sustainability, across industries, including consumer products, hospitality services, and now tech. Working on critical sustainability areas: carbon emissions, waste, hunger, diversity, equity, and inclusion, responsible sourcing, and ESG reporting and sustainability communications. ',
    quotation: 'Save Energy, Save Money, Save Nation, Save the planet.',
    image: './img/LEILA COSTA.jpg',
  },
  {
    speaker: 'JONATHAN KATEMAN',
    role: 'Chief of Digital Manufacturing, Rolls-Royce',
    description:
      'I am a leader who transforms complex organisations to be more competitive and sustainable through technology. I lead global technology teams to bring business strategies, operational requirements, and innovative technologies together to create real business value and transformation.',
    quotation: 'Energy saved is Energy generated.',
    image: './img/Constant_Contact_Jonathan_Kateman.jpg',
  },
  {
    speaker: 'JENNY JOHNSON',
    role: 'Cloud Infrastructure, Onshape',
    description:
      'Jenny Johnson, Principal Technical Services Engineer is a Principal Technical Services Engineer, fulfilling both a PreSales and Post Sales role. She has over 20 years of industry experience before joining the CAD industries. She previously was a PDM project manager and helped hundreds of companies shape their PDMPLM processes.',
    quotation: 'Reduce, Reuse and Recycle',
    image: './img/Jenny-Johnson-scaled.jpg',
  },
  {
    speaker: ' AMARACHI DIMKPA',
    role: 'Software Engineer',
    description:
      'Hello Im a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.',
    quotation: 'Rock your world by saving energy.',
    image: './img/amara2.jpg',
  },
  {
    speaker: 'Golda Onyia',
    role: 'Business Development Associate',
    description:
      'Golda Onyia is a Business Development Associate from Amokwe Udi near Enugu.  She has been with Solar Sister since 2021. Golda studied Chemical Engineering in school and speaks English and Igbo languages. Her goal is to be a mentor to young women.',
    quotation: 'Think. Act. Save.',
    image: './img/Golda.jpg',
  },
];

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
