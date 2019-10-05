sap.ui.jsview("tablebinding.tableSimple", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tablebinding.tableSimple
	*/ 
	getControllerName : function() {
		return "tablebinding.tableSimple";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tablebinding.tableSimple
	*/ 
	createContent : function(oController) {
		
		
		
		var oCol1 = new sap.m.Column({
 			header: new sap.m.Label({text:"Name"})
 		});
 		var oCol2 = new sap.m.Column({
 			header: new sap.m.Label({text:"Place"})
 		});
 		var oCol3 = new sap.m.Column({
 			header: new sap.m.Label({text:"Id"})
 		});
 		
 		var oTable = new sap.m.Table({
 			
 			columns: [
 				oCol1,
 				oCol2,
 				oCol3
 			],
 			itemPress: [oController.selectEventHandler, oController]
 			
 		});
 		
 		var oTemp = new sap.m.ColumnListItem({
 			type: "Active",
 			cells: [
 				new sap.m.Text({
 					text: "{Name}"
 				}),
 				new sap.m.Text({
 					text: "{Place}"
 				}),
 				new sap.m.Text({
 					text: "{id}"
 				})
 			]
 
 		});
 		oTable.bindItems({
 			path: "/names",
 			template: oTemp
 			
 		});
 		
 		var oCol1b = new sap.ui.table.Column({
 			label: new sap.m.Label({text:"Name"}),
 			template: new sap.m.Text({
 				text:"{Name}"
 			})
 		});
 		var oCol2b = new sap.ui.table.Column({
 			label: new sap.m.Label({text:"Place"}),
 			template: new sap.m.Text({
 				text:"{Place}"
 			})
 		});
 		var oCol3b = new sap.ui.table.Column({
 			label: new sap.m.Label({text:"Id"}),
 			template: new sap.m.Text({
 				text:"{id}"
 			})
 		});
 		
 		var oTable2 = new sap.ui.table.Table({
 			title: "Simple Table2",
 			columns: [
 				oCol1b,
 				oCol2b,
 				oCol3b
 			]
 		})
 		oTable2.bindRows({
 			path: "/names",
 			
 		});
		var oPage = new sap.m.Page({
			title: "Simple Table",
			content: [
				oTable,
				oTable2
			]
		});
 		return oPage;
	}

});