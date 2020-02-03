/* 
Author: Shahbaz Qaiser
*/

// For Page 'Title' Assertion
export const pageTitleVerification = () => {

    cy.visit('/')
    cy.title()
        .should('eq', 'Full Screen Calculator - Online Calculator');
}

// For Click on button (9) and matching by visulization
export const calcNumberNine = () => {
    cy.wait(1000)
        .get('iframe')                                              //switching to iFrame
        .then(function ($iframe) {
            const $body = $iframe.contents().find('body')[0]        // Get first body of iFrame
            cy.matchImageSnapshot('beforeNinePress');               //Before and After Matching
            cy.get($body)
                .find('canvas[id="canvas"]')                        //Get canvas and clicks on coordinates
                .click(200, 200)                                    //Button (9) coordinates
            cy.matchImageSnapshot('afterNinePress');                //Before and After Matching
        })
}

// For Click on button (9) for operations
export const calcNumberNineForCalculations = () => {
    cy.wait(1000)
        .get('iframe')
        .then(function ($iframe) {
            const $body = $iframe.contents().find('body')[0]
            cy.get($body)
                .find('canvas[id="canvas"]')
                .click(200, 200)                                    //Button (9) coordinates
        })
}

export const calcNumberEight = () => {
    cy.wait(1000)
        .get('iframe')
        .then(function ($iframe) {
            const $body = $iframe.contents().find('body')[0]
            cy.get($body)
                .find('canvas[id="canvas"]')
                .click(120, 200)                                     //Button (8) coordinates
        })
}

export const calcDivideOperator = () => {
    cy.wait(1000)
        .get('iframe')
        .then(function ($iframe) {
            const $body = $iframe.contents().find('body')[0]

            cy.get($body)
                .find('canvas[id="canvas"]')
                .click(300, 200)                                    //Button (Divide) coordinates
        })
}

export const calcMinusOperator = () => {
    cy.wait(1000)
        .get('iframe')
        .then(function ($iframe) {
            const $body = $iframe.contents().find('body')[0]
            cy.get($body)
                .find('canvas[id="canvas"]')
                .click(300, 400)                                    //Button (Minus) coordinates
        })
}

export const calcEqualOperator = () => {
    cy.wait(1000)
        .get('iframe')
        .then(function ($iframe) {
            const $body = $iframe.contents().find('body')[0]
            cy.get($body)
                .find('canvas[id="canvas"]')
                .click(350, 450)                                    //Button (Equal) coordinates
        })
}