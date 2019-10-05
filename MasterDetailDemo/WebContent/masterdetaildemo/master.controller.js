sap.ui.controller("masterdetaildemo.master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf masterdetaildemo.master
*/
	onInit: function() {

		
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
		this.oDataTable = {
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

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(oData);
 		sap.ui.getCore().setModel(oModel, "list");
		
		
	},
	showDetails: function (oEvent){
		var sClickedData = oEvent.getSource().getTitle();
		var oData = this.oDataTable;
		var oNewData = [];
		for(var i = 0;  i < oData["names"].length; i++){
			if(oData["names"][i]["Name"] === sClickedData){
				oNewData.push(oData["names"][i]);
			}
		}
		console.log(oNewData);
		sap.ui.getCore().getModel("table").setData(oNewData);
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf masterdetaildemo.master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf masterdetaildemo.master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf masterdetaildemo.master
*/
//	onExit: function() {
//
//	}

});