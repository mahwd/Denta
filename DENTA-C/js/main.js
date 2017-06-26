//====================================HEADER====================================

//==========mobile buttons==========
(function() {
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }
})();
//======================JQUERY======================
$(document).ready(function(){
//====================fixedMenu====================
    var navbarMenu = $('.navbar-menu');
    var bgTop = $('.bg-cover');
    if(typeof $('.bg-cover').offset() !== "undefined"){
        bgTop = $('.bg-cover').offset().top;
        $(window).scroll(function(){
            if($(window).scrollTop() > bgTop){
                navbarMenu.addClass('posFixed');
            }else{
                navbarMenu.removeClass('posFixed');
            }
        });
    }
    //================menu-hover================
    var listHover = $('.list-hover').find('li');
    listHover.hover(function(){
        var listGreater = $(this).find('span');
        $(listGreater).animate({
            marginRight:'15px',
            opacity:'1'
        },200)
    },function(){
        var listGreater = $(this).find('span');
        $(listGreater).animate({
            marginRight:'',
            opacity:''
        },100)
    });
    //=================submenu=================
    var subClick = $('.menuLeft-sub').find('b');
    $(subClick).click(function(){
        $(this).toggleClass('transformActive'); $(this).parent('a').siblings('ul').toggle();
    });
    //==========left menu search==========
    var leftSearch = $('.left-menu-input');
    var placeholder = $('.placeholder');
    $(leftSearch).click(function(e){
        placeholder.animate({
            top:'20px',
            left:'4px',
            fontSize:'12px'
        },200);
    })
    $(document).click(function(e){
        if(e.target.className!=='left-menu-input'){
            placeholder.animate({
                top:'35px',
                left:'20px',
                fontSize:'14px'
            },200);
        }
    })

    //==============left menu slide==============
    var menuLeftButton = $('.c-hamburger');
    var menuLeft = $('.menu-left');
    var menuright = $('.mobile-right');
    var rightmenu = $('.menu-right');
    var navbarMenuInput = $('.navbar-menu-input').find('input');
    var inputPlaceholder = $('.navbar-menu-input').find('span');
    var searchDiv = $('.navbar-menu-search');
    var rightButton = menuright.find('span');
    menuLeftButton.click(function(){
        var menuLeft = $('.menu-left');
        $(menuLeft).toggleClass('leftTranslate');
        rightmenu.slideUp();
    });
    $(document).click(function(event){
        if(!event.target.closest('header')){
            rightmenu.slideUp(500);
            if( $(this).find('.SearchX').hasClass('rightButtonClick2')){
                $(this).find('.searchIcon').toggleClass('rightButtonClick'); $(this).find('.SearchX').toggleClass('rightButtonClick2');
            };
            if($(this).find('.x').hasClass('rightButtonClick2')){
                $(this).find('.dots').toggleClass('rightButtonClick'); $(this).find('.x').toggleClass('rightButtonClick2');
            };
            if($('.c-hamburger').hasClass('is-active')){
                $('.c-hamburger').removeClass('is-active');
            }
            $(menuLeft).removeClass('leftTranslate');
            $('.navbar-menu-wrap').show();
            $('.navbar-menu-input').hide();
            $(inputPlaceholder).removeClass('inputPlaceholder');
        }
        if(!event.target.closest('.navbar-menu-input')){
            $(inputPlaceholder).removeClass('inputPlaceholder');
        }
    });
//========right button========
    rightButton.on('click',function(){
        if($('.c-hamburger').hasClass('is-active')){
            $('.c-hamburger').removeClass('is-active');
            $('.homeBtn-menu').toggleClass('rightButtonClick');
            $('.homeBtn-close').toggleClass('rightButtonClick2');
            $(mainButton).toggleClass('mainBtnMove');
        }
        $(this).find('.dots').toggleClass('rightButtonClick'); $(this).find('.x').toggleClass('rightButtonClick2');
    })
    menuright.click(function () {
        rightmenu.slideToggle(300);
        $(menuLeft).removeClass('leftTranslate');
    });
//===============menu button left click===============
    $('.c-hamburger').click(function(){
        if($('.x').hasClass('rightButtonClick2')){
            $('.x').toggleClass('rightButtonClick2');
            $('.dots').toggleClass('rightButtonClick');
        }
    })
//===================searchButton====================
    searchDiv.click(function(){
        $(this).find('.searchIcon').toggleClass('rightButtonClick');
        $(this).find('.SearchX').toggleClass('rightButtonClick2');
        $('.navbar-menu-wrap').toggle();
        $('.navbar-menu-input').toggle();
    });
//================navbar-menu-search================
    navbarMenuInput.click(function(){
        $(inputPlaceholder).addClass('inputPlaceholder');
    })

//===============================ABOUT PAGE===============================
//=================================================================
//====================================================================


//=================OUR-TEAM=================
    var card = $('.card');
    $('.card').hover(function() {
        var hoverCont = $(this).find('.hoverCont');
        $(hoverCont).addClass('activeHover');
    }, function() {
        var hoverCont = $(this).find('.hoverCont');
        $(hoverCont).removeClass('activeHover');
    })
//==============about slider==============
    $('.owl-carousel').owlCarousel({
        items : 3,
        margin:15,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,1],
        itemsTabletSmall : [768,1],
        itemsMobile:[479,1]
    });
    //======================HOME PAGE======================
    //=====================================================
    //=====================================================

//=========================bakground image slide=========================
    var bgArr = ['img/background-01-1920x900.jpg','img/background-02-1920x900.jpg','img/background-03-1920x900.jpg'];
    var homeBg = $('.home-bg');
    var homeDots = $('.home-slider-dots');
    $('.home-slider-dots').on('click','span',function(){
        var dotName = $(this).attr('name');
        $(homeBg).fadeOut(10,function(){
            $(homeBg).css('background-image', 'url(' + bgArr[dotName] + ')');
            $(homeBg).fadeIn(400);
        });
        $(homeDots).find('span').removeClass('dot-active');
        $(this).addClass('dot-active');
    })
    for(i=0;i<bgArr.length;i++){
        $(homeDots).append("<span name="+i+"></span>");
        $(homeDots).find('span:first-child').addClass('dot-active');
    }

//=========================main menu button click=========================
    var mainButton = $('.home-button');
    var homeMenuLeft = $('.home-menu-left');
    mainButton.click(function(){
        $(homeMenuLeft).toggleClass('leftTranslate');
        $(this).find('.homeBtn-menu').toggleClass('rightButtonClick');
        $(this).find('.homeBtn-close').toggleClass('rightButtonClick2');
        $(this).toggleClass('mainBtnMove');
        $('.c-hamburger').toggleClass('is-active');
    });
//===========left menu come back===========
    $('#homePage').click(function(e){
        if($(homeMenuLeft).hasClass('leftTranslate')){
            if(!e.target.closest('.home-button') && !e.target.closest('.home-menu-left') && !e.target.closest('.mobile-left')){
                $(homeMenuLeft).removeClass('leftTranslate');
                $(mainButton).find('.homeBtn-menu').toggleClass('rightButtonClick');
                $(mainButton).find('.homeBtn-close').toggleClass('rightButtonClick2');
                $(mainButton).toggleClass('mainBtnMove');
                $('.c-hamburger').removeClass('is-active');
            }
        }
        if($(this).find('.x').hasClass('rightButtonClick2')){
            if(!e.target.closest('.home-md-right-btn') && !e.target.closest('.menu-right')){
               $(this).find('.dots').toggleClass('rightButtonClick'); $(this).find('.x').toggleClass('rightButtonClick2');
                rightmenu.slideUp(500);
            }
        };
    });
//============home-md-left-button click============
    $('.home-md-left-btn').click(function(){
        $('.homeBtn-menu').toggleClass('rightButtonClick');
        $('.homeBtn-close').toggleClass('rightButtonClick2');
        $(mainButton).toggleClass('mainBtnMove');
    })
//=================home slider 1=================
    $('.home-owl-carousel').owlCarousel({
        items : 1,
        paginationSpeed:300,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTabletSmall : [768,1],
        itemsMobile:[479,1]
    });
//===================home slider 2===================
    $('.home-team-carousel').owlCarousel({
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,1],
        itemsTabletSmall : [768,1],
        itemsMobile:[479,1]
    });
