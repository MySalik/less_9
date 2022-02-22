import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React from 'react';

import {PostsProvider} from './contexts/PostsContext'

import { PostCreate } from './pages/PostCreate/PostCreate';
import { PostList } from './pages/PostList/PostList';
import { PostDetail } from './pages/PostDetail/PostDetail';


import "./index.css"


const App = () => {
	return (
		<div className='container'>
			<PostsProvider>
				<Router>
					<Routes>
						<Route exact path="/" element={<PostList />} />
						<Route exact path="posts/new" element={<PostCreate />} />
						<Route exact path="posts/:id" element={<PostDetail />} />
					</Routes> 
				</Router>
			</PostsProvider>
		</div>
	  );
}


export default App;
