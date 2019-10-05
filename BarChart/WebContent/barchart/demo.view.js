sap.ui.jsview("barchart.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf barchart.demo
	*/ 
	getControllerName : function() {
		return "barchart.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf barchart.demo
	*/ 
	createContent : function(oController) {
		var oVizFrame = new sap.viz.ui5.controls.VizFrame();
		
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [
				{
					name: "Name", 
					value: "{bar>Name}"
				}
			],
			measures:[{
				name: 'Popularity',
				value: "{bar>Popularity}"
			}],
			data: {
				path: "bar>/names"
			}
		});
		
		var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid':"valueAxis",
			'type':"Measure",
			'values':["Popularity"]
		});
		var oFeedCatAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid':"categoryAxis",
			'type':"Dimension",
			'values':["Name"]
		});
		
		oVizFrame.addFeed(oFeedValueAxis);
		oVizFrame.addFeed(oFeedCatAxis);
		oVizFrame.setDataset(oDataset);
		oVizFrame.setVizType('bar');
		
 		var oPage = new sap.m.Page({
			title: "Bar Chart",
			content: [
				oVizFrame
			]
		});
 		return oPage;
	}

});