//========================to top button========================
    var toTopBtn = $('#to-top');
    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            $(toTopBtn).css({
                transform: 'translateY(0px)'
            });
        }else{
            $(toTopBtn).css({
                transform: ''
            });
        }
    });
    toTopBtn.click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    })

//=============blog search=============
    var blogLeftSearch = $('.blog-left-menu-input');
    var blogPlaceholder = $('.blog-placeholder');
    $(blogLeftSearch).click(function(e){
        blogPlaceholder.animate({
            top:'2px',
            left:'8px',
            fontSize:'12px'
        },200);
    })
    $(document).click(function(e){
        if(e.target.className!=='blog-left-menu-input'){
            blogPlaceholder.animate({
                top:'14px',
                left:'20px',
                fontSize:'14px'
            },200);
        }
    })

//===================blog click===================
    var circles = $('.blueCircles').find('.col-md-1');
    $(circles).on("click", function(){
        $(circles).css('background','#fff');
        $(this).css('background','#18afd3');
    })

////////////////////////MODAL///////////////////////


    $('.galeryImg').click(function(){
        $('#galeryModal').css('display','block');
        var ss = $(this).attr('src');
        $('#imgCentral').attr('src', ss );
    });



    $('#close').click(function() {
        $('#galeryModal').css('display','none');
    });
    $('#galeryModal').click(function(e){
        var clickedTarget = e.target;
        if ($(clickedTarget).attr('id') == "galeryModal" ) {
            $('#galeryModal').css('display','none');
        }
    });
    $(document).ready(function(){
        $(document).scroll(function(){
            $('#galeryModal').css('display','none');
        })
    });
