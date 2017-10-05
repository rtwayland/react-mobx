import React from 'react'
import { render } from 'react-dom'
import ProviderWrapper from './ProviderWrapper'
// import Perf from 'react-addons-perf'

// window.Perf = Perf
// Perf.start()

const renderApp = () => {
	render(<ProviderWrapper />, document.getElementById('app'))
}

renderApp()

if (module.hot) {
	module.hot.accept('./ProviderWrapper', () => {
		renderApp()
	})
}
