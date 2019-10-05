sap.ui.controller("hellosapui5.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf hellosapui5.demo
*/
    onInit: function() {
    		console.log("on init")
	},

	liveChange: function (oEvt){
		
		var sValue = oEvt.getParameter("value");
		sap.m.MessageToast.show(sValue);
		
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf hellosapui5.demo
*/
	onBeforeRendering: function() {
		console.log("Before rendering");
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf hellosapui5.demo
*/
	onAfterRendering: function() {
		console.log("After rendering");
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf hellosapui5.demo
*/	
	onExit: function() {
		console.log("On Exit");
	}

});