//==============skillbar==============
    $('.skillbars').each(function(){
        $(this).find('.skillbar-bars').animate({
            width:$(this).attr('data-percent')
        },2000);
    });

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*==================================================================================================
================================        START    SERVICES    START   =============================
==================================================================================================*/
    var content1 = $(".content1");
    var content2 = $(".content2");
    var content3 = $(".content3");
    var content4 = $(".content4");
    var content5 = $(".content5");
    var content6 = $(".content6");
    var contentsArr = [content1,content2,content3,content4,content5,content6];
    var list1 = $(".list li a");
    var list2 = $(".optionService a");
    var optionService = $(".optionService");
    var optionServiceActive = false;
    var optionServiceBtn = $(".optionServiceBtn");
    var activeLink = $(".list li a");
    var clickValue = 0;
    var disclickValue = 0;
    optionServiceBtn.on("click",function(){
        if(!optionServiceActive){
            $(this)
                .css({
                "background" : "#18afd3",
                "color" : "white"
            });
            optionService.show();
        }else{
            optionServiceBtn
                .css({
                "background" : "#fff",
                "color" : "#868686"
            });
            optionService.hide();
        }
        optionServiceActive = !optionServiceActive;
    })
    $(document).click(function(e){
        if(!e.target.closest(".optionServiceBtn")){
            optionServiceBtn
                .css({
                "background" : "#fff",
                "color" : "#868686"
            });
            $(".optionService").hide();
            optionServiceActive = !optionServiceActive;
        }
    })
    function listConfig(){
        $(list1[disclickValue])
            .css({
            "border":"none",
            "color":"#868686",
        });
        $(list1[clickValue]).css("color","#000");
        if(window.innerWidth >= 1200){
            $(list1[clickValue])
                .css({
                "border-right":"1px solid #f57e57",
            });
        }
        if(991< window.innerWidth && window.innerWidth < 1200){
            $(list1[clickValue])
                .css({
                "border-bottom":"1px solid #f57e57",
            });
        }
        $(list2[disclickValue]).removeClass("active");
        $(list2[clickValue]).addClass("active");
    }
    list1.on("click",function () {
        clickValue = $(this).attr("data-value")
        if(clickValue != disclickValue){
            contentsArr[disclickValue].hide("slow");
            contentsArr[clickValue].show("slow");
            listConfig();
            disclickValue = clickValue;
        }
    });
    list2.on("click",function(){
        clickValue = $(this).attr("data-value");
        if(clickValue != disclickValue){
            contentsArr[disclickValue].hide("slow");
            contentsArr[clickValue].show("slow");
            listConfig();
            disclickValue = clickValue;
        }
    })
    list1.mouseenter(function(){
        $(this).css("color","#000");
    })


    list1.mouseleave(function(){
        if($(this).attr("data-value") != clickValue){
            $(this).css("color","#868686");
        }
    })
    $(window).on("resize",function(){
        list1.css("border","none");
        if(window.innerWidth >= 1200){
            $(list1[clickValue]).css("border-right","1px solid #f57e57");
        }

        if(991< window.innerWidth && window.innerWidth < 1200){
            $(list1[clickValue]).css("border-bottom","1px solid #f57e57");
        }
    });

    /*==================================================================================================
================================        END    SERVICES    END   =============================
==================================================================================================*/



    /*==================================================================================================
================================        START    TABS ACCARDIONS    START   =============================
==================================================================================================*/





    var tabsTxtArr = [
        "Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page. It will tell you lots of interesting things about our company, its products and services, highly professional staff and happy customers. Our site design and navigation has been thoroughly thought out. The layout is aesthetically appealing, contains concise texts in order not to take your precious time.",

        "At SANA Medical Center we commit ourselves as a medical home for your kids and strive to ensure that each child receives care at the appropriate time in the appropriate setting. We strive to provide the best possible quality care to any child and their family with compassion and kindness.",

        "The experienced dentists of SANA Medical Center are your partners in dental care; they will work with you to give you a healthy and dazzling smileâ€”making dental care both accessible and affordable. Whether youâ€™re coming to our office for routine cleanings or are in need of restorative dentistry or oral surgery, our goal is to offer quality dental care and unmatched customer service, taking the time to address your concerns and answer your questions.",

        "Painful feelings such as anxiety, anger, depression, low self-esteem, and tension are a normal part of being human and can affect anyone. Sometimes these feelings are temporary and can be eased by rest, relaxation, exercise, good nutrition, and support of trusted friends. At other times, stressors, relationships, or past family experiences cannot be managed so easily and become overwhelming. When this happens, and you find it hard to function, you may want to seek professional help."

    ]

    var AccardionsTxtArr=[
        "Denta-C is not a free clinic. We are non-profit community dental center. We offer a sliding fee scale to uninsured patients based upon family size and income.",
        "Denta-C is not a free clinic. We are non-profit community dental center. We offer a sliding fee scale to uninsured patients based upon family size and income.",
        "Denta-C is not a free clinic. We are non-profit community dental center. We offer a sliding fee scale to uninsured patients based upon family size and income.",
        "Denta-C is not a free clinic. We are non-profit community dental center. We offer a sliding fee scale to uninsured patients based upon family size and income."
    ]



    // ==================              start  TAB LINE         ===============
    // tabLine variables
    var tabLineUlLi = $(".tabLine ul li");
    var tabLineP = $(".tabLine p");
    var prevTabLineLi = $(tabLineUlLi[0]);
    var currentTabLineLi = $(tabLineUlLi[0]);

    // tabLine Accardion variables
    var tabLineAccardionItem = $(".tabLineAccardion .accardionSimpleItem .aSIHeader");
    var tabLineAccardionItemSlide = $(".tabLineAccardion .accardionSimpleItem .aSIFoot");
    var prevTabLineAccItem = $(tabLineAccardionItem[0]);
    var currentTabLineAccItem = $(tabLineAccardionItem[0]);
    var activeTabLineAcc = true;

    tabLineUlLi.on("click",function(){
        currentTabLineLi = $(this);
        tabLineP.html(tabsTxtArr[currentTabLineLi.index()]);
        tabLineliConfig();

        $(tabLineAccardionItemSlide[tabLineUlLi.index(prevTabLineLi)]).slideUp();
        $(tabLineAccardionItemSlide[tabLineUlLi.index(currentTabLineLi)]).slideDown();

        $(tabLineAccardionItem[tabLineUlLi.index(prevTabLineLi)]).find("i").removeClass( "fa fa-minus" ).addClass( "fa fa-plus" );
        $(tabLineAccardionItem[tabLineUlLi.index(currentTabLineLi)]).find("i").removeClass( "fa fa-plus" ).addClass("fa fa-minus");
        prevTabLineAccItem = $(tabLineAccardionItem[tabLineUlLi.index(currentTabLineLi)]);


        prevTabLineLi = currentTabLineLi;


    });

    function tabLineliConfig(){
        prevTabLineLi.find("a")
            .css({
            "color":"#868686",
            "border":"none"
        });

        currentTabLineLi.find("a")
            .css({
            "color":"#434445",
            "border-bottom":"1px solid #f57e57"
        })

    }

    tabLineAccardionItem.on("click",function(){
        currentTabLineAccItem = $(this);
        $(tabLineAccardionItemSlide[tabLineAccardionItem.index(prevTabLineAccItem)]).slideUp("slow");
        prevTabLineAccItem.find("i").removeClass( "fa fa-minus" ).addClass( "fa fa-plus" );
        if(tabLineAccardionItem.index($(prevTabLineAccItem)) != tabLineAccardionItem.index($(currentTabLineAccItem)) || !activeTabLineAcc){
            $(tabLineAccardionItemSlide[tabLineAccardionItem.index($(this))]).slideDown("slow");
            currentTabLineAccItem.find("i").removeClass( "fa fa-plus" ).addClass("fa fa-minus");
            activeTabLineAcc = true;

            if(tabLineAccardionItem.index($(prevTabLineAccItem)) != tabLineAccardionItem.index($(currentTabLineAccItem))){
                // Tabdada eyni qaydada deyiwme
                tabLineP.html(tabsTxtArr[tabLineAccardionItem.index($(this))]);
                prevTabLineLi = currentTabLineLi;
                currentTabLineLi = $(tabLineUlLi[tabLineAccardionItem.index($(this))]);
                tabLineliConfig();
                prevTabLineLi = currentTabLineLi;
            }
        }else{
            activeTabLineAcc = false;
            // Tabda hecne olmamasi
            tabLineP.html("");
        }
        prevTabLineAccItem = currentTabLineAccItem;

    })
    //  ======================        END TABLINE        ==========================



    //  ======================        Start TABHOR       =======================

    var THUlLi = $(".tabHor ul li");
    var THP = $(".tabHor p");

    var prTHLi = $($(".tabHor ul li")[0]);
    var crTHLi = $($(".tabHor ul li")[0]);


    //THACC VARIABLES
    var THAccBtn = $(".tabHorAcc .accardionSimpleItem .aSIHeader");
    var THAccItem = $(".tabHorAcc .accardionSimpleItem .aSIFoot");
    var prTHACC = $(THAccBtn[0]);
    var crTHACC = $(THAccBtn[0]);
    var activTHAcc = true;

    function THLiConfing(){
        prTHLi.find("a").css({
            "color":"#868686",
            "border":"none"
        });
        if(window.innerWidth > 991 && window.innerWidth < 1200){
            crTHLi.find("a").css({
                "color":"#434445",
                "border-bottom":"1px solid #f57e57"
            });
        }
        if(window.innerWidth >= 1200){
            crTHLi.find("a").css({
                "color":"#434445",
                "border-right":"1px solid #f57e57"
            });
        }
    }
    $(window).on("resize",function(){
        prTHLi.find("a").css({
            "color":"#868686",
            "border":"none"
        });
        if(991< window.innerWidth && window.innerWidth < 1200){
            crTHLi.find("a").css({
                "color":"#434445",
                "border-bottom":"1px solid #f57e57"
            });
        }
        if(window.innerWidth >= 1200){
            crTHLi.find("a").css({
                "color":"#434445",
                "border-right":"1px solid #f57e57"
            });
        }

    });

    THUlLi.on("click",function(){
        crTHLi = $(this);
        THP.html(tabsTxtArr[THUlLi.index($(this))]);
        THLiConfing();



        $(THAccItem[THUlLi.index(prTHLi)]).slideUp();
        $(THAccItem[THUlLi.index(crTHLi)]).slideDown();

        $(THAccBtn[THUlLi.index(prTHLi)]).find("i").removeClass( "fa fa-minus" ).addClass( "fa fa-plus" );
        $(THAccBtn[THUlLi.index(crTHLi)]).find("i").removeClass( "fa fa-plus" ).addClass("fa fa-minus");

        prTHACC = $(THAccBtn[THUlLi.index(crTHLi)]);


        prTHLi = crTHLi;
    })


    THAccBtn.on("click",function(){
        crTHACC = $(this);
        $(THAccItem[THAccBtn.index(prTHACC)]).slideUp("slow");
        prTHACC.find("i").removeClass( "fa fa-minus" ).addClass( "fa fa-plus" );
        if(THAccBtn.index($(prTHACC)) != THAccBtn.index($(crTHACC)) || !activTHAcc){
            $(THAccItem[THAccBtn.index($(this))]).slideDown("slow");
            crTHACC.find("i").removeClass( "fa fa-plus" ).addClass("fa fa-minus");
            activTHAcc = true;

            if(THAccBtn.index($(prTHACC)) != THAccBtn.index($(crTHACC))){
                // Tabdada eyni qaydada deyiwme
                THP.html(tabsTxtArr[THAccBtn.index($(this))]);
                prTHLi = crTHLi;
                crTHLi = $(THUlLi[THAccBtn.index($(this))]);
                THLiConfing();
                prTHLi = crTHLi;
            }
        }else{
            activTHAcc = false;
            // Tabda hecne olmamasi
            THP.html("");
        }
        prTHACC = crTHACC;

    })



    //  ======================        END TABHOR       =======================

    var accCbtn = $(".accardionClass .aSIHeader");
    var accCitem = $(".accardionClass .aSIFoot");
    var prAccC = $($(".accardionClass .aSIHeader")[0]);
    var crAccC = $($(".accardionClass .aSIHeader")[0]);
    var activAccC = true;

    accCbtn.on("click",function(){
        crAccC = $(this);
        accCitem.slideUp("slow");
        accCbtn.find("i").removeClass( "fa fa-minus" ).addClass( "fa fa-plus" );
        if(accCbtn.index($(prAccC)) != accCbtn.index($(crAccC)) || !activAccC){
            $(accCitem[accCbtn.index($(this))]).slideDown("slow");
            $(this).find("i").removeClass( "fa fa-plus" ).addClass("fa fa-minus");
            activAccC = true;
        }else{
            activAccC = false;
        }

        prAccC = crAccC;


    })


    var accVbtn = $(".accardionAlternativ .aSIHeader");
    var accVitem = $(".accardionAlternativ .aSIFoot");
    var prAccV = $($(".accardionAlternativ .aSIHeader")[0]);
    var crAccV = $($(".accardionAlternativ .aSIHeader")[0]);
    var activAccV = false;

    accVbtn.on("click",function(){
        crAccV = $(this);
        accVitem.slideUp("slow");
        accVbtn.find("i").removeClass( "fa fa-minus" ).addClass( "fa fa-plus" );
        if(accVbtn.index($(prAccV)) != accVbtn.index($(crAccV)) || !activAccV){
            $(accVitem[accVbtn.index($(this))]).slideDown("slow");
            $(this).find("i").removeClass( "fa fa-plus" ).addClass("fa fa-minus");
            activAccV = true;
        }else{
            activAccV = false;
        }

        prAccV = crAccV;


    })
 /*==================================================================================================
================================        END    TABS ACCARDIONS    END   =============================
==================================================================================================*/



});

