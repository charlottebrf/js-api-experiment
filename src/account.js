function Account(informationObject) {
    this.accounts = informationObject["accounts"];
    this.balances = informationObject["balances"];
    this.transactions = informationObject["transactions"];
}

module.exports = Account;