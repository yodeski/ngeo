/**
 * @module app.popover
 */
const exports = {};

import './popover.css';
import './common_dependencies.js';
/** @suppress {extraRequire} */
import ngeoMessagePopoverComponent from 'ngeo/message/popoverComponent.js';


/** @type {!angular.Module} **/
exports.module = angular.module('app', [
  ngeoMessagePopoverComponent.name,
]);


export default exports;
