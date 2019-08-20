/// <reference types="Cypress" />

context('Visual testing', () => {
  before(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('shows the landing page', () => {
    cy.wait(1000);
    cy.eyesOpen({
      appName: 'Vue Material',
      testName: 'Shows the landing page',
      browser: { width: 800, height: 600 }
    });
    cy.eyesCheckWindow('Landing page');
  });

  it('shows the getting started page', () => {
    cy.get('[data-cy=gettingStarted]').click();
    cy.wait(1000);
    cy.eyesOpen({
      appName: 'Vue Material',
      testName: 'Shows the getting started page',
      browser: { width: 800, height: 600 }
    });
    cy.eyesCheckWindow('Getting Started page');
  });

  it('shows the components page', () => {
    cy.go('back');
    cy.get('[data-cy=components]').click();
    cy.wait(1000);
    cy.eyesOpen({
      appName: 'Vue Material',
      testName: 'Shows the components page',
      browser: { width: 800, height: 600 }
    });
    cy.eyesCheckWindow('Component page');
  });
});
