sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox","sap/m/MessageToast"
], (Controller,MessageBox,MessageToast) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },
        onAddition() {
            let value1=parseInt(this.getView().byId("idVal1").getValue());
            let value2=parseInt(this.getView().byId("idVal2").getValue());
            let add=value1+value2;


            MessageBox.alert("Total of two numbers " + add, {
                title: "Alert",                                      // default
                onClose: null,                                       // default
                styleClass: "",                                      // default
                actions: sap.m.MessageBox.Action.OK,                 // default
                emphasizedAction: sap.m.MessageBox.Action.OK,        // default
                initialFocus: null,                                  // default
                textDirection: sap.ui.core.TextDirection.Inherit,    // default
                dependentOn: null                                    // default
            });

            this.getView().byId("idVal1").setValue("");
            this.getView().byId("idVal2").setValue("");

        },
        onMulitiplication (){
            let value1=parseInt(this.getView().byId("idVal1").getValue());
            let value2=parseInt(this.getView().byId("idVal2").getValue());
            let mul=value1*value2;

            // MessageToast.show("Multipule of two numbers " + mul, {
            //     duration: 3000,                  // default
            //     width: "15em",                   // default
            //     my: "center bottom",             // default
            //     at: "center bottom",             // default
            //     of: window,                      // default
            //     offset: "0 0",                   // default
            //     collision: "fit fit",            // default
            //     onClose: null,                   // default
            //     autoClose: true,                 // default
            //     animationTimingFunction: "ease", // default
            //     animationDuration: 1000,         // default
            //     closeOnBrowserNavigation: true   // default
            // });
            // MessageBox.confirm("Multipule of two numbers " + mul, {
            //     title: "Confirm",                                    // default
            //     onClose: null,                                       // default
            //     styleClass: "",                                      // default
            //     actions: [ sap.m.MessageBox.Action.OK,
            //                sap.m.MessageBox.Action.CANCEL ],         // default
            //     emphasizedAction: sap.m.MessageBox.Action.OK,        // default
            //     initialFocus: null,                                  // default
            //     textDirection: sap.ui.core.TextDirection.Inherit,    // default
            //     dependentOn: null                                    // default
            // });

            // MessageBox.error("Multipule of two numbers " + mul, {
            //     title: "Error",                                      // default
            //     onClose: null,                                       // default
            //     styleClass: "",                                      // default
            //     actions: sap.m.MessageBox.Action.CLOSE,              // default
            //     emphasizedAction: null,                              // default
            //     initialFocus: null,                                  // default
            //     textDirection: sap.ui.core.TextDirection.Inherit,    // default
            //     dependentOn: null                                    // default
            // });

            // MessageBox.information("Multipule of two numbers " + mul, {
            //     title: "Information",                                // default
            //     onClose: null,                                       // default
            //     styleClass: "",                                      // default
            //     actions: sap.m.MessageBox.Action.OK,                 // default
            //     emphasizedAction: sap.m.MessageBox.Action.OK,        // default
            //     initialFocus: null,                                  // default
            //     textDirection: sap.ui.core.TextDirection.Inherit,    // default
            //     dependentOn: null                                    // default
            // });

            // MessageBox.show("Multipule of two numbers " + mul, {
            //     icon: sap.m.MessageBox.Icon.NONE,                    // default
            //     title: "",                                           // default
            //     actions: sap.m.MessageBox.Action.OK,                 // default
            //     emphasizedAction: sap.m.MessageBox.Action.OK,        // default
            //     onClose: null,                                       // default
            //     styleClass: "",                                      // default
            //     initialFocus: null,                                  // default
            //     textDirection: sap.ui.core.TextDirection.Inherit,    // default
            //     dependentOn: null                                    // default
            // });

            // MessageBox.success("Multipule of two numbers " + mul, {
            //     title: "Success",                                    // default
            //     onClose: null,                                       // default
            //     styleClass: "",                                      // default
            //     actions: sap.m.MessageBox.Action.OK,                 // default
            //     emphasizedAction: sap.m.MessageBox.Action.OK,        // default
            //     initialFocus: null,                                  // default
            //     textDirection: sap.ui.core.TextDirection.Inherit,    // default
            //     dependentOn: null                                    // default
            // });

            MessageBox.warning("Multipule of two numbers " + mul, {
                title: "Warning",                                    // default
                onClose: null,                                       // default
                styleClass: "",                                      // default
                actions: sap.m.MessageBox.Action.ABORT,              // default
                emphasizedAction: null,                              // default
                initialFocus: null,                                  // default
                textDirection: sap.ui.core.TextDirection.Inherit,    // default
                dependentOn: null                                    // default
            });
            



            this.getView().byId("idVal1").setValue("");
            this.getView().byId("idVal2").setValue("");

           // console.log(total);
            
        }

    });
});