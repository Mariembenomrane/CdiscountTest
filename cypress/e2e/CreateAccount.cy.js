
  
export const remplirFormulaire = () => {
    // Générer un nom d'utilisateur, prénom et email aléatoires 
    const username = generateRandomUsername(); 
    const firstName = generateRandomFirstName(); 
    const email = `${firstName}.${username}@yopmail.com`; 
    // Remplir les champs de nom, prénom et email avec les valeurs générées

    cy.get('#firstname').type(firstName); 
    cy.get('#lastname').type(username); 
     cy.get('#email_address').type(email); 
     // Remplir le champ de mot de passe 
     cy.get('#password').type('MonMotDepasse123');
     cy.get('#password-confirmation').type('MonMotDepasse123');
// Générer un nom d'utilisateur aléatoire 

function generateRandomUsername() { 
   const randomDigits = Math.floor(Math.random() * 900000) + 100000; 
   // Génère un nombre aléatoire à 6 chiffres 
   return `user_${randomDigits}`; 
 }
  
 // Générer un prénom aléatoire 
 function generateRandomFirstName() 
 { const alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
 let firstName = ''; for (let i = 0; i < 5; i++) 
 { const randomIndex = Math.floor(Math.random() * alphabet.length);
    firstName += alphabet[randomIndex]; }
     return firstName; 
 } 
    
 
    
      //cy.screenshot('remplissage de formulaire 18/11/2023')
       // Cliquer sur le bouton de connexion 
       cy.get('#form-validate > .actions-toolbar > div.primary > .action').click(); 
       // verifier la Présence du logo et du titre du site "LUMA"
       cy.get('img').should('exist');
}
