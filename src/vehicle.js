function vehicle(informationObject) {
    this.informationObject = informationObject;

    this.make = informationObject["make"];
    this.motDetails = informationObject["motDetails"];
    this.taxDetails = informationObject["taxDetails"];
}

module.exports = vehicle;