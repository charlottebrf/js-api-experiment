function VehicleComponent(vehicle) {
    this.vehicle = vehicle;

    this.setup = function() {
        let el = document.createElement('li');
        el.innerHTML =  "</br>" + vehicle.make + "</br>" + vehicle.motDetails + "</br>" + vehicle.taxDetails + "</br>";
        return el;
    };

    this.render = function() {
        let el = this.setup();
        let list = document.getElementById('vehicle-list');
        list.appendChild(el)
    };
}

module.exports = VehicleComponent;









