import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import Post from './components/Post';
const MainPage = lazy(() => import('./pages/MainPage'));

function App() {
	return (
		<div className="App">
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path="/" component={MainPage} />
						<Route path="/about" component={MainPage} />
					</Switch>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
