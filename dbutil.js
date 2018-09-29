var uuid = require('uuid')
var loki = require('lokijs')
var db = new loki('test.json', {
	autoload: true,
	autosave: true, 
	autosaveInterval: 4000 // save every four seconds for our example
})
var orders = db.getCollection("orders");
if (orders === null) {
    orders = db.addCollection("orders");
}
var accounts = db.getCollection("accounts");
if (accounts === null) {
    accounts = db.addCollection("accounts");
}

class Order {
    constructor(id, {request_date, location, items, account, source_system}) {
        this.id = id;
        this.request_date = request_date;
        this.location = location;
        this.source_system = source_system;
        this.account = account; //object
        this.items = items; //array of objects
    }
}
class Account {
    constructor(id, {email, cell, name}) {
        this.id = id;
        this.email = email;
        this.cell = cell;
        this.name = name;
    }
}
const loadOrder = (id) => {
    var order = orders.findOne( {'id':id} )
    if (order) {
        var account = accounts.findOne( { 'id': order.account_id })
        order.customer = account
    }
    return order        
}
const queryOrders = (location) => {
    var results = null
    if (location) {
        results = orders.find({ 'location': location })
    } else {
        results = orders.data()
    }
    results.forEach(element => {
        if (element.account_id) {
            element.customer = accounts.findOne({ 'id': element.account_id})
        }
    })
    return results
}
const upsertOrder = (input) => {
    if (input.id) {
        var order = orders.findOne({ 'id': input.id })
        order = Object.assign(order, input)
        orders.update(order)
        return order
    } else {
        input.id = uuid()
        return orders.insert(input)
    }
}
const loadAccount = (id) => {
    var account = accounts.findOne( {'id':id} )
    var orders = orders.find({ 'account_id':id })
    account.orders = orders
    return account
}
const queryAccounts = () => {
    return accounts.chain().simplesort("name").data()
}

const upsertAccount = (input) => {
    if (input.id) {
        var account = accounts.findOne({ 'id': input.id })
        account = Object.assign(account, input)
        accounts.update(account)
        return account
    } else {
        input.id = uuid()
        return accounts.insert(input)
    }
}
const deleteAccount = (id) => {
    var account = accounts.findOne({ 'id': id})
    accounts.remove(account)
}
module.exports = { loadOrder, queryOrders, upsertOrder, loadAccount, upsertAccount, deleteAccount, queryAccounts, Order, Account };