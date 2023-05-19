
import HomePage from '../pages/home.jsx';
import SignIn from '../pages/signIn.jsx';
import SignUp from '../pages/signUp.jsx';
import SuccessPage from '../pages/success.jsx';
import Survey from '../pages/survey.jsx';

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
	},
	{
		path: "/survey",
		component: Survey
	},
	{
		path: "/success",
		component: SuccessPage
	}
];

export default routes;
