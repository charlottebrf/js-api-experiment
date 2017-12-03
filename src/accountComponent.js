function AccountComponent(account) {
    this.account = account;

    this.setup = function() {
        let el = document.createElement('li');
        el.innerHTML =  "</br>" + account.accounts + "</br>" + account.balances + "</br>" + account.transactions + "</br>";
        return el;
    };

    this.render = function() {
        let el = this.setup();
        let list = document.getElementById('account-list');
        list.appendChild(el)
    };
}

module.exports = AccountComponent;