({
    block: 'b-page',
    title: 'BEM Pokormikota',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
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
                        { elem: 'logo', src: 'http://pokormikota.ru/pics/logo.jpg' },
                        { elem: 'cart' },
                        { elem: 'worktime' },
                        { elem: 'adv_korma' }
                    ]
                },
                {
                    block: 'menu',
                    content: [
                        { elem: 'Магазин' },
                        { elem: 'Условия доставки' },
                        { elem: 'Бонусы' },
                        { elem: 'Контакты' },
                        {
                            elem: 'Вход',
                            mods: { pos: 'right' }
                        }
                    ]
                },
                {
                    block: 'submenu',
                    content: [
                        { elem: 'Корма' },
                        { elem: 'Наполнители' },
                        { elem: 'Переноски' },
                        { elem: 'Туалеты' },
                        { elem: 'Когтеточки' },
                        { elem: 'Игрушки' },
                        { elem: 'Груминг' },
                        { elem: 'Аксессуары' },
                        { elem: 'Сувениры' },
                        { elem: 'Уценка' }
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
            block: 'footer',
            content: [
                {
                    block: 'menu',
                    content: [
                        { elem: 'Магазин' },
                        { elem: 'Условия доставки' },
                        { elem: 'Бонусы' },
                        { elem: 'Контакты' }
                    ]
                },
                { elem: 'adv_rc' },
                { elem: 'adv_rc_diary' },
                { elem: 'copyright' }
            ]
        }
    ]
})
