sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("globant.customers.controller.Customers", {

            onInit: function () {

                const  oModel = this.getOwnerComponent().getModel();

                console.log("-----------------");
                console.log(oModel);

                oModel.read("/Orders", {
                    succes: function(oData) {
                        console.log(oData);
                    },
                    error: function ( error ){
                        
                    }
                })

            }

        });
    });
