const Customer = require("../models/customer.model.js");
const substrings = require("../../node_modules/substrings");
// const substr = require("../../node_modules/substr");
//  const parser = require('../../node_modules/xml2json');
//onst https = require('../../node_modules/https');
var mysql = require('../../node_modules/mysql');

var jsonxml  = require('../../node_modules/jsontoxml');
var convert = require('../../node_modules/xml-js');

const axios = require('../../node_modules/axios');

var fs = require('fs');
const { ECONNABORTED } = require("constants");
const dbConfig = require("../config/db.config.js");
const sql = require("../models/db.js");



exports.purchase_sip = (req, res) => {  
    console.log("purchase")
	//return
    const postarray= { email:req.body.email,
      
      trxn_acceptance:req.body.trxn_acceptance,
      payment_mode:req.body.payment_mode,
      instrm_amount:req.body.instrm_amount,
      

      sip_ac_type:req.body.sip_ac_type,
      sip_paymech:req.body.sip_paymech,
      ach_amt:req.body.ach_amt,
      
      until_cancelled:req.body.until_cancelled,

     
      ach_exist:req.body.ach_exist,
      amc:req.body.amc,
      product_code:req.body.product_code,
      reinvest:req.body.reinvest,
      amount:req.body.amount,
      input_ref_no:req.body.input_ref_no,
      perpetual_flag:req.body.perpetual_flag,
      transfer_date:req.body.transfer_date,// '10-Nov-2020',
      sip_from_date:req.body.sip_from_date,// '01-Jan-2021',
        sip_end_date:req.body.sip_end_date,// '31-Dec-2099',
        sip_freq:req.body.sip_freq,// 'OM',
        sip_amount:req.body.sip_amount,// '2000',
        sip_period_day:req.body.sip_period_day,// '01',
        rtgs_code:req.body.rtgs_code,
        umrn:req.body.umrn,
        folio:req.body.folio,   

    }
   // return;
   Customer.purchase_sip(postarray.email,(err, data) => {

    if(data!=null){        
      if (!Array.isArray(data) || !data.length) {                
     return res.json({
       success: 200,
       message: "Bank Data not Found in user table"
     });
   }}
   
   let urs=data[0]
   let resdatemy=String(urs.date_of_birrth);   
    let resaccountNomy=urs.accountNo;
    console.log("res line 844",urs.bank_code);
   //return
   let xb=resdatemy.split(" ");     
   let mydob_xb=xb[2]+"-"+xb[1]+"-"+xb[3]
   let pep= (urs.exposedPolitically == '1') ? "N" : "Y";
   
     
      let ash_arrk={NMFIIService:{
        service_request:{
        appln_id:'MFS21399',
        password:'Account@2121',
        broker_code:'ARN-21399',
        iin:urs.iin,
        sub_trxn_type:'S',
        poa: 'N',
        poa_bank_trxn_type: [],
        trxn_acceptance:postarray.trxn_acceptance,
        demat_user: 'N',
        dp_id: [],
        bank: urs.bank_code,
        ac_no: resaccountNomy,
        ifsc_code: urs.fscode,
        sub_broker_arn_code: [],
        sub_broker_code: [],
        euin_opted: 'N',
        euin: 'E073161',
        trxn_execution: [],
        remarks: [],
        payment_mode: postarray.payment_mode,
        billdesk_bank: urs.bank_code,
        instrm_bank:  urs.bank_code,
        instrm_ac_no: urs.accountNo,
        instrm_no: [],
        instrm_amount:postarray.instrm_amount,
        instrm_date: [],
        instrm_branch: [],
        instrm_charges: [],
        micr: [],
        rtgs_code: [],
        neft_ifsc: urs.fscode,
        advisory_charge: [],
        dd_charge: [],
        cheque_deposit_mode: [],
        debit_amount_type: 'M',
        sip_micr_no: [],
        sip_bank: urs.bank_code,
        sip_branch: urs.branch,
        sip_acc_no: urs.accountNo,
        sip_ac_type: urs.acoount_type,
        sip_ifsc_code: urs.fscode,
        sip_paymech: postarray.sip_paymech,
        umrn: postarray.umrn,
        rtgs_code:postarray.rtgs_code,
        ach_amt: postarray.ach_amt,
        ach_fromdate: urs.ach_fromdate,
        ach_enddate: urs.ach_todate,
        until_cancelled: postarray.until_cancelled,
        Return_paymnt_flag: "Y",
        Client_callback_url: "API URL",
        Bank_holder_name: urs.name,
        Bank_holder_name1: [],
        Bank_holder_name2: [],
        iin_conf_flag: 'Y',
        trxn_initiator: 'O',
        trans_count: '1',
        utr_no: [],
        transfer_date: postarray.transfer_date,
        investor_auth_log: [],
        ach_exist: postarray.ach_exist,
        instrm_bank: urs.bank_code
        },
        childtrans: { 
        amc: postarray.amc,
        folio: postarray.folio,
        product_code: postarray.product_code,
        ft_acc_no: [],
        reinvest: postarray.reinvest,
        amount: postarray.amount,

        sip_from_date: postarray.sip_from_date,
        sip_end_date: postarray.sip_end_date,
        sip_freq: postarray. sip_freq,
        sip_amount: postarray.sip_amount,
        sip_period_day: postarray.sip_period_day,

        input_ref_no: postarray.input_ref_no,
        perpetual_flag: postarray.perpetual_flag,
        insurance_enabled: 'N',
        GOAL_BASED_SIP: [],
        GOAL_TYPE: [],
        GOAL_AMOUNT: [],
        FREEDOM_SIP: [],
        FREEDOM_TARGET_SCHEME: [],
        FREEDOM_TENURE: [],
        FREEDOM_SWP_AMOUNT: [],
        iin: [],
        sub_broker_arn_code: [],
        sub_broker_code: [],
        instrm_date: [],
        instrm_branch: [],
        instrm_charges: [],
        micr: [],
        rtgs_code: [],
        neft_ifsc: [],
        advisory_charge: [],
        dd_charge: [],
        cheque_deposit_mode: [],
        debit_amount_type: [],
        sip_micr_no: [],
        sip_bank: [],
        sip_branch: [],
        sip_acc_no: [],
        sip_ac_type: [],
        sip_ifsc_code: [],
        sip_paymech: [],
        //umrn: postarray.umrn,
        ach_amt: [],
        ach_fromdate: [],
        ach_enddate: []
       }  
      }//service_request
    } //NMFIIService
    //else
    
    
     
     
   //console.log(ash_arrk);
    let ash_xml_agamji=jsonxml(ash_arrk);  
    //console.log(ash_xml_agamji);
    let msg="";
    
   // console.log(ash_xml_agamji);
	  // return
    axios.post('https://uat.nsenmf.com/NMFIITrxnService/NMFTrxnService/PURCHASETRXN',
    ash_xml_agamji,
    {headers:
      {'Content-Type': 'text/xml'}
    }).then(res22=>{
     //console.log("C- Output XML - Line 946", res22)  


     let result1 = convert.xml2js(res22.data, {compact: true, spaces: 4});
          let fatcaresult=result1.DataSet['diffgr:diffgram'].NMFIISERVICES.service_status.service_return_code._text;
          let fatcaresult2=result1.DataSet['diffgr:diffgram'].NMFIISERVICES.service_response;
     //  console.log("C- Output XML - Line 950", result1)
       //   console.log("C- Output XML - Line 951", fatcaresult)
        //  console.log("C- Output XML - Line 956", fatcaresult2)
		//console.log("i am cool 880");
		//var gi=typeof fatcaresult2[0].return_msg;
		//console.log("c- 881- ", gi);
		
		let newdata0= fatcaresult2[0];
		let newdata0_0= fatcaresult2[1];
		let adddata1="";
		let	adddata2="";
		
		if(typeof newdata0 !== "undefined"  || typeof newdata0_0 !== "undefined"){
		let newdata1= fatcaresult2[0].return_msg;
		let newdata2= fatcaresult2[1].return_msg;
		
		let newdata3= fatcaresult2[0].Status_Desc;
		let newdata4= fatcaresult2[1].Status_Desc;
		if( typeof newdata1 !== "undefined"  || typeof newdata2 !== "undefined"){
			adddata1= fatcaresult2[0].return_msg._text
			adddata2= fatcaresult2[1].return_msg._text
			
		}else if(typeof newdata3 !== "undefined"  || typeof newdata4 !== "undefined"){
			adddata1= fatcaresult2[0].Status_Desc._text
		//	adddata2= fatcaresult2[1].Status_Desc._text
		}else{
			adddata1="";
			adddata2="";
			
		}
    }
    
    if(fatcaresult==0){    
    console.log("C- Output XML - Unique_No:", fatcaresult2.Unique_No._text)
    console.log("C- Output XML - Trxn_No:", fatcaresult2.Trxn_No._text)
		console.log("C- Output XML - Application_No:", fatcaresult2.Application_No._text)
    console.log("C- Output XML - Fund:", fatcaresult2.Fund._text)    
    console.log("C- Output XML - Scheme:", fatcaresult2.Scheme._text)
		console.log("C- Output XML - Scheme_Name:", fatcaresult2.Scheme_Name._text)
    console.log("C- Output XML - Amt:", fatcaresult2.Amt._text)
    link_var='';
    if (typeof fatcaresult2.Paymentlink !== 'undefined' && fatcaresult2.Paymentlink._text !== null){
    console.log("C- Output XML - Link:", fatcaresult2.Paymentlink._text)
    link_var=fatcaresult2.Paymentlink._text;
   }//	console.log("C- Output XML - Line 960", fatcaresult2[6].return_msg._text)
			//console.log("C- Output XML - Line 960", fatcaresult2[7].return_msg._text)
	    
	    userdata1=urs.user_id;
      userdata2=postarray.sub_trxn_type;
      userdata3=postarray.trxn_acceptance;
      userdata4=postarray.payment_mode;
      userdata5=postarray.instrm_amount;
      userdata6='M',
      userdata7="Y",
      userdata8="API URL"
      userdata9=postarray.ach_exist;
      userdata10=postarray.amc;
      userdata11=postarray.product_code;
      userdata12=postarray.reinvest;
      userdata13=postarray.input_ref_no;
      userdata14=postarray.perpetual_flag;
      userdata15=postarray.instrm_date;
      userdata16=postarray.rtgs_code;
      userdata17=postarray.umrn;    
      userdata18=postarray.amount; 

      userdata19=postarray.sip_ac_type,
      userdata20=postarray.sip_paymech,
      userdata21=postarray.ach_amt,    
      userdata22=postarray.until_cancelled,    
      userdata23=postarray.transfer_date,
      userdata24=postarray.sip_from_date,
      userdata25=postarray.sip_end_date,
      userdata26=postarray.sip_freq,
      userdata27=postarray.sip_amount,
      userdata28=postarray.sip_period_day,
      userdata29=postarray.folio, 
	    
     ashdata1=fatcaresult2.Unique_No._text;
     ashdata2=fatcaresult2.Trxn_No._text;
     ashdata3=fatcaresult2.Application_No._text;
     ashdata4=fatcaresult2.Fund._text;
     ashdata5=fatcaresult2.Scheme._text;
     ashdata6=fatcaresult2.Scheme_Name._text;
     ashdata7=fatcaresult2.Amt._text;
     ashdata8=fatcaresult2.Status_Desc._text;
     ashdata9=fatcaresult2.Status_code._text;
     ashdata10=fatcaresult2.Input_ref_no._text;
	    
	    let sql_purchase = `INSERT INTO purchase (user_id, Unique_No, Trxn_No, Application_No, Fund, Scheme, Scheme_Name, Amount,sub_trxn_type, trxn_acceptance, payment_mode, instrm_amount, debit_amount_type, Return_paymnt_flag, Client_callback_url, ach_exist, amc, product_code, reinvest, input_ref_no, perpetual_flag, instrm_date, rtgs_code, umrn,sip_ac_type, sip_paymech, sip_ach_amt,sip_until_cancelled, sip_transfer_date,sip_from_date,sip_end_date,sip_freq,sip_amount,sip_period_day,folio) VALUES  ('${userdata1}', '${ashdata1}','${ashdata2}','${ashdata3}','${ashdata4}','${ashdata5}','${ashdata6}','${userdata18}','S','${userdata3}','${userdata4}','${userdata5}','${userdata6}','${userdata7}','${userdata8}','${userdata9}','${userdata10}','${userdata11}','${userdata12}','${userdata13}','${userdata14}','${userdata15}','${userdata16}','${userdata17}','${userdata19}','${ userdata20}','${userdata21}','${userdata22}','${userdata23}','${userdata24}','${userdata25}','${ userdata26}','${userdata27}','${userdata28}','${userdata29}')`; 
     
     sql.query(sql_purchase, function (err, resvv) {
      console.log(sql_purchase,resvv);
        console.log("Data Saved:",resvv);
        
       // result(null,{ status:200, message:"Data Saved:",  data:resvv });
        
      });
    }
    else 
    { 
      
      
      
    if (Array.isArray(fatcaresult2) && fatcaresult2.length) {
      fatcaresult2.forEach(element => { 
     console.log(element.return_msg._text); 
     msg=msg+element.return_msg._text + '||';
      }); 
  //console.log("C- Output XML - Line 958", fatcaresult2[0].return_msg._text)
  //console.log("C- Output XML - Line 960", fatcaresult2[1].return_msg._text)
    }
    else{
      //console.log("ashC- Output XML - Link:827"); 
      console.log(fatcaresult2.return_msg._text); 
      msg=fatcaresult2.return_msg._text;
    }
  //console.log("C- Output XML - Line 958", fatcaresult2[0].return_msg._text)
  //console.log("C- Output XML - Line 960", fatcaresult2[1].return_msg._text)
  }



      let agmess='';  
		  
      if(fatcaresult==0){    
        agmess= {
           status:200,
           message:'Successfull',            
           data:  { "Unique_No": ashdata1,"Trxn_No": ashdata2 ,"Application_No": ashdata3, "Fund": ashdata4,"Scheme": ashdata5, "Scheme_Name": ashdata6, "Amt": ashdata7,"Status_Desc":ashdata8,"Status_code":ashdata9,"Input_ref_no":ashdata10,"Paymentlink":link_var.substring(9,(link_var.length+3)*.5),},  
           //fatcaresult2.Paymentlink._text.substring(9,fatcaresult2.Paymentlink._text.length-4).InnerHtnl
           message_full: fatcaresult2 ,
         }
       }else{
         agmess= {
           status:400,
           message:msg,
          // message_1: fatcaresult2, 
          //data:  msg,
           //"1": ashdata2 ,"2": ashdata3, "3": ashdata4,"4": ashdata5, "5": ashdata6, "6": ashdata7},              
      //message_third_api:'FAILED',
     message_full:fatcaresult2,
          }
       }
       return res.status(200).json(agmess)
      }).catch(err=>{console.log(err)});
      console.log("res last line 829");



    });
  };
  
  exports.cronjobproductinsertion = (req, res) => {  
   
  // Customer.purchase_sip1(req.body.email,(err, data) => {

    let ash_arrk={NMFIIService:{
      service_request:{
      appln_id:'MFS21399',
      password:'Account@2121',
      broker_code:'ARN-21399',
      }
    }}
    axios.get('https://uat.nsenmf.com/NMFIIService/NMFService/product?BrokerCode=ARN-21399&Appln_Id=MFS21399&Password=Account@2121',
      {headers:
      {'Content-Type': 'text/xml'}
    }).then(res22=>{
     //console.log("C- Output XML - Line 946", res22)  


     let result1 = convert.xml2js(res22.data, {compact: true, spaces: 4});
    // {
    // }).then(res22=>{
    //  console.log("C- Output XML - Line 946", res22)  		  
    //  var result1 = convert.xml2js(res22.body, {compact: true, spaces: 4});

     var productarray=result1.DataSet['diffgr:diffgram'].NewDataSet.product_master;
     //NMFIISERVICES.product_master;
     
     //console.log(result1.DataSet['diffgr:diffgram'].NewDataSet.product_master)
     
     //console.log(productarray)
      var mysql = require('mysql');
var con = mysql.createConnection({
 //host: "localhost",
 //user: "root",
 //password: "",
 //database: "test"
host: "5.181.218.103",
user: "u457285024_root",
password: "FGzrQ$2n",
database: "u457285024_test"
	
//HOST: "162.215.252.35",
 // USER: "trishffe_prodigy",
 // PASSWORD: "C@ZpF^MB_D2M",
 // DATABASE: "trishffe_prodigy_db"
});
     con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
    //return
    var inc=0;
    productarray.forEach(function (item) { 
      //console.log("ashishJi-"+item.PRODUCT_LONG_NAME._text);
      var sql = "INSERT INTO cust_books (c_name, b_name, no_copies) VALUES ('" + item.PRODUCT_LONG_NAME._text + "',2,1)";   
        
     // console.log(sql_p);
    
       con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(inc + " records inserted");
    
          
      //   });
      // sql.query(sql_p, function (err, resvv) {
      //   //console.log(sql_p,resvv);
      //     console.log("Data Saved:",resvv);
          
         // result(null,{ status:200, message:"Data Saved:",  data:resvv });
          
        });
    
        inc=inc+1
    
    });
    
    console.log("res last line 429");
      return 
      }).catch(err=>{console.log(err)});
      
    } 
  
