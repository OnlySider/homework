(function () {
  document.addEventListener('click', burgerInit)

  // Бургерное меню

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }

  // Модальное окно

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.gift__link')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
    }
  }

  // Табы

  const tabControls = document.querySelector('.week__list')

  tabControls.addEventListener('click', switchTab)

  function switchTab(e) {

    const tabControl = e.target.closest('.week__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('week__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.week__link--active')
    const activeContent = document.querySelector('.week-content--show')

    if (activeContent) {
      activeContent.classList.remove('week-content--show')
    }
    if (activeControl) {
      activeControl.classList.remove('week__link--active')
    }

    tabContent.classList.add('week-content--show')
    tabControl.classList.add('week__link--active')

  }


  // Аккордеон

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  // Слайдер галереи

  const swiper = new Swiper('.gallery__slider', {

    spaceBetween: 32,
    slidesPerView: 1.5,

    // If we need pagination
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      201: {

        spaceBetween: 15,
      },
      601: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      801: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1101: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
  });

  // Слайдер отзывов

  const slider = new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.testimonials__button-next',
      prevEl: '.testimonials__button-prev',
    },

    breakpoints: {
      1201: {
        slidesPerView: 2.05
      },
      901: {
        slidesPerView: 1
      },
    }
  });
})()


