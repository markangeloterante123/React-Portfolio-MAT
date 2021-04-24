
import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Index from './components/pages/Index'

import Data from './Data'

const App  = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Data} />
			</Switch>
		</>
	)
}

export default App