//map
function initMap() {
    var uluru = {lat: 40.3856253, lng: 49.98125870000001};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title:'Yeni Guneshli'
    });
    var infoWindow = new google.maps.InfoWindow({
        content:'Kimi tapdunnn sennnn?'
    })
    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    })
}
/*==================================================================================================
================================        START    TimeTABLE    START   =============================
==================================================================================================*/
adultDentist=[
    //Monday
    [    //Hekim.........//Bashlama vaxti .................//Bitme vaxti
        ["Eric Synder",new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00")]    ,
        ["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00")]
    ],
    //Tuesday
    [
        ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00")]
    ],
    //Wednesday
    [

        ["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00")]    ,
    ],
    //THursday
    [
        ["Carolyn  Hunt",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00")]

    ],
    //Friday

    [
        ["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00")]    ,
        ["Christina Holland",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00")]
    ],
    //Saturday
    [
        ["Eric Synder",new Date("April 22, 2017 16:00:00"),new Date("April 22, 2017 18:00:00")],
        ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00")]
    ],
    //Sunday
    [
        ["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00")]    ,
        ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00")]
    ]

]

dentist=[
    //Monday
    [
        ["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00")]
    ],
    //Tuesday
    [
        ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00")],
        ["Carolyn  Hunt",new Date("April 18, 2017 014:00:00"),new Date("April 18, 2017 18:00:00")],
    ],
    //Wednesday
    [
        ["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00")]    ,
        ["Eric Synder",new Date("April 19, 2017 09:00:00"),new Date("April 19, 2017 11:00:00")]    ,
    ],
    //THursday
    [
        ["Carolyn  Hunt",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00")]

    ],
    //Friday
    [
        ["Christina Holland",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00")]
    ],
    //Saturday
    [
        ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00")]


    ],
    //Sunday

    [
        ["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00")]    ,
        ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00")]
    ]

]

