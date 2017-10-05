import { observable } from 'mobx'

class Store {
	@observable test = 'Hello World'
}

const store = (window.store = new Store())

export default store
