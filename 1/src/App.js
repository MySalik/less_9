import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./index.css"
import { DriftPage } from './components/DriftPage';
import { HomePage } from './components/HomePage';
import { TimeAttackPage } from './components/TimeAttackPage';
import { Menu } from './components/Menu';
import { ForzaPage } from './components/ForzaPage';


const App = () => {
	return (
		<Router>
			<div>
				<Menu />
				<div className="page">
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route exact path="/drift" element={<DriftPage />} />
						<Route exact path="/timeattack" element={<TimeAttackPage />} />
						<Route exact path="/forza" element={<ForzaPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	  );
}


export default App;
