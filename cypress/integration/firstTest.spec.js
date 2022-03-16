/// <reference types="cypress" />

// describe('our first suite', () => {
//   it('first test', () => {
//     cy.visit('/');
//     cy.contains('Forms').click();
//     cy.contains('Form Layouts').click();
//     // search element by tag name
//     cy.get('input');

//     // by id
//     cy.get('#inputEmail1');

//     //by class name
//     cy.get('.input-full-width');

//     // by attribute name
//     cy.get('[placeholder]');

//     // by attribute name and value
//     cy.get('[placeholder="Email"]');

//     //find element by class value - entire value for the class attribute
//     cy.get('[class="input-full-width size-medium shape-rectangle"]');

//     //find element by TAG NAME and attribute with value
//     cy.get('input[placeholder="Email"]');

//     //by two different attributes
//     cy.get('[placeholder="Email"][type="email"]');

//     //find element by tag name, attribute with value, id and class name
//     cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

//     //the most recommended way by Cypress
//     cy.get('[data-cy="imputEmail1"]');
//   });
// });

it('second test', () => {
  cy.visit('/');
  cy.contains('Forms').click();
  cy.contains('Form Layouts').click();
  cy.get('[data-cy="signInButton"]');
  cy.contains('Sign in');
  // web element with a attribute status=warning which contains word sign in
  cy.contains('[status=warning]', 'Sign in');
  cy.get('#inputEmail3')
    .parents('form')
    .find('button')
    .should('contain', 'Sign in')
    .parents('form')
    .find('nb-checkbox')
    .click();
  // find nb card which contains text "Horizontal form" and in nb element find element with attribute type="email"
  cy.contains('nb-card', 'Horizontal form').find('[type="email"]');
  // find method in the cypress i to find child element from the parent element
});
