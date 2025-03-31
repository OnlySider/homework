(function () {

    // Номер

    const phoneOpened = document.querySelector('.phone__icon');
    const phoneClose = document.querySelector('.phone__cancel');
    const headerPhone = document.querySelector('.header__phone');
    const phoneNumber = document.querySelector('.phone__number');
    const logoNone = document.querySelector('.header__logo')

    if (phoneOpened) {
        phoneOpened.addEventListener('click', openPhone);
    }

    if (phoneClose) {
        phoneClose.addEventListener('click', closePhone);
    }


    function openPhone(e) {
        e.preventDefault();

        if (phoneOpened) {
            headerPhone.classList.add('header__phone--opened');
            phoneOpened.classList.add('phone__icon--pos');
            phoneNumber.classList.remove('phone__number--none');
            phoneClose.classList.remove('phone__cancel--none');
            logoNone.classList.add('header__logo--none')
        }
    }


    function closePhone(e) {
        e.preventDefault();

        if (headerPhone.classList.contains('header__phone--opened')) {
            headerPhone.classList.remove('header__phone--opened');
            phoneOpened.classList.remove('phone__icon--pos');
            phoneNumber.classList.add('phone__number--none');
            phoneClose.classList.add('phone__cancel--none');
            logoNone.classList.remove('header__logo--none');
        }
    }

    // Модалка

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.button')

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

    // // Слайдер-галерея

    // new Swiper('.gallery__slider', {

    //     spaceBetween: 15,
    //     slidesPerView: 1.5,

    //     pagination: {
    //         el: '.gallery__pagination',
    //         type: 'fraction',
    //     },

    //     navigation: {
    //         nextEl: '.gallery__next',
    //         prevEl: '.gallery__prev',
    //     },

    //     breakpoints: {
    //         601: {
    //             slidesPerView: 3,
    //         },
    //         801: {
    //             spaceBetween: 32,
    //         },
    //         1101: {
    //             slidesPerView: 4,
    //         }
    //     }
    // });

    // // Слайдер-отзывы

    // new Swiper('.testimonials__slider', {

    //     spaceBetween: 0,
    //     slidesPerView: 1,
    //     centeredSlides: true,

    //     navigation: {
    //         nextEl: '.testimonials__next',
    //         prevEl: '.testimonials__prev',
    //     },

    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //         draggable: true,
    //     },

    //     breakpoints: {
    //         901: {
    //             slidesPerView: 1.5,
    //         },
    //         1201: {
    //             slidesPerView: 2.1,
    //         }
    //     }
    // });

    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

})()