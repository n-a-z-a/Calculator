// Think about how you want to group your tests with describe blocks
// basic operations - single digit (e.g. 7 + 5, 3 * 10 etc)
// basic operations - multiple digits (e.g. 23 + 66, 458 / 19 etc)
// chained operations (e.g. 99 / 4 * 12 + 4012 - 16 / 27)
// extras/validation (e.g. can't put multiple decimal points)

describe ("The Calculator loads", () => {
    it("Loads succesfully", () => {
        cy.visit("http://127.0.0.1:5501/index.html")
    })
})


describe ("Basic Calculations", () => {
    it("can perform addition", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 5
        cy.get("[data-cy=five]").click();
        //click +
        cy.get("[data-cy=plus]").click();
        //click 3
        cy.get("[data-cy=three]").click();
        //click =
        cy.get("[data-cy=equal]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 8);
    })

    it("can perform subtraction", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 7
        cy.get("[data-cy=seven]").click();
        //click -
        cy.get("[data-cy=minus]").click();
        //click 4
        cy.get("[data-cy=four]").click();
        //click =
        cy.get("[data-cy=equal]").click();
        
        //Assert
        cy.get("[data-cy=display]").should("have.text", 3);
    })

    it("can perform multiplication", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 6
        cy.get("[data-cy=six]").click();
        //click *
        cy.get("[data-cy=multiply]").click();
        //click 1
        cy.get("[data-cy=one]").click();
        //click =
        cy.get("[data-cy=equal]").click();
        
        //Assert
        cy.get("[data-cy=display]").should("have.text", 6);
    })

    it("can perform division", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 8
        cy.get("[data-cy=eight]").click();
        //click ÷
        cy.get("[data-cy=divide]").click();
        //click 4
        cy.get("[data-cy=four]").click();
        //click =
        cy.get("[data-cy=equal]").click();
        
        //Assert
        cy.get("[data-cy=display]").should("have.text", 2);
    })
})


describe ("Basic Calculations with multiple digits", () => {
    it("can perform addition with multiple digits", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 5
        cy.get("[data-cy=five]").click();
        //click 4
        cy.get("[data-cy=four]").click();
        //click +
        cy.get("[data-cy=plus]").click();
        //click 8
        cy.get("[data-cy=eight]").click();
        //click 7
        cy.get("[data-cy=seven]").click();
        //click =
        cy.get("[data-cy=equal]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 141);
    })

    it("can perform subtraction with multiple digits", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 2
        cy.get("[data-cy=two]").click();
        //click 4
        cy.get("[data-cy=four]").click();
        //click 6
        cy.get("[data-cy=six]").click();
        //click -
        cy.get("[data-cy=minus]").click();
        //click 1
        cy.get("[data-cy=one]").click();
        //click 7
        cy.get("[data-cy=seven]").click();
         //click 3
         cy.get("[data-cy=three]").click();
        //click =
        cy.get("[data-cy=equal]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 73);
    })
    
    it("can perform multiplication with multiple digits", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 3
        cy.get("[data-cy=three]").click();
        //click 7
        cy.get("[data-cy=seven]").click();
        //click *
        cy.get("[data-cy=multiply]").click();
        //click 4
        cy.get("[data-cy=four]").click();
        //click 7
        cy.get("[data-cy=seven]").click();
        //click =
        cy.get("[data-cy=equal]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 1739);
    })

    it("can perform division with multiple digits", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 5
        cy.get("[data-cy=five]").click();
        //click 0
        cy.get("[data-cy=zero]").click();
        //click ÷
        cy.get("[data-cy=divide]").click();
        //click 1
        cy.get("[data-cy=one]").click();
        //click 0
        cy.get("[data-cy=zero]").click();
        //click =
        cy.get("[data-cy=equal]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 5);
    })
})

describe ("Chained operations with single and multiple digits", () => {
    it("can perform chained operations with single digits", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 4
        cy.get("[data-cy=four]").click();
        //click *
        cy.get("[data-cy=multiply]").click();
        //click 8
        cy.get("[data-cy=eight]").click();
        //click -
        cy.get("[data-cy=minus]").click();
        //click 7
        cy.get("[data-cy=seven]").click();
        //click ÷
        cy.get("[data-cy=divide]").click();
        //click 5
        cy.get("[data-cy=five]").click();
        //click +
        cy.get("[data-cy=plus]").click();
        //click 3
        cy.get("[data-cy=three]").click();
        //click =
        cy.get("[data-cy=equal]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 8);
    })

    it("can perform chained operations with multiple digits", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 4
        cy.get("[data-cy=four]").click();
        //click 0
        cy.get("[data-cy=zero]").click();
        //click *
        cy.get("[data-cy=multiply]").click();
        //click 5
        cy.get("[data-cy=five]").click();
        //click 2
        cy.get("[data-cy=two]").click();
        //click ÷
        cy.get("[data-cy=divide]").click();
        //click 2
        cy.get("[data-cy=two]").click();
        //click 0
        cy.get("[data-cy=zero]").click();
        //click -
        cy.get("[data-cy=minus]").click();
        //click 7
        cy.get("[data-cy=seven]").click();
        //click 7
        cy.get("[data-cy=seven]").click();
        //click +
        cy.get("[data-cy=plus]").click();
        //click 5
        cy.get("[data-cy=five]").click();
        //click 3
        cy.get("[data-cy=three]").click();
        //click 6
        cy.get("[data-cy=six]").click();
        //click =
        cy.get("[data-cy=equal]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 563);
    })
})

describe ("Percentage", () => {
    it("percentage button divides number by 100", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 5
        cy.get("[data-cy=five]").click();
        //click 0
        cy.get("[data-cy=zero]").click();
        //click %
        cy.get("[data-cy=percentage]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 0.5);
    })
})

describe ("Change sign", () => {
    it("+/- turns a postive number into a negative number", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 8
        cy.get("[data-cy=eight]").click();
        //click 6
        cy.get("[data-cy=six]").click();
        //click +/-
        cy.get("[data-cy=negate]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", -86);
    })

    it("+/- turns a negative number into a positive number", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 9
        cy.get("[data-cy=nine]").click();
        //click -
        cy.get("[data-cy=minus]").click();
        //click 1
        cy.get("[data-cy=one]").click();
        //click 3
        cy.get("[data-cy=three]").click();
        //click =
        cy.get("[data-cy=equal]").click();
        //click +/-
        cy.get("[data-cy=negate]").click();

        //Assert
        cy.get("[data-cy=display]").should("have.text", 4);
    })
})


describe ("Decimals", () => {
    it("no more than one decimal point per number example one", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 5
        cy.get("[data-cy=five]").click();
        //click .
        cy.get("[data-cy=point]").click();

        //Assert
        cy.get("[data-cy=point]").should('be.disabled');
    })

    it("no more than one decimal point per number example two", () => {
        //Arrange
        cy.visit("http://127.0.0.1:5501/index.html")
        
        //Act
        //click 5
        cy.get("[data-cy=five]").click();
        //click .
        cy.get("[data-cy=point]").click();
        //click 5
        cy.get("[data-cy=five]").click();

        //Assert
        cy.get("[data-cy=point]").should('be.disabled');
    })
})