import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fa-dashboard',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'fa-flag',
        route: '/countries',
        submenu: [
            {
                text: 'Select',
                icon: 'fa-expand',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'fa-flag',
                        route: 'country-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'India',
                        icon: 'fa-flag',
                        route: 'country-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Switzerland',
                        icon: 'fa-flag',
                        route: 'country-detail/Switzerland',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'fa-flag',
                route: 'country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'fa-flag',
                route: 'country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'fa-flag',
                route: 'country-list/0',
                submenu: null
            }
        ]
    },
    {
        text: 'Maintance',
        icon: 'fa-wrench',
        route: '/settings',
        submenu: [
            {
                text: 'Country List',
                icon: 'fa-th-list',
                route: 'country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'fa-cog',
                route: 'settings',
                submenu: null
            }
        ]
    }
];
