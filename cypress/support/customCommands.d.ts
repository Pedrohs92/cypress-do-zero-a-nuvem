declare namespace Cypress {
    interface Chainable<Subject> {
        PreenchimentoComTelefoneObrigatorio(): Chainable<any>
        PreenchimentoComEmailObrigatorio(): Chainable<any>
  }
}