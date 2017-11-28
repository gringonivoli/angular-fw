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
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'fa-wrench',
        route: '/settings',
        submenu: null
    }
];