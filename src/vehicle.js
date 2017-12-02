function Vehicle(informationObject) {
    this.make = informationObject["make"];
    this.motDetails = informationObject["motDetails"];
    this.taxDetails = informationObject["taxDetails"];
}

module.exports = Vehicle;