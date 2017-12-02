const vehicle = require('../src/vehicle.js');

jsonData = {"sixMonthRate":"","yearOfManufacture":"2009","taxDetails":"Tax due: 01 April 2018","twelveMonthRate":"","typeApproval":"M1","numberOfDoors":"5","dateOfFirstRegistration":"01 JULY 2009","colour":"SILVER","transmission":"MANUAL","fuelType":"DIESEL","wheelPlan":"2-AXLE-RIGID BODY","model":"TIGUAN SE TDI 4MOTION 140","vin":"WVGZZZ5NZAW007903","revenueWeight":"Not available","motDetails":"Expires: 28 April 2018","make":"VOLKSWAGEN","co2Emissions":"167 g/km","cylinderCapacity":"1968 cc","taxed":true,"mot":true,"taxStatus":"Tax not due"}
vehicleInfo = new vehicle(jsonData);

test('shows vehicle make', () => {
    expect(vehicleInfo.make).toBe('VOLKSWAGEN');
});

test('shows MOT details', () => {
    expect(vehicleInfo.motDetails).toBe('Expires: 28 April 2018');
});


test('shows tax details', () => {
    expect(vehicleInfo.taxDetails).toBe('Tax due: 01 April 2018');
});

