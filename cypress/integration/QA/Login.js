
describe('Login', function(){
    it('Sign in', function(){
        cy.visit(Cypress.config('baseUrl'));
        cy.get('#username').type('l.jenkins');
        cy.get('#password').type('hunter2');
        cy.get('.MuiButton-label').click();
      
    })

    it('Fill Form and submit', function(){
        cy.get('#firstname').type('jenkins');
        cy.get('#lastname').type('hunter');
        cy.get('#email').type('matillion@gmail.com');
        cy.get('#phone').type('07891919191');
        cy.get('#company').type('Tims Company');
        cy.get('.MuiInputBase-root > #postcode').type('E3 3LP')
        cy.get('#feedback').type('{enter}');
        cy.get('.MuiButton-label').click({force: true});



        
    })



})