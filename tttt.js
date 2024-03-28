const books = [
    {
        author: "Shavkat Mirziyoyev ",
        title: "Buyuk kelajagimizni mard va olijanob xalqimiz bilan birga quramiz",
        link: "https://drive.google.com/file/d/191SEuxQ2LfpZth-kQ8Em1ASE1kz27w1V/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/5e15c13c4d9ef.jpg",
        type: "national"
    },
    {
        author: "Alisher Navoiy",
        title: "Xamsa",
        link: "https://drive.google.com/file/d/1xhhSiS0hQmN97RGgTQ1JLzzO5eSnLwBd/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/book_img_2-1.jpg",
        type: "national"
    },
    {
        author: "O'zbekiston xalq qahramonlik dostoni",
        title: "Alpomish",
        link: "https://drive.google.com/file/d/1xhhSiS0hQmN97RGgTQ1JLzzO5eSnLwBd/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/alpomish.jpg",
        type: "national"
    },
    {
        author: "Mirkarim Osim",
        title: "To'maris",
        link: "https://drive.google.com/file/d/1xXZBlP0Dpzej72KBWCdSvrAbjn-sb7ks/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/to'maris.jpg",
        type: "national"
    },
    {
        author: "Cho'lpon",
        title: "Kecha va Kunduz ",
        link: "https://drive.google.com/file/d/1_6mdfV_vFaP6TOt3P4dweMqItIlE9XAQ/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/kecha%20va%20kunduz.jpg",
        type: "national"
    },
    {
        author: "Amir Temur",
        title: "Temur tuzuklari",
        link: "https://drive.google.com/file/d/1jzG2XfxIMyMISgw6TnvROJP3gIkTpWPP/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/temur-tuzuklari-web--500x750.jpg",
        type: "national"
    },
    {
        author: "Zahiriddin Muhammad Bobur",
        title: "Boburnoma",
        link: "https://drive.google.com/file/d/1UVV-f9Uocrtid3IC8bjBX41UKjNY-Ky0/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/boburnoma.jpg",
        type: "national"
    }, {
        author: "Abdulla Qodiriy",
        title: "O'tkan kunlar",
        link: "https://drive.google.com/file/d/1zlDDnvXkcwNUkmYD0YStxnBmsyUfUyHn/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/o'tgan%20kunlar.jpg",
        type: "national"
    },
    {
        author: "Abdulla Qodiriy",
        title: "Mehrobdan chayon",
        link: "https://drive.google.com/file/d/1MQnwUcRVfIHxeZik3UpLUTi5A1JcEJi0/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/mehrobdan%20chayon.jpg",
        type: "national"
    },
    {
        author: "O'tkir Hoshimov",
        title: "Dunyoning ishlari",
        link: "https://drive.google.com/file/d/1pUrT7YZ2HzStHvPOYxypZXlsgSOKtw1A/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/dunyoning%20ishlari.jpg",
        type: "national"
    },
    {
        author: "O'tkir Hoshimov",
        title: "Ikki eshik orasi",
        link: "https://drive.google.com/file/d/12vGU7rkIPY2pNmwMzWAmvFCSqxYAXWdE/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/ikki%20eshik%20orasi.jpg",
        type: "national"
    },
    {
        author: "Tohir Malik",
        title: "Odamiylik mulki",
        link: "https://drive.google.com/file/d/1e3pUP2JaFlwRzio3Zk1XslxVrQK0cysi/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/odamiylik%20mulki.jpg",
        type: "national"
    },
    {
        author: "Kaykovus",
        title: "Qobusnoma",
        link: "https://drive.google.com/file/d/1zJpv9de_5GX6Pjg-tNhjNb6UxZ8Nzm9r/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/qobusnoma-250x375.jpg",
        type: "national"
    }, {
        author: "Abdulla Avloniy",
        title: "Turkiy guliston yoxud axloq",
        link: "https://drive.google.com/file/d/1NusVshhHh4hsFXGYG0NF84Wp0xI_UUSl/view?usp=sharing ",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/unnamed.png",
        type: "national"
    },
    {
        author: "Rahimboy Jumaniyozov",
        title: "Notiqlik san'ati",
        link: "https://kitobxon.com/uz/kitob/notiqlik-sanati",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/notiqlik.jpg",
        type: "national"
    },
    {
        author: "Abdulla Qahhor",
        title: "Hikoyalar to'plami",
        link: "https://drive.google.com/file/d/1vwsIepBwUABfahwyQwB_ZO1ttsRL4sSp/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/abdulla%20qahhor.jpg",
        type: "national"
    },
    {
        author: "G'afur G'ulom",
        title: "Shum bola",
        link: "https://drive.google.com/file/d/1vIPP06ATkM1rT46eIHZwXxs-PAeVreGN/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/shum%20bola.jpg",
        type: "national"
    },
    {
        author: "Asqad Muxtor",
        title: "Chinor",
        link: "https://drive.google.com/file/d/1Mifac8UXezSeJInPYKLcYZgDQKWWCXGp/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/chinor.jpg",
        type: "national"
    },
    {
        author: "O'lmas Umarbekov",
        title: "Odam bo'lish qiyin",
        link: "https://drive.google.com/file/d/1At0_p6recELknmm-DEj59oJAmmmLaQyw/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/odam%20bo'lish.jpg",
        type: "national"
    },
    {
        author: "Jumaboy Rahimov",
        title: "Vatanning sheryurak bahodiri",
        link: "https://drive.google.com/file/d/1w6lgQy444752ntx2flTdSlhktSo0N5uZ/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/sheryurak.JPG",
        type: "national"
    },
    {
        author: "Abu Nasr Farobiy",
        title: "Fozil odamlar shahri",
        link: "https://drive.google.com/file/d/1Zv7BJczoTuQO3huqVAskohFmo4AV2klK/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/fozil.jpg",
        type: "national"
    },
    {
        author: "Said Ahmad",
        title: "Ufq",
        link: "https://drive.google.com/file/d/1ZTAMz6ks3eZNHNjVdztsGVu4buK4i_ev/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/ufq_lot-500x750.jpg",
        type: "national"
    },
    {
        author: "Pirimqulov Qodirov",
        title: "Avlodlar dovoni",
        link: "https://drive.google.com/file/d/18OgnuDHmKsQiLlLrMpXHbzkGtQsdHioy/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/avlodlar.jpg",
        type: "national"
    },
    {
        author: "Shayx Muhammad Sodiq Muhammad Yusuf",
        title: "Din nasihatdir",
        link: "https://drive.google.com/file/d/15NSNlIYNkAFYvOZHTxGclkwaWYscS0ue/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/din%20nasihatalri.jpg",
        type: "national"
    },
    {
        author: "Fyodor Dostoevskiy",
        title: "Jinoyat va jazo",
        link: "https://drive.google.com/file/d/1R4puDnIsPZIMTr75g3tUMTFbFCc_vyk8/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/jinoyat-va-jazo-web-500x750.jpg",
        type: "world"
    },
    {
        author: "Artur Konan Doyl",
        title: "Sherlok Xolms va doktor Uatsonning sarguzashtlari",
        link: "https://drive.google.com/file/d/1GlVusUaPQ0gXLwOT0oed1d3fvhhbAUOx/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/sherlok.jpg",
        type: "world"
    },
    {
        author: "Chingiz Aytmatov",
        title: "Asrga tatigulik kun",
        link: "https://drive.google.com/file/d/1hdnG4we3UhXpFv1_ilJHb6Tw8ghV_eja/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/asirga%20tatigulik%20kun.jpg",
        type: "world"
    },
    {
        author: "Mixail Lermontov",
        title: "Zamonamiz qahramoni",
        link: "https://drive.google.com/file/d/1gOVpMmwL-fEyh_QIOOid8MfpJymQxX16/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/zamonamiz.jpg",
        type: "world"
    },
    {
        author: "Yulian Semyonov",
        title: "Tirik qolish buyurilgan",
        link: "https://drive.google.com/file/d/1rQtxC2RmL8jXWdeujxo-ElXX06PN5ITi/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/tirik%20qolish%20buyrulgan.jpg",
        type: "world"
    },
    {
        author: "Jek London",
        title: "Martin Iden",
        link: "https://drive.google.com/file/d/18rilzN4B4ETInLaUIG8rUA2Atr-cRtOf/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/martin%20iden.jpg",
        type: "world"
    },
    {
        author: "Ernest Xeminguey",
        title: "Alvido qurol",
        link: "https://drive.google.com/file/d/1RIuP4jKSeJ_nyJXFhjs_Dzi_SDr6p0Pt/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/alvido%20qirol.jpg",
        type: "world"
    },
    {
        author: "Aleksandr Dyuma",
        title: "Graf Monte-Kristo",
        link: "https://drive.google.com/file/d/1pzXzYfukyfUQKeAEj7pT5MpdVNMIh4_t/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/aleksandr.jpg",
        type: "world"
    },
    {
        author: "Gabriel Garsia Markes",
        title: "Yolg'izlikning yuz yili",
        link: "https://drive.google.com/file/d/1chqIdertP2pcltldEO4T91I7RH7jm7d8/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/yolg'izlikni%20yuz.jpg",
        type: "world"
    },
    {
        author: "Fyodor Dostoevskiy",
        title: "Telba",
        link: "https://drive.google.com/file/d/1VR1NXGmKnb9I__xi9fo12shL7C_n5iBR/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/fyodor.jpg",
        type: "world"
    },
    {
        author: "Teodor Drayzer",
        title: "Amerika fojiasi",
        link: "https://drive.google.com/file/d/18dMg8NGYkm4IHhl1TCOZLAIy_PgqNrAu/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/amerika.jpg",
        type: "world"
    },
    {
        author: "Lev Tolstoy",
        title: "Urush va tinchlik",
        link: "https://drive.google.com/file/d/1Et1HTrZThushZXvRs-pSJzBkF-_jkajP/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/1-2.jpg",
        type: "world"
    },
    {
        author: "Ivan Turgenev",
        title: "Otalar va bolalar",
        link: "https://drive.google.com/file/d/172Yp8PDbB21JJ-g5_v7S3mjQKeubLqAs/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/otalar%20va%20boalalr.JPG",
        type: "world"
    },
    {
        author: "Uilyam Shekspir",
        title: "Otello",
        link: "https://drive.google.com/file/d/1iJuYjz1xaIqL883zuHbRZ4s1ZwE-I7aJ/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/Uilyam_Shekspir__Otello.jpeg",
        type: "world"
    },    
    {
        author: "Fridrix Shiller",
        title: "Makr va muhabbat",
        link: "https://drive.google.com/file/d/1WVvSwjEdNh_ldqqjr2CsXZ-eKrBrhIs3/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/makr%20va%20muhubbat.jpg",
        type: "world"
    },
    {
        author: "Yulian Semyonov",
        title: "Bahorning o'n yetti lahzasi",
        link: "https://drive.google.com/file/d/1qmDD0XMQ2DzJCLuGvsY2-Os8gQmA2F-9/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/bahor.jpg",
        type: "world"
    },
    {
        author: "Uilyam Shekspir",
        title: "Hamlet",
        link: "https://drive.google.com/file/d/124rJrx4YkWpkesywbKEj91ONHiLrV29U/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/hamlet.JPG",
        type: "world"
    },
    {
        author: "Fridrix Shiller",
        title: "Qaroqchilar",
        link: "https://drive.google.com/file/d/1Mw01NEjnRBdg6_6PKvRkDHh1InwU9mU4/view?usp=sharing",
        img: "https://kitoblar.akadmvd.uz/assets/img/books/qaroqchilar.JPG",
        type: "world"
    },
]