/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"xcop/myibx/myinbox/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});