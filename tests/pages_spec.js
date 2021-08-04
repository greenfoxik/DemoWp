let homepage = require('../pages/homepage');

describe(' go to Happy Family Store — the place where the health of your family is our main priority!', function() {
    browser.manage().window().maximize();

it('Welcome to Happy Family Store s1.ph2016.info/', function() {
    
    homepage.get('https://s1.ph2016.info/');
    expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/");
})


it('Welcome to Happy Family Store s1.ph2016.info/about_us', function() {
    
    homepage.get('https://s1.ph2016.info/about_us');
    expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/about_us");
})
  
it('Welcome to Happy Family Store s1.ph2016.info/site/order', function() {
    
    homepage.get('https://s1.ph2016.info/site/order');
    expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/site/order");
      
})

it('Welcome to Happy Family Store s1.ph2016.info/Testimonials', function() {
    
    homepage.get('https://s1.ph2016.info/Testimonials');
    expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/Testimonials");
      
})

// it('Welcome to Happy Family Store s1.ph2016.info/site/order', function() {
    
//     homepage.get('https://s1.ph2016.info/site/order');
//     expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/site/order");
      
// })

it('Welcome to Happy Family Store s1.ph2016.info/catalog/bestseller', function() {
    
    homepage.get('https://s1.ph2016.info/catalog/bestseller');
    expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/catalog/bestseller");
      
})

it('Welcome to Happy Family Store s1.ph2016.info/faq', function() {
    
    homepage.get('https://s1.ph2016.info/faq');
    expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/faq");
      
})

it('Welcome to Happy Family Store s1.ph2016.info/Policy', function() {
    
    homepage.get('https://s1.ph2016.info/Policy');
    expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/Policy");
      
})

it('Welcome to Happy Family Store s1.ph2016.info/site/contact', function() {
    
    homepage.get('https://s1.ph2016.info/site/contact');
    expect(browser.getCurrentUrl()).toEqual("https://s1.ph2016.info/site/contact");
      
})

});