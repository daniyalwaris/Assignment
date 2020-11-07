const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CampaignPage extends Page {
    /**
     * define selectors using getter methods
     */
    get CampaignHeader () { return $('h1') }
    get CampaignHeaderSubSection () { return $('//*[@id="root"]/div/div/main/div[1]/section/p') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('car-safety/a-million-more');
    }
}

module.exports = new CampaignPage();
