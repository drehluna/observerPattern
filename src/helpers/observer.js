export default class Observer {

    constructor() {
        this.observers = []
    }

    subscribe (element) {
       this.observers.push(element)
    }

    unSubscribe (element) {
       this.observers = this.observers.filter((item => item !== element))
    }

    notify (data, executeFunction) {
        executeFunction(data)
    }

    acessObservers () {
        return this.observers
    }
}