
import { remplirFormulaire } from "./CreateAccount.cy"
import { verifHomePage } from "./VerifHomePage.cy"
import { PassageCommande } from "./PassageCommande.cy"

describe('test cdiscount', () => {
    
  //visiter le site
  beforeEach(() => {
  cy.visit('https://magento.softwaretestingboard.com/')
  }) ;
  it('creation de compte', () => {
  //Cliquer sur "Create an account"
  cy.get('.panel > .header > :nth-child(3) > a').click()
  remplirFormulaire();
  
  //definir le format de screenshot
  //const timestamp = Cypress.moment().format('YYYYMMDD_HHmmss');//obtenir la date et l'heure actuelles
  //const screenshotName = 'test case ${timestamp}'; 
  //cy.screenshot(screenshotName);  
})
it('verification de la home page', () => {
  verifHomePage();

})
it('passage de commande', () => {

  PassageCommande();
})

})
