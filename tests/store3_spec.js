let homepage = require('../pages/homepage');

describe('go to main page Happy Family Store', function() {
       browser.manage().window().maximize();

it('Go to main page', function() {
    // browser.get('https://s1.ph2016.info/ ');
    
    homepage.get('https://s3.ph2016.info/');
    browser.sleep(1000);
    // homepage.cialisLnk();
    // browser.sleep(500);
    
    // homepage.addCart();
    // browser.sleep(500);

})


it('Add package to cart', function() { 

homepage.cialisLnk();
browser.sleep(1000);
})

it('add to shop..', function(){
    homepage.addCart();
    browser.sleep(1000);
})

it ('Continue shopping', function(){
   homepage.shoppCntn();
    // homepage.addCart();
   browser.sleep(1000);
})

it ('Сhoose another product', function(){

homepage.viagr();
browser.sleep(1000);
homepage.addCart();
browser.sleep(1000);
 });
 
 it('Check Total Order', function(){

    homepage.priceProduct();
    browser.sleep(1000);
 })

});