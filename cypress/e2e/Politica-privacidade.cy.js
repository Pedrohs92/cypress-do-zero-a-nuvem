describe('Política de Privacidade', () => {
    //it define o caso de teste, nesse caso visita a url e verifica o titulo  
 beforeEach(() => {
   cy.visit('./src/privacy.html')
})
it('Testa a página de política de privacidade em uma nova aba',() => {
    cy.contains('h1', 'CAC TAT - Política de Privacidade')
    .should('be.visible')
    cy.contains('p','Talking About Testing')
    .should('be.visible')           
    
 })



})

