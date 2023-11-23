import {remplirFormulaire} from "./CreateAccount.cy"
export const PassageCommande =()=> {
 //Cliquer sur "Create an account"
 cy.get('.panel > .header > .authorization-link > a').click()
 cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').should('be.visible').click()
 remplirFormulaire()
 //cliquer sur le choix de commande à passer "women""tops"
 cy.get('#ui-id-4').click()
 cy.get('dd > .items > :nth-child(1) > a').click()
 cy.get(':nth-child(2) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
 //cy.screenshot(screenshotName);
 //cliquer sur la taille et la couleur du commande
 cy.get('#option-label-size-143-item-167').click();
 cy.get('#option-label-color-93-item-57').click();
 cy.get('#product-addtocart-button').should('be.visible')
 //ajouter la commande à la carte
 cy.get('#product-addtocart-button').click()
 cy.wait(2000)
 cy.get('.showcart > .counter').should('be.visible')
 
 cy.get('.showcart').should('be.visible').click()

//cliquer sur la liste des achats
 cy.get('#top-cart-btn-checkout').click()
 cy.wait(5000)
 cy.get('._active > span').should('be.visible')
 //Remplir le formulaire pour payes la commande
 
 cy.get('[name="street[0]"]').type('11 rue Marco polo')
 cy.get('[name="city"]').type('city')
 cy.get('[name="region_id"]').select('California')
 cy.get('[name="postcode"]').type('12354-54667')
 cy.get('[name="telephone"]').type('00231443233')
 cy.get(':nth-child(2) > :nth-child(1) > .radio').click()
 cy.get('.button').click()

}