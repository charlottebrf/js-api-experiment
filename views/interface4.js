document.addEventListener("DOMContentLoaded", function() {
    let accountApi = "http://localhost:3000/accounts";
    let accountApi1 = "http://localhost:3000/balances";
    let accountApi2 = "http://localhost:3000/transactions";

    fetch(accountApi)
        .then(
            function(response) {
                if(response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function(data) {
                    let newAccount = new Account(data);
                    let accountComponent = new AccountComponent(newAccount);
                    vehicleComponent.render();
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error', err);
        });

    fetch(accountApi1)
        .then(
            function(response) {
                if(response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function(data) {
                    let newAccount = new Account(data);
                    let accountComponent = new AccountComponent(newAccount);
                    vehicleComponent.render();
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error', err);
        });

    fetch(accountApi2)
        .then(
            function(response) {
                if(response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function(data) {
                    let newAccount = new Account(data);
                    let accountComponent = new AccountComponent(newAccount);
                    vehicleComponent.render();
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error', err);
        });
});