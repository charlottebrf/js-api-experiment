const VehicleComponent = require('../src/vehicleComponent.js');

test('vehicle component shows the make', () => {
    let vehicle = { make: 'VOLKSWAGEN'};
    let vehicleComponent = new VehicleComponent(vehicle);
    console.log(vehicle);
    console.log(vehicleComponent);
    expect(vehicleComponent.vehicle.make).toBe('VOLKSWAGEN');
});
