document.addEventListener("DOMContentLoaded", function() {

    var vehicleApi = "https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=mt09nks";

    function getDVLAApi(api) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", api, false);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    var dvlaApiString = getDVLAApi(vehicleApi);
    var dvlaApiJson = JSON.parse(dvlaApiString);


    function createVehicles() {
        var resultsHash = dvlanApiJson["response"]["results"];
        for(var i = 0; i < resultsHash.length; i++) {
            var newVehicle = new Vehicle(resultsHash[i])
            var storyComponent = new StoryComponent(newVehicle);
            storyComponent.render();
        }
    }


    function processAccountRequest() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("POST", "https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=mt09nks", true);
        console.log(xhttp.send());
    }


    createStories();
});