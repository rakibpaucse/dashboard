import Dashboard from '../public/static/image/menus/Dashboard.svg'
import Table from '../public/static/image/menus/Table.svg'
import Complains from '../public/static/image/menus/Complains.svg'
import Orders from '../public/static/image/menus/Orders.svg'
import Reports from '../public/static/image/menus/Reports.svg'

import Pages from '../public/static/image/menus/Pages.svg'
import Users from '../public/static/image/menus/Users.svg'
import NewArrivals from '../public/static/image/menus/NewArrivals.svg'
import Summeries from '../public/static/image/menus/Summeries.svg'


// making menulist for sidebar menu
const menuList = [
    { icon : Dashboard , pageLink : '/dashboard', title : 'Dashboard'},
    { icon : Table , pageLink :'/table' , title : 'Table'},
    { icon : Complains , pageLink : '/complains', title : 'Complains' },
    { icon : Orders , pageLink : '/orders', title : 'Orders'},
    { icon : Reports , pageLink : '/reports', title : 'Reports' },

    { icon : Pages , pageLink : '/pages', title : 'Pages' },
    { icon : Users , pageLink : '/users', title : 'Users' },
    { icon : NewArrivals , pageLink : '/new-arrivals', title : 'NewArrivals' },
    { icon : Summeries , pageLink : '/summeries', title : 'Summeries' },
]

export default menuList;
