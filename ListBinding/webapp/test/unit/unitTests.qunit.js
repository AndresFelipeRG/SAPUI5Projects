/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/list/binding/ListBinding/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});