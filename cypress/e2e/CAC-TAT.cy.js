// Describe define a suite de testes, estória ou feature
describe('Central de Atendimento ao Cliente TAT', () => {
   //it define o caso de teste, nesse caso visita a url e verifica o titulo  
beforeEach(() => {
  cy.visit('./src/index.html')
  //comando para visitar a url
})
   it('Visita a url local', () => {
       cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    //comando para validar se o título está igual
   })
    it('Preenche os campos obrigatórios e enva o formulário', () => {
    const longText = Cypress._.repeat('muitas vezes', 10)
    //repetir os mesmo caracteres 10 vez, insetir o nome da variável no na função type
      cy.get('#firstName').type('Pedro')
      cy.get('#lastName').type('Santana')
      cy.get('#email').type('pedro@henrique.com', {})
      cy.get('#email').should('be.visible')
      cy.get('#phone').type(1199999999)
      cy.get('#product').select('youtube')
      cy.get('#open-text-area').type (longText, {delay: 99})
    //inserido a variável de repetição e delay de digitação
      cy.get('button[type="submit"]').click()
    //sempre começa cy.get,seguido do nome elemento ou campo a ser digitado, seguido da ação, se será selecionar, clicar ou digitar, e o valor a ser digitado ou escolhido
    //em relação ao button, tem a classe chamada button, mas para diferenciar especifiquei o type=submit 
    //id começa com # (exemplos email, phone, firstName...) e classe começa com ponto(.success)
      cy.get('.success').should('be.visible')
    //valida se a mensagem de sucesso é exibida
   })
      it('Validar mensagem de erro de email é exibida',() => {
         cy.get('#firstName').type('Pedro')
         cy.get('#lastName').type('Santana')
         cy.get('#email').type('teste', {})
         cy.get('#email').should('be.visible')
         cy.get('#phone').type(1199999999)
         cy.get('#product').select('youtube')
         cy.get('#open-text-area').type ('Teste')
         cy.get('button[type="submit"]').click()
         cy.get('.error').should('be.visible')
      })

         it('Inserção de telefone inválido',() => {
            cy.get('#phone')
            .type('teste')
            .should('have.value', '')
            //busquei um campo tipo número, digitei letras e validei que o campo não fosse preenchido
         })
           
              it('Validar mensagem de obrigação de telefone com o checkbox de telefone clicado',() => {
                  cy.get('#firstName').type('Pedro')
                  cy.get('#lastName').type('Santana')
                  cy.get('#email').type('teste', {})
                  cy.get('#open-text-area').type ('Teste')
                  cy.get('[for="phone-checkbox"]').click()
                  cy.get('input#phone-checkbox').should('be.checked')
                  cy.get('button[type="submit"]').click()
                  cy.get('.error').should('be.visible')
               })

              it('Preenche e limpa os campos nome, sobrenome, email e telefone',() => {
                  cy.get('#firstName').type('Pedro', {delay: 150})
                  cy.get('#lastName').type('Santana', {delay: 150})
                  cy.get('#email').type('teste', {delay: 150})
                  cy.get('#phone').type(1199999999, {delay: 150})
                  cy.get('#open-text-area').type ('Teste', {delay: 150})
                  cy.get('#firstName').clear ()
                  cy.get('#lastName').clear ()
                  cy.get('#email').clear ()
                  cy.get('#phone').clear ()
                  cy.get('#open-text-area').clear ()
               })

            it('Validar mensagem de erro ao não preencher nenhum campo obrigatório',() => {
               cy.get('button[type="submit"]').click()
               cy.get('.error').should('be.visible')
            })

                  it('Envia o formulário com sucesso usando um comando customizado',() => {
                  cy.PreenchimentoComTelefoneObrigatorio()
                  })

                    it('Envia o formulário com sucesso usando um comando customizado',() => {
                     cy.PreenchimentoComEmailObrigatorio()
                       })

                       it('Preenche, seleciona o campo telefone mas não preenche',() => {
                           cy.get('#firstName').type('Pedro')
                           cy.get('#lastName').type('Santana')
                           cy.get('#email').type('teste')
                           cy.get('#open-text-area').type('Teste')
                           cy.get('#phone-checkbox').check()
                           cy.contains('button' , 'Enviar').click()
                        })

                     it('Selecionando opções em campos list box',() => {
                        cy.get('select').select('Blog')
                        //seleção pelo texto blog
                        cy.get('select').select('youtube')
                        //seleção pelo valor
                        cy.get('select').select(1)
                        //seleção pelo índice

                     })
                     it('Seleciona um produto (Youtube) por seu texto',() => {
                        cy.get('#product').select('YouTube')
                        //seleção pelo texto youtube
                        .should('have.value', 'youtube')
                     })

                     it('Seleciona um produto (Mentoria) por seu valor(value)',() => {
                        cy.get('#product').select('mentoria')
                        //seleção pelo valor Mentoria
                        .should('have.value', 'mentoria')
                     })
                     it('Seleciona um produto (Blog) por seu índice',() => {
                        cy.get('#product').select(1)
                        //seleção pelo seleção 1
                        .should('have.value', 'blog')
                     })

                     it('Seleciona radio button elogio',() => {
                        cy.get('input[type=radio][value="elogio"]').check()
                        //seleção pelo radio button elogio
                        .should ('be.checked','elogio')
                        //checagem se o conteúdo da opção é elogio
                     })

                     it('Seleciona radio button Feedback',() => {
                        cy.get('input[type=radio][value="feedback"]').check()
                        .should ('be.checked','Feedback')
                     })                                             

                     it('Seleciona cada um dos radio button e fazer a verificação',() => { 
                        cy.get ('input[type=radio][value="ajuda"]').check()   
                        .should ('be.checked','Ajuda') 
                        cy.get ('input[type=radio][value="elogio"]').check()
                        .should ('be.checked','elogio')       
                        //selecionei e verifiquei
                        cy.get ('input[type=radio][value="feedback"]').check()
                        .should ('be.checked','Feedback')
                     })          

                     it('Seleciona e deseleciona cada um dos CheckBox e fazer a verificação',() => { 
                        cy.get ('input [type="checkbox"],[value="email"]').check()   
                        .should ('be.checked','email') 
                        cy.get('input[type="checkbox"]').uncheck()
                        //.should ('be.uncheck','[value=email]')
                        cy.get ('input [type="checkbox"],[id="phone-checkbox"]').check()   
                        .should ('be.checked','phone-checkbox') 
                        cy.get('input[type="checkbox"]').uncheck()
                        //.should ('be.uncheck','email')
                     })    

                     it('Marca ambos checkbox e depois desmarca o último',() => {
                        cy.get ('input[type="checkbox"]')
                        .check()   
                        .should('be.checked')
                        .last()
                        .uncheck()
                        .should('not.be.checked')
                     })                     
                     

                     it('Exibe mensagem de erro quando telefone se torna obrigatório mas não é preenchido antes do envio do formulário',() => {
                        cy.get ('input[type="checkbox"]')
                        .check()   
                        .should('be.checked')
                        .last()
                        .uncheck()
                        .should('not.be.checked')
                     })        
                     
                     it('Seleciona um arquivo da pasta fixtures',() => {
                        cy.get ('input[type="file"]')
                        .selectFile('cypress/fixtures/example.json')
                        .should (input => {
                           expect(input[0].files[0].name).to.equal('example.json')

                        }
                     )
                     })                      

                     it('Seleciona um arquivo simulando um drag-and-drop',() => {
                        cy.get ('#file-upload')
                        .selectFile('cypress/fixtures/example.json',{action:'drag-drop'})
                        .should (input => {
                           expect(input[0].files[0].name).to.equal('example.json')

                        }
                     )
                     })     

                     it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',() => {
                        cy.fixture('example.json').as('sampleFile')
                        cy.get ('#file-upload')
                        .selectFile('@sampleFile')
                        .should (input => {
                           expect(input[0].files[0].name).to.equal('example.json')

                        }
                     )
                     }) 

                     it('Verifica que a política de privacidade abre em outra aba sem necessidade de um clique',() => {
                        cy.contains('a','Política de Privacidade')
                        .should ('have.attr','href','privacy.html')
                        .and ('have.attr','target','_blank')

                        
                     
                     })
                     
                     it('Cliquei na política de Privacidade e removi o target que abre o link em outra aba',() => {
                        cy.contains('a','Política de Privacidade')
                        //contém a tag a e o conteúdo da tag que é Política de Privacidade
                        .invoke ('removeAttr','target')
                        //removi o atributo target que abre em uma nova aba
                        .click()
                        cy.contains('h1','CAC TAT - Política de Privacidade')
                           .should('be.visible')                   
                     
                     })

                     it('Testa a página de política de privacidade de forma independente',() => {
                        cy.contains('a','Política de Privacidade')
                        .invoke ('removeAttr','target')
                        .click()
                        cy.get('#title')
                        .should('be.visible') 
                        cy.contains('p','Talking About Testing')
                        .should('be.visible')                  
                     
                     })

            }) 