"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = _express["default"].Router();

exports.api = api;
api.get('/api', function (request, response) {
  response.status(200);
  response.send(JSON.stringify(api.stack.filter(function (stack) {
    return stack.route && stack.route.path;
  }).map(function (stack) {
    return {
      path: stack.route.path,
      method: stack.route.stack[0].method
    };
  })));
});
api.all('/api/*', function (request, response) {
  response.sendStatus(404);
});
//# sourceMappingURL=api.js.map