"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _api = require("./api/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NODE_ENV = process.env.NODE_ENV || 'development';
var PORT = process.env.PORT || 8080;
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _morgan["default"])('common'));
app.use(_api.api);

if (NODE_ENV === 'production') {
  app.use(_express["default"]["static"](_path["default"].join(__dirname, '../../client/build')));
  app.get("/*", function (request, response) {
    response.sendFile(_path["default"].join(__dirname, '../../client/build/index.html'));
  });
}

app.listen(PORT, function () {
  console.info("Server listening at port ".concat(PORT, "."));
});
//# sourceMappingURL=index.js.map