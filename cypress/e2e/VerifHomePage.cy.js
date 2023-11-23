export const verifHomePage =()=> {
    // verifier la presence du Bandeau supérieur titre par défaut
        cy.get('.panel.wrapper > .panel').should('contain','Click “Write for us” link in the footer to submit a guest post');
     // verifier la presence de bouton se loguer  
        cy.get('.panel > .header > .authorization-link > a').should('be.visible')
        // verifier la presence de bouton Create an Account
        cy.get('.panel > .header > :nth-child(3) > a').should('be.visible')
        // verifier la presence du logo et du titre du site "LUMA"
        cy.get('.logo > img').should('be.visible')
       //Récupérer les éléments d’un menu, au choix
        cy.get('#ui-id-2').trigger('mouseover');
        cy.get('#ui-id-2').within(()=> {
        cy.get('#ui-id-4').each((menuItem) => {
        cy.wrap(menuItem).should('be.visible')
      })
    })
       //Contrôler les items du footer en prenant queleques items
    cy.get('.widget > ul > :nth-child(1) > a').should('be.visible')
    cy.get('.widget > ul > :nth-child(3) > a').should('be.visible')
    cy.get('.footer > :nth-child(1) > a').should('be.visible')
    }