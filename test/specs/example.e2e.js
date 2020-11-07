
const CampaignPage = require('../pageobjects/Campaign.page');

before(function (){
    CampaignPage.open();
  })

describe('Campaign Page', () => {
    
    it('Should validate the Navigation Page', () => 
    {
            
        expect(browser).toHaveTitle('A million more | Volvo Cars');

    });


    it('Get the Header Section Text', () => 
    {
        console.log(CampaignPage.CampaignHeader.getText());
        console.log(CampaignPage.CampaignHeaderSubSection.getText());
    } );

});