dentalHygienist=[
    //Monday
    [
        ["Eric Synder",new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00")]    ,
        ["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00")]
    ],
    //Tuesday
    [
        ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00")]
    ],
    //Wednesday
    [
        ["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00")]    ,
    ],
    //THursday
    [
        ["Carolyn  Hunt",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00")]

    ],
    //Friday
    [
        ["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00")]    ,
        ["Christina Holland",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00")]
    ],
    //Saturday
    [
        ["Eric Synder",new Date("April 22, 2017 16:00:00"),new Date("April 22, 2017 18:00:00")],
        ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00")]


    ],
    //Sunday
    [
        ["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00")]    ,
        ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00")]
    ]
]

cosmeticDentist=[
    //Monday
    [

        ["Eric Synder",new Date("April 17, 2017 10:00:00"),new Date("April 17, 2017 12:00:00")]    ,
        ["Christina Holland",new Date("April 17, 2017 16:00:00"),new Date("April 17, 2017 18:00:00")]
    ],
    //Tuesday
    [
        ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00")]
    ],
    //Wednesday
    [
        ["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00")]    ,
        ["Eric Synder",new Date("April 19, 2017 08:00:00"),new Date("April 19, 2017 10:00:00")]    ,
    ],
    //THursday
    [
        ["Carolyn  Hunt",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00")]

    ],
    //Friday

    [
        ["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00")]    ,
        ["Christina Holland",new Date("April 21, 2017 12:00:00"),new Date("April 21, 2017 16:00:00")]
    ],
    //Saturday
    [
        ["Eric Synder",new Date("April 22, 2017 12:00:00"),new Date("April 22, 2017 16:00:00")],
        ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 11:00:00")]

    ],
    //Sunday

    [
        ["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00")]    ,
        ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00")]
    ]
]

