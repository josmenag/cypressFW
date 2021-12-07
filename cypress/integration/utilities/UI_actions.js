function Click(element) {
  cy.get(element, {
    timeout: 1000,
  })
    .scrollIntoView({
      force: true,
    })
    .invoke("show")
    .should("exist", "Element doesn't exists")
    .click(
      {
        force: true,
      },
      {
        delay: 10,
      },
      {
        log: true,
      },
      {
        retries: 2,
      }
    );
}
exports.Click = Click;


function ClickByText(text) {
    cy.contains(
        text,
        {
            timeout: 5000,
        },
        {
            log: true,
        }
    )
        .scrollIntoView({
            force: true,
        })
        .invoke('show', {
            timeout: forcedTimeOut,
        })
        .should('be.visible', 'Element is not visible')
        .and('exist', "Element doesn't exists")
        .then(($element) => {
            expect($element, "Not logged in - can't locate navigation tree").to
                .be.visible
            cy.wrap($element, {
                message: 'custom error message 1',
            }).click({
                force: true,
            })
        })
}
exports.ClickByText = ClickByText

function Type(element, text) {
    cy.get(element).click({ force: true })
    cy.get(element, {
        timeout: 5000,
    })
        .invoke('show')
        .should('be.visible', 'Element is not visible')
        .should('exist', "Element doesn't exists")
        .clear()
        .type(
            text,
            {
                force: true,
            },
            {
                delay: 10,
            },
            {
                log: true,
            },
            {
                retries: 2,
            }
        )
        .should('have.value', text)
}
exports.Type = Type