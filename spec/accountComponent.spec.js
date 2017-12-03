const accountComponent = require('../src/accountComponent.js');

test('account component shows the account details', () => {
    let account = { "accounts": [{"customer_name": "Charlotte Fereday", "bank_name":"nationwide", "bank_id": "656896"}]};
    let AccountComponent = new accountComponent(account);
    expect(AccountComponent.account.accounts).toEqual([{"customer_name": "Charlotte Fereday", "bank_name":"nationwide", "bank_id": "656896"}]);
});