pediatricDentist=[
    //Monday
    [
        ["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00")]
    ],
    //Tuesday
    [
        ["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00")]
    ],
    //Wednesday
    [
        ["Eric Synder",new Date("April 19, 2017 14:00:00"),new Date("April 19, 2017 17:00:00")]
    ],
    //THursday
    [
        ["Carolyn  Hunt",new Date("April 20, 2017 10:00:00"),new Date("April 20, 2017 13:00:00")],
        ["Eric Synder",new Date("April 20, 2017 15:00:00"),new Date("April 20, 2017 18:00:00")]

    ],
    //Friday
    [
        ["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00")]    ,
        ["Christina Holland",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00")]
    ],
    //Saturday
    [
        ["Eric Synder",new Date("April 22, 2017 16:00:00"),new Date("April 22, 2017 18:00:00")],
        ["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00")]

    ],
    //Sunday

    [
        ["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00")]    ,
        ["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00")]
    ]
]

////////////////////////////////////////////////////////////////////////////////

doctors=[adultDentist,dentist,dentalHygienist,cosmeticDentist,pediatricDentist]


// Tdleri doldururuq
for(var i=1;i<=10;i++){
    tr=$("#timetable table tbody tr:nth-child("+i+")")
    for(var j=0;j<7;j++){
        $('<td></td>').appendTo(tr);
    }
}

