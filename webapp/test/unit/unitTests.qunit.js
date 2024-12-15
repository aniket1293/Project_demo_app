/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sg/Project_demo_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});