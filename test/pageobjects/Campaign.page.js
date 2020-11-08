const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CampaignPage extends Page {
    /**
     * define selectors using getter methods
     */
    get CompanylogoValidate(){return $('//*[@id="site-nav-topbar-wrapper"]/nav/div[1]/a')}
    get CarButtonObject(){return $('//*[@id="site-nav-topbar-wrapper"]/nav/div[2]/button')}

    
    get CampaignHeader () { return $('h1') }
    get CampaignHeaderSubSection () { return $('//*[@id="root"]/div/div/main/div[1]/section/p') }

    get validatingofthePlayButton(){return $('//*[@id="root"]/div/div/main/div[2]/section/div/button/div/video')}

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('car-safety/a-million-more');
    }
}

module.exports = new CampaignPage();
