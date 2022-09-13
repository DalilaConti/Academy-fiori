sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent) {
        "use strict";

        return Controller.extend("globant.customers.controller.Customers", {

            onInit: function () {

            },
            
            onPress: function ( oControlEvent){
              let _customerID = oControlEvent.getSource().getBindingContext().getObject().CustomerID;
            

              UIComponent.getRouterFor(this).navTo("RouteOrders",{
                CustomerID : _customerID
              });
            }
           

                //const  oModel = this.getOwnerComponent().getModel();

              //  console.log("-----------------");
              // console.log(oModel);

              // oModel.read("/Orders", {
                 //  success: function(oData) {
                      //  console.log(oData);
                   // },
                   // error: function ( error ){
                        
                  // }
               // })
            

        });
    });
