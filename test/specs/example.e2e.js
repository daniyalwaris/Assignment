
const CampaignPage = require('../pageobjects/Campaign.page');

before(function (){
    CampaignPage.open();
  })

describe('Campaign Page', () => {
    
    it('Should validate the Navigation Page', () => 
    {
            
        expect(browser).toHaveTitle('A million more | Volvo Cars');

    });
    
   /* it('should validare the button is clickable' , () =>
    {
        const  Car_Button = CampaignPage.Car_Button.isClickable();

        if (Car_Button == true)
        {
            console.log('Button is clickable');
        }
        else
        {
            console.log('Button is not clickable')
        }
    });
*/
    it('Get the Header Section Text', () => 
    {
        console.log(CampaignPage.CampaignHeader.getText());
        console.log(CampaignPage.CampaignHeaderSubSection.getText());
    } )

});