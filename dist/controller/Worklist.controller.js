sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","../model/formatter","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,i,r,s){"use strict";return e.extend("com.sg.Project_demo_app.controller.Worklist",{formatter:i,onInit:function(){var e,i,r=this.byId("wktable");i=r.getBusyIndicatorDelay();this._aTableSearchState=[];e=new t({worklistTableTitle:this.getResourceBundle().getText("worklistTableTitle"),shareOnJamTitle:this.getResourceBundle().getText("worklistTitle"),shareSendEmailSubject:this.getResourceBundle().getText("shareSendEmailWorklistSubject"),shareSendEmailMessage:this.getResourceBundle().getText("shareSendEmailWorklistMessage",[location.href]),tableNoDataText:this.getResourceBundle().getText("tableNoDataText"),tableBusyDelay:0});this.setModel(e,"worklistView");r.attachEventOnce("updateFinished",function(){e.setProperty("/tableBusyDelay",i)})},onUpdateFinished:function(e){var t,i=e.getSource(),r=e.getParameter("total");if(r&&i.getBinding("items").isLengthFinal()){t=this.getResourceBundle().getText("worklistTableTitleCount",[r])}else{t=this.getResourceBundle().getText("worklistTableTitle")}this.getModel("worklistView").setProperty("/worklistTableTitle",t)},onPress:function(e){this._showObject(e.getSource())},onNavBack:function(){history.go(-1)},onSearch:function(e){if(e.getParameters().refreshButtonPressed){this.onRefresh()}else{var t=[];var i=e.getParameter("query");if(i&&i.length>0){t=[new r("Belnr",s.Contains,i)]}this._applySearch(t)}},onRefresh:function(){var e=this.byId("table");e.getBinding("items").refresh()},_showObject:function(e){this.getRouter().navTo("object",{bukrs:e.getBindingContext().getProperty("Bukrs"),belnr:e.getBindingContext().getProperty("Belnr"),gjahr:e.getBindingContext().getProperty("Gjahr")})},_applySearch:function(e){var t=this.byId("table"),i=this.getModel("worklistView");t.getBinding("items").filter(e,"Application");if(e.length!==0){i.setProperty("/tableNoDataText",this.getResourceBundle().getText("worklistNoDataWithSearchText"))}}})});
//# sourceMappingURL=Worklist.controller.js.map