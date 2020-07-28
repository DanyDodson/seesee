"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc posts test controller endpoint
@route GET /api/posts/testing
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling posts test controller endpoint ⏳⏳');
  const jsonMsg = '👍👍 [service] posts test controller endpoint working 👍👍';
  return res.json({
    msg: jsonMsg
  });
});

exports.default = _default;