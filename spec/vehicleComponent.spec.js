const VehicleComponent = require('../src/vehicleComponent.js');

test('vehicle component shows the make', () => {
    let vehicle = { make: 'VOLKSWAGEN'};
    let vehicleComponent = new VehicleComponent(vehicle);
    expect(vehicleComponent.vehicle.make).toBe('VOLKSWAGEN');
});
