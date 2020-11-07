const CampaignPage = require('../pageobjects/Campaign.page');


describe('My Login application', () => {
    
    before(function (){
        CampaignPage.open();
      })


    it('should login with valid credentials', () => {
        
        expect(browser).toHaveTitle('A million more | Volvo Cars');

    });


    it('Header Section Text', () => 
    {
        console.log(CampaignPage.CampaignHeader.getText());
        console.log(CampaignPage.CampaignHeaderSubSection.getText());
    } );

});


