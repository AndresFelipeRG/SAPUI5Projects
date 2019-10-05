sap.ui.jsview("piechart.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf piechart.demo
	*/ 
	getControllerName : function() {
		return "piechart.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf piechart.demo
	*/ 
	createContent : function(oController) {
var oVizFrame = new sap.viz.ui5.controls.VizFrame();
		
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [
				{
					name: "Name", 
					value: "{pie>Name}"
				}
			],
			measures:[{
				name: 'Popularity',
				value: "{pie>Popularity}"
			}],
			data: {
				path: "pie>/names"
			}
		});
		
		var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid':"size",
			'type':"Measure",
			'values':["Popularity"]
		});
		var oFeedCatAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid':"color",
			'type':"Dimension",
			'values':["Name"]
		});
		
		oVizFrame.addFeed(oFeedValueAxis);
		oVizFrame.addFeed(oFeedCatAxis);
		oVizFrame.setDataset(oDataset);
		oVizFrame.setVizType('pie');
		
 		var oPage = new sap.m.Page({
			title: "Pie Chart",
			content: [
				oVizFrame
			]
		});
 		return oPage;
	}

});