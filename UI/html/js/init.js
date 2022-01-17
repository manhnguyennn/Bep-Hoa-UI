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
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // We listen to the resize event
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        let me = this;

        if (me.windowW > 800) {

        } else {


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

        let swiperBannerHome = new Swiper(".swiper-hbanner", {
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: {
                delay: 3000
            },
            loop: true,
            pagination: {
                el: ".swiper-hbanner .swiper-pagination",
            },
        });

        let swiperMenuTags = new Swiper(".menu__tags-list", {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            navigation: {
                nextEl: ".menu__tags-list .swiper-button-next",
                prevEl: ".menu__tags-list .swiper-button-prev",
            },
        });

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
            $(window).scroll(function () {
                let top = $(window).scrollTop();
                let ruler = $('#trigger-header').offset().top;

                if (top > ruler) {
                    $('.bh-main-header').addClass('active');
                } else {
                    $('.bh-main-header').removeClass('active');
                }
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
            // $(".tagBox").sticky({topSpacing: 60});

            $('.address-store').insertBefore('.bannerBox');
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
                            var textarea = document.querySelector('.note-order');

                            textarea.addEventListener('keydown', autosize);

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