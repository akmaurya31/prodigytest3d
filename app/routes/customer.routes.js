module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
 
    
  app.post("/purchase_sip",customers.purchase_sip);
   app.get("/cronjobproductinsertion",customers.cronjobproductinsertion);
  
};
