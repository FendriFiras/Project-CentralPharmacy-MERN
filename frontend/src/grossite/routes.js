import Index from './components/Dashboard';
import NouvelleCommande from './components/NouvelleCommande';
import Historique from './components/Historique';
import MonCompte from './components/MonCompte';


var routes = [
	{
		path: '/index',
		name: 'Acceuil',
		icon: 'ni ni-tv-2 text-primary',
		component: Index,
		layout: '/grossiste',
	},
	{
		path: '/MonCompte',
		name: 'Mon Compte',
		icon: 'ni ni-box-2 text-blue',
		component: MonCompte,
		layout: '/grossiste',
	},
	{
		path: '/PasserCommande',
		name: 'Nouvelle Commande',
		icon: 'ni ni-cart text-orange',
		component: NouvelleCommande,
		layout: '/grossiste',
	},
	{
		path: '/ListeCommandes',
		name: 'Historique',
		icon: 'ni ni-basket text-yellow',
		component: Historique,
		layout: '/grossiste',
	}
];
export default routes;
