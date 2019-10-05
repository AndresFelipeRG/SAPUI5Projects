sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.demo.ODataNavigationApplication.controller.View1", {
		onInit: function () {

		},
		showDetails: function(oEvt){
			var nItem = oEvt.getSource().getBindingContext("DataModel").getProperty("ProductID");
			 
		
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
 
	
			oRouter.navTo("RouteView2", { SelectedItem: nItem});
		}
		
	});
});