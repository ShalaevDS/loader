var Loader = function (options) {
    var self = this;
    this.elem = document.querySelector(options.el || '#loader');
    this.elems = {};
    this.interval;

    this.current = parseInt(options.current) || 0;
    this.computed = parseInt(options.current) || 0;

    this.init = function () {
        self.elems.under = self.elem.querySelector('.loader-circle--under');
        self.elems.moving = self.elem.querySelector('.loader-circle--moving');
        self.elems.start = self.elem.querySelector('.loader-circle--start');
        self.elems.current = self.elem.querySelector('.loader__current-number');
        self.update(self.current);

        self.interval = setInterval(function () {
            if (self.current != self.computed) {
                if (self.current > self.computed) {
                    self.changeCurrent(self.computed + 1);
                } else {
                    self.changeCurrent(self.computed - 1);
                }
            }
        }, 10);
    };

    this.update = function (reach) {
        if (typeof reach !== "number" || reach < 0 || reach > 100) {
            console.log('WTF??? I wanna number!');
            return;
        }
        self.current = reach;
    };

    this.changeCurrent = function (reach) {
        var angle = Math.ceil(reach) * 3.6;
        self.elems.current.innerHTML = reach + '%';
        if (reach < 25) {
            self.elem.classList.remove('more-25', 'more-50', 'more-75');
        } else {
            self.elem.classList.add('more-25');
            if (reach < 50) {
                self.elem.classList.remove('more-50', 'more-75');
            } else {
                self.elem.classList.add('more-50');
                if (reach < 75) {
                    self.elem.classList.remove('more-75');
                } else {
                    self.elem.classList.add('more-75');
                }
            }
        }
        self.computed = reach;
        self.elems.moving.style.transform = 'rotate(' + angle + 'deg)';
    };

    this.destroy = function () {
        clearInterval(self.interval);
    };

    this.init();
};

window.onload = function () {
    window.loader1 = new Loader({
        el: '#loader'
    });
};
