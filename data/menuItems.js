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
    { icon : Complains , pageLink : '/dashboard', title : 'Complains' },
    { icon : Orders , pageLink : '/dashboard', title : 'Orders'},
    { icon : Reports , pageLink : '/dashboard', title : 'Reports' },

    { icon : Pages , pageLink : '/dashboard', title : 'Pages' },
    { icon : Users , pageLink : '/dashboard', title : 'Users' },
    { icon : NewArrivals , pageLink : '/dashboard', title : 'NewArrivals' },
    { icon : Summeries , pageLink : '/dashboard', title : 'Summeries' },
]

export default menuList;
