sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.demo.odata.OdataApp.controller.View1", {
		onInit: function () {

		},
		
		showAlert: function (){
			alert("Item pressed!");
		}
	});
});