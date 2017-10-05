import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Landing extends Component {
	state = {}
	render() {
		const { store } = this.props
		return (
			<div>
				<h1>Store Variable -> {store.test}</h1>
			</div>
		)
	}
}

export default Landing
