sap.ui.controller("tablebinding.tableSimple", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf tablebinding.tableSimple
*/
	onInit: function() {
		var page = sap.ui.view({id:"iddemo2", viewName:"tablebinding.secondPage", type:sap.ui.core.mvc.ViewType.JS});
		app.addPage(page);
 		var oData = {
				names : [{
						id: 1,
						Name: "A",
						Place: "Mountain"
					},{
						id: 2,
						Name: "B",
						Place: "Forest"
					},{
						id: 3,
						Name: "C",
						Place: "Beach"
					}
					,{
						id: 4,
						Name: "D",
						Place: "Lake"
					}]
		};
		

		var oModel = new sap.ui.model.json.JSONModel(oData);
 		sap.ui.getCore().setModel(oModel);
 		

	},
	selectEventHandler:function (oEvt) {
		var oParams = oEvt.getParameters();
		
		var sVal = oParams.listItem.getBindingContext().getProperty("Name");
		debugger;
		var oData = {
				data: sVal
		};
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData), "label");
		
		app.to("iddemo2");
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf tablebinding.tableSimple
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf tablebinding.tableSimple
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf tablebinding.tableSimple
*/
//	onExit: function() {
//
//	}

});