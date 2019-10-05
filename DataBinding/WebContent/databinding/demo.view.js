sap.ui.jsview("databinding.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf databinding.demo
	*/ 
	getControllerName : function() {
		return "databinding.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf databinding.demo
	*/ 
	createContent : function(oController) {
		
	
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			]
		});
	}

});