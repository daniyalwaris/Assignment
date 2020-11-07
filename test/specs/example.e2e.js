const CampaignPage = require('../pageobjects/Campaign.page');


describe('My Login application', () => {
    it('should login with valid credentials', () => {
        CampaignPage.open();
        expect(browser).toHaveTitle('A million more | Volvo Cars');


    });
});


