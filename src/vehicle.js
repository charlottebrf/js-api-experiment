function vehicle(informationObject) {
    this.informationObject = informationObject;

    this.make = informationObject["make"];
    this.motDetails = informationObject["motDetails"];
    this.taxDetails = informationObject["taxDetails"];
}

// this.render = function() {
//     var el = this.setup();
//     var list = document.getElementById('headline-list');
//     list.appendChild(el)
// };

module.exports = vehicle;