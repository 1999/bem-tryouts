({
    block: 'page',
    title: 'BEM tryouts',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index.css', ie: false },
        { elem: 'css', url: 'index', ie: true },
        { elem: 'css', url: 'reset.css', ie: false },

        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'ymodules.js' },
        { elem: 'js', url: 'index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content: [
        {
            block: 'body-wrapper',
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            block: 'logo',
                            image: 'http://pokormikota.ru/pics/logo.jpg'
                        },
                        { elem: 'cart' },
                        { elem: 'worktime' },
                        { elem: 'adv_korma' }
                    ]
                },
                {
                    block: 'menu',
                    mods: { 'body': 'main' },
                    content: [
                        {
                            elem: 'item',
                            text: 'Магазин',
                            url: 'http://pokormikota.ru/shop',
                            cls: ['active']
                        },
                        {
                            elem: 'item',
                            text: 'Условия доставки',
                            url: 'http://pokormikota.ru/delivery'
                        },
                        {
                            elem: 'item',
                            text: 'Бонусы',
                            url: 'http://pokormikota.ru/bonus'
                        },
                        {
                            elem: 'item',
                            text: 'Контакты',
                            url: 'http://pokormikota.ru/contacts'
                        },

                        {
                            elem: 'item',
                            text: 'Вход',
                            url: 'http://pokormikota.ru/login',
                            mods: { 'bind': 'right' }
                        }
                    ]
                },
                {
                    block: 'content-wrapper',
                    content: [
                                {
                            block: 'menu',
                            mods: { 'body': 'sub' },
                            content: [
                                {
                                    'elem': 'item',
                                    'text': 'Корма',
                                    'url': 'http://pokormikota.ru/shop/korma'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Наполнители',
                                    'url': 'http://pokormikota.ru/shop/chistota-i-poryadok'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Переноски',
                                    'url': 'http://pokormikota.ru/shop/perenoski'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Туалеты',
                                    'url': 'http://pokormikota.ru/shop/tualety'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Когтеточки',
                                    'url': 'http://pokormikota.ru/shop/domiki-i-kogtetochki'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Игрушки',
                                    'url': 'http://pokormikota.ru/shop/igrushki-i-suveniry'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Груминг',
                                    'url': 'http://pokormikota.ru/shop/grooming'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Аксессуары',
                                    'url': 'http://pokormikota.ru/shop/oshejniki-i-shlejki'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Сувениры',
                                    'url': 'http://pokormikota.ru/shop/souvenirs'
                                },
                                {
                                    'elem': 'item',
                                    'text': 'Уценка',
                                    'url': 'http://pokormikota.ru/shop/utsenka'
                                }
                            ]
                        },
                        {
                            block: 'header-text',
                            text: 'Интернет-магазин для кошек и их хозяев',
                            level: 1
                        },
                        {
                            block: 'paragraph',
                            js: true,
                            content: [
                                'pokormikota.ru - это специализированный интернет-магазин для кошек и их хозяев. У нас вы сможете заказать корма и множество других товаров необходимых для содержания и ухода за вашим любимым питомцем.',
                                'Всем хорошо известно, что правильное и полноценное питание, гарантирует хорошее настроение и самочувствие вашего любимчика. Поэтому в нашем интернет-магазине мы предлагаем корм для кошек премиум класса и супер-премиум класса.'
                            ]
                        },
                        {
                            block: 'header-text',
                            text: 'Самые заказываемые товары',
                            level: 2
                        },
                    ]
                }
            ]
        },
        {
            block: 'menu',
            mods: { 'footer': 'yes' },
            content: [
                {
                    elem: 'item',
                    text: 'Магазин',
                    url: 'http://pokormikota.ru/shop'
                },
                {
                    elem: 'item',
                    text: 'Условия доставки',
                    url: 'http://pokormikota.ru/delivery'
                },
                {
                    elem: 'item',
                    text: 'Бонусы',
                    url: 'http://pokormikota.ru/bonus'
                },
                {
                    elem: 'item',
                    text: 'Контакты',
                    url: 'http://pokormikota.ru/contacts'
                },

                {
                    elem: 'item',
                    content: [{
                        block: 'adv-rc',
                        url: 'http://pokormikota.ru/pics/banners/rc_logo120.jpg'
                    }]
                },
                {
                    elem: 'item',
                    content: [{
                        block: 'adv-rc',
                        url: 'http://pokormikota.ru/pics/banners/RC-120X45.gif'
                    }]
                },

                {
                    elem: 'item',
                    text: '&copy; 2010-2014 &laquo;pokormikota.ru (интернет-магазин)&raquo;',
                    mods: { 'bind': 'right' }
                }
            ]
        }
    ]
})
