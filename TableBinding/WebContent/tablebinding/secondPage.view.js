sap.ui.jsview("tablebinding.secondPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tablebinding.secondPage
	*/ 
	getControllerName : function() {
		return "tablebinding.secondPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tablebinding.secondPage
	*/ 
	createContent : function(oController) {
 		
		var oLabel = new sap.m.Label({
			text: "{label>/data}"
		});
		var oPage =  new sap.m.Page({
			title: "Second Page",
			content: [
				oLabel
			]
		});
 		return oPage;
	}

});