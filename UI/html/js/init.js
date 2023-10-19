let App = {
    windowW: $(window).width(),
    initHelpers: function ($helpers) {
        let me = this;
        $(document).ready(function () {
            me.initHelper('common');
            if ($helpers != undefined) {
                if ($helpers instanceof Array) {
                    for (let $index in $helpers) {
                        me.initHelper($helpers[$index]);
                    }
                } else {
                    me.initHelper($helpers);
                }
            } else {

            }
        });

    },
    initHelper: function ($helper) {
        let me = this;
        //console.log($helper);
        if ($helper.length > 0) {
            console.log('init <' + $helper + '> function window width = ' + me.windowW);
            App[$helper]();
        }

    },

    common: function () {
        $.each($('.searchBtn'), function (i, v) {
            $(v).off('click').click(function () {
                event.stopPropagation();
                if ($(this).parent().hasClass('active')) {
                    $(this).parent().removeClass('active');
                } else {
                    $(this).parent().addClass('active');
                }
            });
        });

        // var Hnoti = $('.noti-header').innerHeight();
        //
        // if ($('.noti-header').hasClass('active')) {
        //     $('.bh-wrapper_main').css({'transform': 'translateY(' + Hnoti + 'px)'})
        //
        //     console.log('height noti' + Hnoti)
        //
        // } else {
        //
        // }
        $('.close-noti').click(function () {
            $('.noti-header').removeClass('active')
            // $('.noti-header').css('top', '0')
        })

        let me = this;

        // PA: 10/10/2023: Format all <i> with background responsive
        $.each($('.bg-responsive'), function (i, v) {
            $(v).css("background-image", `url('${$(v).attr((me.windowW > 800) ? "src-web" : "src-mob")}')`);
        });

        if (me.windowW > 800) {

        } else {


        }
    },
    search: function () {
        // Dropdown change location

        $('.address-store').addClass('disable');

        let me = this;

        if (me.windowW > 800) {
            $(window).scroll(function () {
                let top = $(window).scrollTop();
                let ruler = $('#trigger-header').offset().top;

                if (top > ruler) {
                    $('.bh-main-header').addClass('active');
                } else {
                    $('.bh-main-header').removeClass('active');
                }
            });

            $(".food-card").each(function () {
                $(this).find(".voucher").insertAfter($(this).find(".status"));
            });

            $('.bh-home-contact').insertBefore('.searchBox');
            $('.bh-cart-total').insertAfter('.searchBox');
        } else {
            $('.bh-home-contact').addClass('disable');

        }
    },
    listCate: function () {
        // Dropdown change location


        let me = this;

        if (me.windowW > 800) {
            $(window).scroll(function () {
                let top = $(window).scrollTop();
                let ruler = $('#trigger-header').offset().top;

                if (top > ruler) {
                    $('.bh-main-header').addClass('active');
                } else {
                    $('.bh-main-header').removeClass('active');
                }
            });
            let swiperbnerFooter = new Swiper(".swiper-bner-footer", {
                slidesPerView: 'auto',
                spaceBetween: 15,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                freeMode: true,
                speed: 3500,
                centeredSlides: true,
                loop: true,
            });
            $(".food-card").each(function () {
                $(this).find(".voucher").insertAfter($(this).find(".status"));
            });

            $('.bh-home-contact').insertBefore('.searchBox');
            $('.bh-cart-total').insertAfter('.searchBox');
        } else {
            $('.address-store').insertBefore('.cate-info');
            $('.bh-home-contact').addClass('disable');

            let swiperbnerFooter = new Swiper(".swiper-bner-footer", {
                slidesPerView: 'auto',
                spaceBetween: 0,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                freeMode: true,
                centeredSlides: true,
                loop: true,
            });
        }
    },
    foodDetail: function () {
        // Dropdown change location

        // Plus and Minus order in PopUp Detail
        $('.minus').click(function () {
            let $input = $(this).parent().find('input');
            let count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            let $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });

        let swiperGallery = new Swiper(".swiper-gallery", {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: ".galleryBox .swiper-pagination",
                type: "fraction",
            },
            initialSlide: 0,
        });

        let me = this;

        if (me.windowW > 800) {
            $(window).scroll(function () {
                let top = $(window).scrollTop();
                let ruler = $('#trigger-header').offset().top;

                if (top > ruler) {
                    $('.bh-main-header').addClass('active');
                } else {
                    $('.bh-main-header').removeClass('active');
                }
            });
            let swiperbnerFooter = new Swiper(".swiper-bner-footer", {
                slidesPerView: 'auto',
                spaceBetween: 15,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                freeMode: true,
                speed: 3500,
                centeredSlides: true,
                loop: true,
            });

            $(".food-card").each(function () {
                $(this).find(".voucher").insertAfter($(this).find(".status"));
            });

            $('.bh-home-contact').insertBefore('.searchBox');
            $('.bh-cart-total').insertAfter('.searchBox');
        } else {
            $('.address-store').insertBefore('.galleryBox');
            $('.bh-home-contact').addClass('disable');

            let swiperbnerFooter = new Swiper(".swiper-bner-footer", {
                slidesPerView: 'auto',
                spaceBetween: 0,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                freeMode: true,
                centeredSlides: true,
                loop: true,
            });
        }
    },
    landing: function () {
        // Dropdown change location


        let me = this;

        if (me.windowW > 800) {
            $(window).scroll(function () {
                let top = $(window).scrollTop();
                let ruler = $('#trigger-header').offset().top;

                if (top > ruler) {
                    $('.bh-main-header').addClass('active');
                } else {
                    $('.bh-main-header').removeClass('active');
                }
            });

            $(".food-card").each(function () {
                $(this).find(".voucher").insertAfter($(this).find(".status"));
            });

            $('.bh-home-contact').insertBefore('.searchBox');
            $('.bh-cart-total').insertAfter('.searchBox');
        } else {
            $('.bh-home-contact').addClass('disable');
            $('.address-store').insertBefore('.coverTet').addClass('landingAD');
        }
    },
    home: function () {
        let me = this;


        // Dropdown change location

        $('.address-store .dropdown-btn').click(function () {
            $('.address-store .dropdown-box').toggleClass('active');
        })

        $('.address-store .loca-change').click(function () {
            $('.address-store .dropdown-box').toggleClass('active');
        })


        $('.tags-filter').each(function () {
            $(this).click(function () {
                $(".tags-filter").removeClass("active");
                $(this).addClass("active");
                scrollToId('head-menu');
            })
        });
        // End Auto Scroll top menu when clicked filter

        // Scoll to Top
        $('.go-to-top').click(function () {
            window.scrollTo({top: 0, behavior: 'smooth'});
        })

        // Plus and Minus order in PopUp Detail
        $('.minus').click(function () {
            let $input = $(this).parent().find('input');
            let count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            let $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });

        //Swiper Gallery in Popup Detail
        let swiperGallery = null;


        //Show more sapo in Popup Detail
        $('.show-more').click(function () {
            $('.popup-detailfood-content .sapo').addClass('active')
        });


        //check box type shiping
        $('.choose-type-order').each(function () {
            $(this).click(function () {
                $(".choose-type-order").removeClass("active");
                $(this).addClass("active");
            })
        });

        //check date shiping
        $('.pick-date').each(function () {
            $(this).click(function () {
                $(".pick-date").removeClass("active");
                $(this).addClass("active");
            })
        });


        //check Payment type
        $('.payment-type').each(function () {
            $(this).click(function () {
                $(".payment-type").removeClass("active");
                $(this).addClass("active");
            })
        });


        function autosize() {
            var el = this;
            setTimeout(function () {
                el.style.cssText = 'height:auto'
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
            }, 0);
        }


        if (me.windowW > 760) {
            let swiperbnerHome = new Swiper(".swiper-hbner", {
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000
                },
                loop: true,
                pagination: {
                    el: ".swiper-hbner .swiper-pagination",
                },
                navigation: {
                    nextEl: ".swiper-hbner .swiper-button-next",
                    prevEl: ".swiper-hbner .swiper-button-prev"
                }
            });

            $(window).scroll(function () {
                let top = $(window).scrollTop();
                let ruler = $('#trigger-header').offset().top;

                if (top > ruler) {
                    $('.bh-main-header').addClass('active');
                } else {
                    $('.bh-main-header').removeClass('active');
                }
            });

            // $(window).scroll(function () {
            //     let top = $(window).scrollTop();
            //     let ruler = $('#head-menu').offset().top;
            //
            //     if (top > ruler) {
            //         $('.tagBox').addClass('active');
            //     } else {
            //         $('.tagBox').removeClass('active');
            //     }
            // });

            let swiperDiscountFood = new Swiper(".swiper-discount", {
                slidesPerView: 4,
                spaceBetween: 25,
                slidesPerGroup: 4,
                navigation: {
                    nextEl: ".md-list .swiper-button-next",
                    prevEl: ".md-list .swiper-button-prev"
                }
            });

            let swiperMenuTags = new Swiper(".menu__tags-list", {
                slidesPerView: 'auto',
                spaceBetween: 0,
                freeMode: true,
                navigation: {
                    nextEl: ".tagBox .swiper-button-next",
                    prevEl: ".tagBox .swiper-button-prev"
                }
            });
            let swiperbnerFooter = new Swiper(".swiper-bner-footer", {
                slidesPerView: 'auto',
                spaceBetween: 15,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                freeMode: true,
                speed: 3500,
                centeredSlides: true,
                loop: true,
            });
            // $(".tagBox").sticky({topSpacing: 70});


            $(".food-card").each(function () {
                $(this).find(".voucher").insertAfter($(this).find(".status"));
            });

            $('.bh-home-contact').insertAfter('.address-store');
            $('.bh-cart-total').insertAfter('.searchBox');

            // Fancy Box Popup Detail
            $('.open-popup-atc').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-detail-atc',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        // animationEffect: 'fade-in',
                        touch: false,
                        beforeShow: function () {
                            $('body').addClass('popup-active');
                        },
                        afterShow: function () {
                            swiperGallery = new Swiper(".swiper-gallery", {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                pagination: {
                                    el: ".galleryBox .swiper-pagination",
                                    type: "fraction",
                                },
                                initialSlide: 0,
                            });


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-active');
                            swiperGallery.destroy();
                        }
                    },
                });
            });

            // Fancy Box Popup Cart
            $('.open-popup-cart').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-cart',
                    type: 'inline',
                    opts: {
                        protect: true,
                        touch: false,
                        animationDuration: 500,
                        mobile: {
                            touch: true,
                        },
                        clickOutside: true,
                        animationEffect: 'slide-in-out-right',
                        beforeShow: function () {
                            $('body').addClass('popup-cart-active');
                        },
                        afterShow: function () {


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-cart-active');
                        }
                    },
                });
            });

            // Fancy Box Popup Checkout
            $('.open-popup-checkout').off('click').click(function () {


                $.fancybox.open({
                    src: '#open-popup-checkout',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        touch: false,
                        animationEffect: 'slide-in-out-right',
                        beforeShow: function () {
                            $('body').addClass('popup-checkout-active');
                            $('.footer-bill').appendTo('.right-web');
                            $('.bill-payment').insertBefore('.footer-bill .total-checkout')
                            $('.billGroup').insertBefore('.bill-payment')
                            var textarea = document.querySelector('.note-order');

                            textarea.addEventListener('keydown', autosize);
                            $('.select-dict').select2({dropdownParent: $('#open-popup-checkout .select-user')});
                            $('.select-time').select2({
                                dropdownParent: $('#open-popup-checkout .select-timeBox'),
                                minimumResultsForSearch: -1,
                            });

                        },
                        afterShow: function () {


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-checkout-active');
                        }
                    },
                });
            });


        } else {
            let swiperbnerHome = new Swiper(".swiper-hbner", {
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000
                },
                loop: true,
                pagination: {
                    el: ".swiper-hbner .swiper-pagination",
                    type: 'fraction',
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="icn"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<g clip-path="url(#clip0_2316_1981)">\n' +
                            '<path d="M5 3.75H0.625C0.25 3.75 0 4 0 4.375V9.375C0 9.75 0.25 10 0.625 10H5C5.375 10 5.625 9.75 5.625 9.375V4.375C5.625 4 5.375 3.75 5 3.75Z" fill="white"/>\n' +
                            '<path d="M6.875 1.875H1.875V3.125H6.25V8.125H7.5V2.5C7.5 2.125 7.25 1.875 6.875 1.875Z" fill="white"/>\n' +
                            '<path d="M8.75 0H3.75V1.25H8.125V6.25H9.375V0.625C9.375 0.25 9.125 0 8.75 0Z" fill="white"/>\n' +
                            '</g>\n' +
                            '<defs>\n' +
                            '<clipPath id="clip0_2316_1981">\n' +
                            '<rect width="10" height="10" fill="white"/>\n' +
                            '</clipPath>\n' +
                            '</defs>\n' +
                            '</svg>\n</span> <span class="' + currentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + totalClass + '"></span>';
                    }
                },
                navigation: {
                    nextEl: ".swiper-hbner .swiper-button-next",
                    prevEl: ".swiper-hbner .swiper-button-prev"
                }
            });
            // $(".tagBox").sticky({topSpacing: 60});

            let swiperbnerFooter = new Swiper(".swiper-bner-footer", {
                slidesPerView: 'auto',
                spaceBetween: 0,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                freeMode: true,
                centeredSlides: true,
                loop: true,
            });
            $('.address-store').insertBefore('.bh-home_bner-top');
            // Fancy Box Popup Detail
            $('.open-popup-atc').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-detail-atc',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        animationEffect: 'slide-in-out',
                        touch: false,
                        beforeShow: function () {
                            $('body').addClass('popup-active');
                        },
                        afterShow: function () {
                            swiperGallery = new Swiper(".swiper-gallery", {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                pagination: {
                                    el: ".galleryBox .swiper-pagination",
                                    type: "fraction",
                                },
                                initialSlide: 0,
                            });


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-active');
                            swiperGallery.destroy();
                        }
                    },
                });
            });

            // Fancy Box Popup Cart
            $('.open-popup-cart').off('click').click(function () {


                $.fancybox.open({
                    src: '#popup-cart',
                    type: 'inline',
                    opts: {
                        protect: true,
                        touch: false,
                        animationDuration: 500,
                        mobile: {
                            touch: true,
                        },
                        clickOutside: true,
                        animationEffect: 'slide-in-out',
                        beforeShow: function () {
                            $('body').addClass('popup-cart-active');
                        },
                        afterShow: function () {


                        },
                        afterClose: function () {
                            $('body').removeClass('popup-cart-active');
                        }
                    },
                });
            });

            // Fancy Box Popup Checkout
            $('.open-popup-checkout').off('click').click(function () {


                $.fancybox.open({
                    src: '#open-popup-checkout',
                    type: 'inline',
                    opts: {
                        protect: true,
                        animationDuration: 500,
                        touch: false,
                        animationEffect: 'slide-in-out-right',
                        beforeShow: function () {
                            $('body').addClass('popup-checkout-active');
                            // var textarea = document.querySelector('.note-order');
                            //
                            // textarea.addEventListener('keydown', autosize);

                        },
                        afterShow: function () {
                            $('.select-dict').select2({dropdownParent: $('#open-popup-checkout .select-user')});
                        },
                        afterClose: function () {
                            $('body').removeClass('popup-checkout-active');
                        }
                    },
                });
            });


        }
    },
};


function scrollToId(id) {
    $("html, body").animate({scrollTop: $('#' + id).offset().top}, 400);
}

function scrollToObj(obj, top) {
    $("html, body").animate({scrollTop: obj.offset().top - top}, 400);
}

