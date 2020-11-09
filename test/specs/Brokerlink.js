//get all the links on the page.

describe('Broker link test', () =>
 {  
            it('Broken Link Validation', () => 
            {
           browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
            const links = $$('a');

            const urls  = links.map(link => link.getAttribute('href'));
          
             urls.forEach(async function (url)
                  {
                  
                        const response = await fetch(url);
                        expect(statusCode).toBeLessThan(400);

             

            })
            
            });
    
  });









