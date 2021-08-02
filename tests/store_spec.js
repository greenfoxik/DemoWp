let homepage = require('../pages/homepage');

describe('go to main page Happy Family Store', function() {
            browser.manage().window().maximize();

    it('Go to main page', function() {
            
            
            homepage.get('https://s1.ph2016.info/');
            // browser.sleep(1000);
            // homepage.cialisLnk();
            // browser.sleep(500);
            
            // homepage.addCart();
            // browser.sleep(500);

        })

        
    it('Add package to cart', function() { 

        homepage.cialisLnk();
        browser.sleep(500);
    })

        it('add to shop..', function(){
            homepage.addCart();
            browser.sleep(1000);
        })

        // it('plus cart', function() {

        //     homepage.firstPlus();
        //     browser.sleep(5000);
        // })

        // it('Plus capt', function() { 

        //         homepage.cartPlus();
        //         browser.sleep(2000);
        //         // homepage.insurance();
        //         // browser.sleep(500);
                           
        //     })
           
        // it('Checking the order price ', function() { 

        //     browser.actions().sendKeys(protractor.Key.END).perform();
        //     homepage.sumPrice();
                        
        //     homepage.priceProduct();
        //  })

    

    //     it('Сart is empty', function() { 

    //         homepage.emptyCart();
    //         browser.sleep(1000);
    //    })

    //    it('Add new product to cart', function(){
    //         homepage.newProduct();
    //         homepage.addCart();
    //         browser.sleep(500);

    //    })

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

    //      })

    //          it('Delete order', function() { 

    //         homepage.orderRemove();
    //         browser.sleep(1000);
    //    })


       
        // homepage.cialisLnk();
        // browser.sleep(500);
        
        // homepage.addCart();
        // browser.sleep(500);

    })
    //     it ('go to checkout', function(){

    //         homepage.submitBtn();
    //         browser.sleep(8000);
         
    //     });

    //     it ('Check Total Order Amount: ', function(){

    //         homepage.totalPrice();
    //         browser.sleep(1000);
    //     });

    //     it('Check bonus pills', function(){

    //         homepage.bonusPills();

    //     });
    });

    // Your Cart is currently empty. You can selelect a product from Bestsellers!