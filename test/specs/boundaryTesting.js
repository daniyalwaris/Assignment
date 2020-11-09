const CampaignPage = require('../pageobjects/Campaign.page');

before (function()
{
     CampaignPage.open();
})
describe('Boundary Value Analysis Scenario', () => {
    
    
      it('SUV model Should be 4 in the Explore model', () => 
      {
        // Save a screen
        const  model_show = CampaignPage.model_count.length;   
       expect(model_show).toEqual(4);
       });

       it('SUV model count shoudl be less than 5 in the Explore model', () => 
       {
         // Save a screen
         const  model_show = CampaignPage.model_count.length;   
        expect(model_show).toBeLessThan(5);
        });

        it('SUV model count should  be greater than 0 in the Explore model', () => 
       {
         // Save a screen
         const  model_show = CampaignPage.model_count.length;   
        expect(model_show).toBeGreaterThan(0);
        });
 
    });