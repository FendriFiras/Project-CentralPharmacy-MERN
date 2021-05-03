import Index from './components/Dashboard';
import Grossistes from './components/Grossistes';
import Commandes from './components/Commandes.js';
import Transporteurs from './components/Transporteurs';
import Responsables from './components/Responsables';
import Medicaments from './components/Medicaments';
import Depots from './components/Depots';

var routes = [
	{
		path: '/index',
		name: 'Acceuil',
		icon: 'ni ni-tv-2 text-primary',
		component: Index,
		layout: '/admin',
	},
	{
		path: '/depot',
		name: 'Depots',
		icon: 'ni ni-box-2 text-blue',
		component: Depots,
		layout: '/admin',
	},
	{
		path: '/Commandes',
		name: 'Commandes',
		icon: 'ni ni-cart text-orange',
		component: Commandes,
		layout: '/admin',
	},
	{
		path: '/Grossistes',
		name: 'Grossistes',
		icon: 'ni ni-basket text-yellow',
		component: Grossistes,
		layout: '/admin',
	},
	{
		path: '/Medicaments',
		name: 'Medicaments',
		icon: 'ni ni-ambulance text-red',
		component: Medicaments,
		layout: '/admin',
	},
	{
		path: '/Responsables',
		name: 'Responsables',
		icon: 'ni ni-key-25 text-info',
		component: Responsables,
		layout: '/admin',
	},
	{
		path: '/Transporteurs',
		name: 'Transporteurs',
		icon: 'ni ni-delivery-fast text-pink',
		component: Transporteurs,
		layout: '/admin',
	},
];
export default routes;
