export type NavSection = {
    /** セクションタイトル 翻訳キー */
    title: string;
    /** アイテム */
    items: NavItem[];
};

/** ナビゲーションバー アイテム */
export type NavItem = {
    i18n: string;
    description?: string;
    to: string;
    type: string;
    external: boolean;
    current: boolean;
    items: NavItem[];
};

/** ナビゲーションバー コンテンツ */
export default <{
    /** ナビゲーションの真ん中のリンク */
    center: NavItem[];
    /** 
     * ナビゲーションの右端のリンク
     * （SNSとかGithubのリンクとか）
     */
    right: NavItem[];
}> {
    center: [
        {
            i18n: 'inicio',
            to: '/',
            type: 'single',
            external: false,
        },
        {
            i18n: 'sobre nosotros',
            type: 'group',
            items: [
                {
                    i18n: 'sobre nosotros',
                    to: '/about/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/about/',
                },
                {
                    i18n: 'aliados',
                    to: '/alies/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/alies/',
                }
            ]
        },
        {
            i18n: 'servicios',
            type: 'group',
            items: [
                {
                    i18n: 'Consultoria en IA',
                    to: '/about/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/about/',
                },
                {
                    i18n: 'Capacitación en IA',
                    to: '/alies/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/alies/',
                },
                {
                    i18n: 'SAAS',
                    to: '/SAAS/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/SAAS/',
                },
                {
                    i18n: 'plataforma',
                    to: '/platform/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/platform/',
                }
            ]
        },
        {
            i18n: 'soluciones',
            type: 'group',
            items: [
                {
                    i18n: 'Legal tech',
                    to: '/Legaltech/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/Legaltech/',
                },
                {
                    i18n: 'Legal tech',
                    to: '/Legaltech/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/Legaltech/',
                },
                {
                    i18n: 'Healthtech',
                    to: '/Healthtech/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/Healthtech/',
                },
                {
                    i18n: 'Natural language processing',
                    to: '/NLP/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/NLP/',
                },
                {
                    i18n: 'Seguridad ciudadana',
                    to: '/Seguridadciudadana/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/Seguridadciudadana/',
                },
                {
                    i18n: 'Gestión documental',
                    to: '/Gestiondocumental/',
                    type: 'single',
                    external: false,
                    // current: useRoute().path === '/Gestiondocumental/',
                }
            ]
        },
        {
            i18n: 'industrias',
            to: '/industry/',
            type: 'single',
            external: false,
            // current: useRoute().path.includes('/industry/'),
        },
        {
            i18n: 'casos de uso',
            to: '/casesuse/',
            type: 'single',
            external: false,
            // current: useRoute().path.includes('/casesuse/'),
        },
        {
            i18n: 'casos de exito',
            to: '/casessuscess/',
            type: 'single',
            external: false,
            // current: useRoute().path.includes('/casessuscess/'),
        },
        {
            i18n: 'blog',
            to: '/blog/',
            type: 'single',
            external: false,
            // current: useRoute().path.includes('/blog/'),
        },
    ]
};