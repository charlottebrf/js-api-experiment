const account = require('../src/account.js');
;
jsonData = {"accounts": [{"customer_name": "Charlotte Fereday", "bank_name":"nationwide", "bank_id": "656896"}]};
jsonData2 = {"balances":"2400"};
jsonData3 = {"transactions":[{"pret": "7.60", "whsmith": "10.00", "snappy_snaps": "20", "tesco": "56"}]};

test('shows account name', () => {
    let accountInfo = new account(jsonData);
    expect(accountInfo.accounts).toEqual([{"customer_name": "Charlotte Fereday", "bank_name":"nationwide", "bank_id": "656896"}]);
});

test('shows account balance', () => {
    let balanceInfo = new account(jsonData2);
    expect(balanceInfo.balances).toBe("2400");
});


test('shows account transactions', () => {
    let transactionsInfo = new account(jsonData3);
    expect(transactionsInfo.transactions).toEqual([{"pret": "7.60", "whsmith": "10.00", "snappy_snaps": "20", "tesco": "56"}]);
});