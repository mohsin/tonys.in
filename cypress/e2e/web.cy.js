/// <reference types="cypress" />

describe('Strongly Typed', () => {

 
  // Open Eyes to start visual testing before each test.
  beforeEach(() => {
      cy.eyesOpen({
          appName: 'Strongly Typed',
          testName: Cypress.currentTest.title,
      })
  })

  it('should load the website', () => {

      // Load the home page.
      cy.visit('http://localhost:3000')

      // Verify the home page loaded correctly.
      cy.eyesCheckWindow({
          tag: "Home page",
          target: 'window',
          fully: true,
          matchLevel: 'Exact'
      });

      // Load the left sidebar page.
      cy.visit('http://localhost:3000/left-sidebar')

      // Verify the left sidebar page loaded correctly.
      cy.eyesCheckWindow({
          tag: "Left Sidebar page",
          target: 'window',
          fully: true,
          matchLevel: 'Exact'
      });

      // Load the right sidebar page.
      cy.visit('http://localhost:3000/right-sidebar')

      // Verify the right sidebar page loaded correctly.
      cy.eyesCheckWindow({
          tag: "Right Sidebar page",
          target: 'window',
          fully: true,
          matchLevel: 'Exact'
      });

      // Load the no sidebar page.
      cy.visit('http://localhost:3000/no-sidebar')

      // Verify the no sidebar page loaded correctly.
      cy.eyesCheckWindow({
          tag: "No Sidebar page",
          target: 'window',
          fully: true,
          matchLevel: 'Exact'
      });
  })

  // Cleanup after each test.
  afterEach(() => {
      cy.eyesClose()
  })
})
