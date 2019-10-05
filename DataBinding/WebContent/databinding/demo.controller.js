sap.ui.controller("databinding.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf databinding.demo
*/
	onInit: function() {
		var oCol1 = new sap.m.Column({
 			header: "Name"
 		});
 		var oCol2 = new sap.m.Column({
 			header: "Place"
 		});
 		var oCol3 = new sap.m.Column({
 			header: "Id"
 		});
 		
 		var oTable = new sap.m.Table({
 			title: "Simple Table",
 			columns: [
 				oCol1,
 				oCol2,
 				oCol3
 			]
 		});
 		

		var oModel = new sap.ui.model.json.JSONModel(oData);
 		sap.ui.getCore().setModel(oModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf databinding.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf databinding.demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf databinding.demo
*/
//	onExit: function() {
//
//	}

});