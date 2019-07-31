/**
 * Created by yang on 2019/7/26.
 */
function Vue(options) {
  this.x = options.x;
  this._init(options);
}

Vue.prototype._init = function (options) {
  this.y = options.y;
};

module.exports = {
  Vue
};