/////////////////////////////////////////////////////////////////////////////

function PlaceTimeTable(index){
    //Birinci tdden bashqa (mes 09:00-10:00) hamisini sil
    $("#timetable table tbody tr td:not(:nth-child(1)").empty()

    //Uygun timetableleri doldurur
    for(var j=0; j<7;j++){
        for(var i=0; i<doctors[index][j].length;i++){
            var color="#000"
            var src = null;
            var status = null;
            //Random Color
            if(doctors[index][j][i][0]=="Eric Synder"){
                src = "img/timeT1.jpg";
                color="#18afd3";
                status = "Dentist";
            }else if(doctors[index][j][i][0]=="Carolyn  Hunt"){
                src = "img/timeT2.jpg";
                color = "#0788a7";
                status = "Dental Hygienist";

            }else if(doctors[index][j][i][0]=="Christina Holland"){
                color = "#f57e57";
                src = "img/timeT3.jpg";
                status = "Pediatric Dentist";

            }

            //uygun dentisti goturur
            var dentist=doctors[index][j][i];
            //Uzunlugunu teyin edir
            var lengthOfDiv=dentist[2].getHours()-dentist[1].getHours();
            //Start positionu hesablayir
            var startPosition= dentist[1].getHours()-8;
            //Div yaradir
            $("<div></div>",{

                class: "doctor",
                style: "background: "+color+"; height:"+(100*lengthOfDiv)+"px",

            }).append('<img class="img-circle" src="'+src+'"; />').append("<h3>"+dentist[0]+"</h3>").append("<p>"+status+"</p>").
            //Buralari zehmet chekib etude  gelerdiz basha dusherdiz niye buna append edirem
            appendTo($("#timetable table tbody tr:nth-child("+(startPosition+1)+") td:nth-child(+"+(j+2)+")"));


        }
    }
}

