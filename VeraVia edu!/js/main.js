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
    const btn1 = document.getElementById('myBtn1')
    const btn2 = document.getElementById('myBtn2')
    const btn3 = document.getElementById('myBtn3')
    const consultation = document.querySelector('.consultation__item')
    const whatsup = document.querySelector('.whatsup__item')
    const backToTop = document.querySelector('.back-to-top')


    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
        consultation.style.zIndex = '2';
        whatsup.style.zIndex = '2';
        backToTop.style.zIndex = '2';

    }

    btn1.onclick = openModal;
    btn2.onclick = openModal;
    btn3.onclick = openModal;

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
            consultation.style.zIndex = 'revert-layer';
            whatsup.style.zIndex = 'revert-layer';
            backToTop.style.zIndex = 'revert-layer';
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

    // Объявления

    new Swiper('.advertisments__slider', {

        slidesPerView: 3.02,
        spaceBetween: 20,

        navigation: {
            nextEl: '.advertisments__button-next',
            prevEl: '.advertisments__button-prev',
        },

        breakpoints: {
            201: {
                slidesPerView: 1.1,
            },
            401: {
                slidesPerView: 1.5,
            },
            501: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            601: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            801: {
                slidesPerView: 2.02,
                spaceBetween: 30,
            },
            1001: {
                spaceBetween: 30,
                slidesPerView: 2.5,
            },
            1201: {
                spaceBetween: 20,
                slidesPerView: 3.02,
            }
        }
    });

    // Вакансии

    new Swiper('.vacancys__slider', {

        slidesPerView: 3.02,
        spaceBetween: 20,

        navigation: {
            nextEl: '.vacancys__button-next',
            prevEl: '.vacancys__button-prev',
        },

        breakpoints: {
            201: {
                slidesPerView: 1.1,
            },
            401: {
                slidesPerView: 1.5,
            },
            601: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            801: {
                slidesPerView: 2.02,
                spaceBetween: 30,
            },
            1001: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            1201: {
                slidesPerView: 3.02,
                spaceBetween: 20,
            }
        }
    });

    // Back to top

    document.addEventListener("DOMContentLoaded", function () {
        const backToTop = document.querySelector(".back-to-top");

        // Показать/скрыть кнопку при прокрутке страницы
        window.addEventListener("scroll", function () {
            if (window.pageYOffset >= 1500) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        });

        // Плавная прокрутка при клике на кнопку
        backToTop.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });


    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

})()