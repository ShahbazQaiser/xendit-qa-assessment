/* 
Author: Shahbaz Qaiser
*/

import * as calculatorKeys from "../../common/pages/calculator";

// Validate Page Title
describe('Page Title Verification', () => {
    it('Visit on Landing Page', function () {
        calculatorKeys.pageTitleVerification()
    })
});

// Validate the CE button change on C
describe('Match Ce to C Button', () => {
    it('Perform Minus Operations', function () {
        calculatorKeys.calcNumberNine()
        cy.matchImageSnapshot('Difference');
        calculatorKeys.calcMinusOperator()
        calculatorKeys.calcNumberEight()
    });

    it('Matching Buttons', () => {
        calculatorKeys.calcEqualOperator()
        cy.matchImageSnapshot();
    });
});

// Valiadte Subtract Functionalty
describe('Subtract', () => {
    it('Perform Minus Operations', function () {
        calculatorKeys.calcNumberNineForCalculations()
        cy.screenshot();
        calculatorKeys.calcMinusOperator()
        calculatorKeys.calcNumberEight()
        cy.screenshot();
        calculatorKeys.calcEqualOperator()
        cy.screenshot();
    });
});

// Validate Divison Functionality
describe('Division', () => {
    it('Perform Division Operations', function () {
        calculatorKeys.calcNumberNineForCalculations()
        cy.screenshot();
        calculatorKeys.calcDivideOperator()
        calculatorKeys.calcNumberEight()
        cy.screenshot();
        calculatorKeys.calcEqualOperator()
        cy.screenshot();
    });
});
