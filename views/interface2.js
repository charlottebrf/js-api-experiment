document.addEventListener("DOMContentLoaded", function() {

    var vehicleApi = "https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=mt09nks";

    function getDVLAApi(api) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", api, false);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    let dvlaApiString = getDVLAApi(vehicleApi);
    let dvlaApiJson = JSON.parse(dvlaApiString);

    function createVehicles() {
        let newVehicle = new Vehicle(dvlaApiJson);
        let vehicleComponent = new VehicleComponent(newVehicle);
        vehicleComponent.render();
    }

    createVehicles();
});
