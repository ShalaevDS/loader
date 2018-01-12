var Loader = function (options) {
    this.elem = document.querySelector(options.el || '#loader');

    console.log(this.elem);
}



window.onload = function () {
    var loader1 = new Loader({
        el: '#loader'
    });

    console.log(loader1)
}