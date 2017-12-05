document.addEventListener("DOMContentLoaded", function() {
    let vehicleApi = "https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=mt09nks";

    fetch(vehicleApi)
        .then(
            function(response) {
                if(response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function(data) {
                    let newVehicle = new Vehicle(data);
                    let vehicleComponent = new VehicleComponent(newVehicle);
                    vehicleComponent.render();
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error', err);
        });
});







