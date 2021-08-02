   
   let homepage = function() {

     // let cialisLnk = element(by.css('.product-card__photo'));
     

     let cialisLnk = element(by.css('[href="/catalog/view?slug=Cialis"]'));
     let addCart = element(by.linkText('ADD TO CART'));

     // let sumPrice = element(by.css('.shopping-cart__sum_price'));
     // let cartPlus = element(by.linkText('+'));
     // let insurance  = element(by.css('.state'));
     // let orderRemove = element(by.css('.table__remove'));
     // let emptyCart = element(by.css('.empty-cart'));
     let priceProduct = element(by.css('.shopping-cart__sum_price'));
     let newProduct = element(by.css('[href="/catalog/view?slug=Cialis_Soft_Tabs"]'));
     let shoppCntn = element(by.css('.shopping-cart__btn-continue'));
     let viagr = element(by.css('[href="/catalog/view?slug=Viagra"]')); 
     let submitBtn = element(by.id('checkoutBtn'));
     // let totalPrice = element(by.css('.box'));
     let bonusPills = element(by.css('.sup'));

     // let firstName = element(by.id('billing_address_first_name'));
     // let lastName = element(by.id('billing_address_last_name'));
     // let bllngAddrssCity = element(by.id('billing_address_city'));
     // let bllngAddrss = element(by.id('billing_address_address'));
     // let addressZip = element(by.id('billing_address_zip'));
     // let phone = element(by.id('address-phone'));
     // let email = element(by.id('billing_address_email'));

     // let cardHolder = element(by.id('card_holder'));
     // let cardNumber = element(by.id('creditcard-cardnumber')); 
     // let cardСvc = element(by.id('creditcard-cardcvc')); 
     // let cmplOrdr =  element(by.css('.submitOrder')); 
     
     

   this.get = function (url){
        browser.get( url);
     //    browser.sleep(1000); 
   }

   this.cialisLnk = function() {
        cialisLnk.click(); 
        browser.sleep(1000); 
   };

   this.addCart = function() {
        addCart.click();
     //    browser.sleep(1000);
   };

//    this.sumPrice = function() {
//     browser.actions().sendKeys(protractor.Key.END).perform();
//         sumPrice.click();
//         browser.sleep(500);

//     }

//    this.cartPlus = function(){
//     cartPlus.click();
//     browser.sleep(5000);
// }

//     this.insurance = function () {
//         insurance.click();
//         browser.sleep(200);
//     }


 
//    this.emptyCart = function() {
//      expect(emptyCart.getText()).toBe('Your Cart is currently empty. You can selelect a product from Bestsellers!');
//      browser.sleep(800)
//    }

//    this.newProduct = function() {
//      newProduct.click();
//      browser.sleep(1000);
//    }

//    this.addCart = function() {
//      addCart.click();
//      browser.sleep(1000);
// };
     this.shoppCntn = function(){
          shoppCntn.click();
          browser.sleep(1000);
     };

     this.viagr = function(){
          viagr.click();
          browser.sleep(500)
     };

     this.addCart = function() {
          addCart.click();
          browser.sleep(500);
     };

     this.priceProduct = function() {
          expect(priceProduct.getText()).toBe('$96.22');


     };

     //    this.orderRemove = function() {
     //      browser.actions().sendKeys(protractor.Key.END).perform();
     //    orderRemove.click();
     //    browser.sleep(2000)
     //  }


    

//      this.submitBtn = function() {
//           submitBtn.click();
//           browser.sleep(1000);

//      };

//      this.bonusPills = function(){
//           bonusPills.click();
//           expect(bonusPills.getText()).toBe('Cialis Soft Tabs 10 Tabs x 20mg');


     // };

//     this.firstName = function(){
//
//          firstName.click();
//          firstName.sendKeys('Test');
//          browser.sleep(1000);
//     }
//
//     this.lastName = function(){
//
//          lastName.click();
//          lastName.sendKeys('QAC');
//          browser.sleep(1000);
//     }
//
//     this.bllngAddrssCity = function(){
//
//          bllngAddrssCity.click();
//          bllngAddrssCity.sendKeys('Washington');
//          browser.sleep(1000);
//     }
//
//     this.bllngAddrss = function() {
//
//          bllngAddrss.click();
//          bllngAddrss.sendKeys('DC');
//          browser.sleep(1000);
//     }
//     
//     this.addressZip = function() {
//
//          addressZip.click();
//          addressZip.sendKeys('20036');
//          browser.sleep(1000);
//     }
//     
//     this.phone = function() {
//
//          phone.click();
//          phone.sendKeys('0956871599');
//          browser.sleep(2000);
//     }
//
//     this.email = function() {
//
//          email.click();
//          email.sendKeys('tary.test@gmail.com');
//          browser.sleep(1000);
//     }
//
//     // this.cardHolder = function() {
//
//     //      cardHolder.click();
//     //      cardHolder.sendKeys('Test');
//     //      browser.sleep(1000);
//     // }
//
//     this.cardNumber = function() {
//
//          cardNumber.click();
//          cardNumber.sendKeys('4111 1111 1111 1111');
//          browser.sleep(1000);
//     }
//
//     this.cardСvc = function() {
//
//          cardСvc.click();
//          cardСvc.sendKeys('123');
//          browser.sleep(1000);
//     }
//
//     this.cmplOrdr = function() {
//
//          cmplOrdr.click();
//          // cmplOrdr.sendKeys('123');
//          browser.sleep(1000);
//     }

     };

module.exports = new homepage();