import React from 'react'
import { Provider } from 'mobx-react'
import store from './Store'
import App from './App'

const ProviderWrapper = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

export default ProviderWrapper
