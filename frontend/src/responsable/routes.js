import Index from './components/Dashboard';
import Grossistes from './components/Grossistes';
import Commandes from './components/Commandes.js';
import Transporteurs from './components/Transporteurs';
import Responsables from './components/Responsables';
import Medicaments from './components/Medicaments';
import Depots from './components/Depots';

var routes = [


	{
		path: '/Commandes',
		name: 'Commandes',
		icon: 'ni ni-cart text-orange',
		component: Commandes,
		layout: '/responsable',
	},
	{
		path: '/Grossistes',
		name: 'Grossistes',
		icon: 'ni ni-basket text-yellow',
		component: Grossistes,
		layout: '/responsable',
	},
	{
		path: '/Medicaments',
		name: 'Medicaments',
		icon: 'ni ni-ambulance text-red',
		component: Medicaments,
		layout: '/responsable',
	},
	{
		path: '/Responsables',
		name: 'Responsables',
		icon: 'ni ni-key-25 text-info',
		component: Responsables,
		layout: '/responsable',
	},
	{
		path: '/Transporteurs',
		name: 'Transporteurs',
		icon: 'ni ni-delivery-fast text-pink',
		component: Transporteurs,
		layout: '/responsable',
	},
];
export default routes;
