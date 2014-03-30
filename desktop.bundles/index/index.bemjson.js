({
    block: 'page',
    title: 'BEM Pokormikota',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index.css', ie: false },
        { elem: 'css', url: 'index', ie: true },
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
                        { elem: 'logo', src: 'http://pokormikota.ru/pics/logo.jpg' },
                        { elem: 'cart' },
                        { elem: 'worktime' },
                        { elem: 'adv_korma' }
                    ]
                },
                {
                    block: 'menu',
                    content: [
                        { elem: 'item', text: 'Магазин', js: true },
                        { elem: 'item', text: 'Условия доставки', js: true },
                        { elem: 'item', text: 'Бонусы', js: true },
                        { elem: 'item', text: 'Контакты', js: true },
                        {
                            elem: 'item',
                            text: 'Вход',
                            js: true,
                            mods: { pos: 'right' }
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
            block: 'footer',
            content: [
                {
                    block: 'menu',
                    content: [
                        { elem: 'item', text: 'Магазин' },
                        { elem: 'item', text: 'Условия доставки' },
                        { elem: 'item', text: 'Бонусы' },
                        { elem: 'item', text: 'Контакты' }
                    ]
                },
                { elem: 'adv_rc' },
                { elem: 'adv_rc_diary' },
                { elem: 'copyright' }
            ]
        }
    ]
})
