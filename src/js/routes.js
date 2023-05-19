
import HomePage from '../pages/home.jsx';
import SignIn from '../pages/signIn.jsx';
import SignUp from '../pages/signUp.jsx';

var routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: "/signIn",
		component: SignIn
	},
	{
		path: "/signUp",
		component: SignUp
	}
];

export default routes;
