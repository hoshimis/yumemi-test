/// <reference types="cypress" />
import { PREFECTURES, PREFECTURESCOLORS } from '@/app/consts/consts'

describe('Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('That the chart is drawn when the checkbox is clicked for each prefectures', () => {
    Cypress._.times(PREFECTURES.length, (i) => {
      cy.get('section:nth-of-type(2) > p').should(
        'have.text',
        'チェックボックスにチェックするとその県の人口構成を見ることができます！'
      )
      cy.get(`input[name="${PREFECTURES[i]}"]`).click()
      cy.get('section:nth-of-type(2) > p').should('not.exist')
      cy.get('.recharts-line').should('have.length', 1)
      cy.get('.recharts-line')
        .children()
        .should('have.attr', 'stroke', `${PREFECTURESCOLORS[PREFECTURES[i]]}`)
      cy.get(`input[name="${PREFECTURES[i]}"]`).click()
      cy.get('section:nth-of-type(2) > p').should(
        'have.text',
        'チェックボックスにチェックするとその県の人口構成を見ることができます！'
      )
    })
  })
})

export {}
