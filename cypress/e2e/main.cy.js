import { remplirFormulaire } from "./CreateAccount.cy"
describe('test cdiscount', () => {
    
    //visiter le site
    beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
    }) ;
    it('creation de compte', () => {
    //Cliquer sur "Create an account"
    cy.get('.panel > .header > :nth-child(3) > a').click()
    remplirFormulaire();

    })
})