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
                    mods: { 'body': 'yes' },
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
                    block: 'submenu',
                    content: [
                        { elem: 'item', text: 'Корма' },
                        { elem: 'item', text: 'Наполнители' },
                        { elem: 'item', text: 'Переноски' },
                        { elem: 'item', text: 'Туалеты' },
                        { elem: 'item', text: 'Когтеточки' },
                        { elem: 'item', text: 'Игрушки' },
                        { elem: 'item', text: 'Груминг' },
                        { elem: 'item', text: 'Аксессуары' },
                        { elem: 'item', text: 'Сувениры' },
                        { elem: 'item', text: 'Уценка' }
                    ]
                },
                {
                    block: 'content',
                    content: [
                        {
                            block: 'header',
                            elem: 'Интернет-магазин для кошек и их хозяев'
                        },
                        {
                            block: 'text',
                            elem: 'pokormikota.ru - это специализированный интернет-магазин для кошек и их хозяев. У нас вы сможете заказать корма и множество других товаров необходимых для содержания и ухода за вашим любимым питомцем.'
                        }
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
