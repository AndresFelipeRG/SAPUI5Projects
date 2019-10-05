sap.ui.jsview("hellosapui5.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf hellosapui5.demo
	*/ 
	getControllerName : function() {
		console.log("getControllerName");
		return "hellosapui5.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf hellosapui5.demo
	*/ 
	createContent : function(oController) {
		
		var oSimpleInput = new sap.m.Input({
			
			placeholder:"Enter Name",
			liveChange: [oController.liveChange, oController]
		
		});
		oSimpleInput.addStyleClass("inputCss") ;
		var oBtn  = new sap.m.Button({
			text: "Submit"
		});
		oBtn.addStyleClass("buttonCss");
		var oPage = new sap.m.Page({
			title : "Simple App",
			content: [
					oSimpleInput,
					oBtn
			]
		});
		console.log("createContent");
			
 		return oPage;
	}

});