sap.ui.jsview("twopagesimpleapplication.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf twopagesimpleapplication.first
	*/ 
	getControllerName : function() {
		return "twopagesimpleapplication.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf twopagesimpleapplication.first
	*/ 
	createContent : function(oController) {
		
		var oSimpleInput = new sap.m.Input("idInput",{
			
			placeholder:"Enter Your Name"
		
		}) ;
		var oBtn  = new sap.m.Button("idButton",{
			text: "Submit",
			press: [oController.goToSecondPage, oController]
		});
		var oPage = new sap.m.Page({
			title : "Simple Application",
			content: [
					oSimpleInput,
					oBtn
			]
		});
		console.log("createContent");
			
 		return oPage;
	}

});