$("#timetable ul li").click(function(){
    $('#timetable ul li').find("i").removeClass("fa fa-plus");
    $('#timetable ul li').find("i").removeClass("fa fa-minus");
    $('#timetable ul li').find("i").addClass("fa fa-plus");
    $(this).find("i").addClass("fa fa-minus");
    //Nechenchi tabdi onu tapir
    var index=$("#timetable ul li").index($(this));
    //Hemin tabi uygun fuksiyaya gonderir
    PlaceTimeTable(index)
    $("#timetable ul li").removeClass("active")
    $(this).addClass("active")
    //Eger sehife kichikdise table-i clickden sonraya append edir
    if($(window).width()+20<992){
        $(this).after($("#timetable #tableScroll"));
    }
})

//Resize olanda ve bashlayanda yoxlayirki accordion yaratmalidi yayox

function CheckForAccordion(){
    if($(window).width()+20<992){
        // accordion qurulushu yaradir sonrasin ozunuz edersiz
        $('#timetable ul li').css("display",'block')



        //table-i active classdan sonraya append edir
        $('#timetable ul .active').after($("#timetable #tableScroll"));

    }
    else{
        $('#timetable ul li').css("display",'inline-block')
        //Ekrani boyudende table-i yerine getirr
        $('#timetable').append($('#timetable #tableScroll'));

    }

}

$(document).ready(function(){
    PlaceTimeTable(0);
    CheckForAccordion()
})

$(window).resize(function(){
    CheckForAccordion()
})



/*==================================================================================================
================================        END    TimeTABLE    END   =============================
==================================================================================================*/

$(document).ready(function() {

    $('#calendar').fullCalendar({
        defaultDate: '2017-04-12',
        editable: true,
        eventLimit: true

    });

});



