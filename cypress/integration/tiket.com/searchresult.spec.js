describe('Search Result Spec', () => {
    it('Visit the landing for flight search', () => {
        cy.visit('https://tiket.com/pesawat');
    });
    it('Click "Sekali Jalan" for flight trip type', () => {
        cy.contains('Sekali Jalan').click();
        cy.get('.left-side').should('have.class', 'show-overlay');
    });+
    it('Click the origin and type "cgk" and select the "Jakara, Indonesia" as origin', () => {
        cy.get('.input-airport').eq(0).click();
        cy.get('.input-airport').eq(0).type('cgk');
        cy.contains('Jakarta, Indonesia').click();
        cy.get('.input-airport').eq(0).should('have.value', 'Soekarno Hatta (CGK)');
    });
    it('Click the destination and type "sin" and select the "Jakara, Indonesia" as origin', () => {
        cy.get('.input-airport').eq(1).click();
        cy.get('.input-airport').eq(1).type('sin');
        cy.contains('Singapore Changi Apt').click();
        cy.get('.input-airport').eq(1).should('have.value', 'Singapore Changi Apt (SIN)');
    });
    it('Click the "30th" day of october, and change the departure date', () => {
        cy.get('[aria-label="Choose Rabu, 30 Oktober 2019 as your check-in date. It’s available."]').click();
        cy.get('.input-datepicker').should('have.value', 'Rab, 30 Okt 2019');
    });
    it('Click "Selesai" and Click the "Cari Penerbangan" to have search processing the flights list', () => {
        cy.contains('SELESAI').click();
        cy.get('.input-passengerclass').should('have.value', '1 penumpang, Ekonomi');
        cy.contains('CARI PENERBANGAN').click();
        cy.wait(3000);
        cy.contains('Lion Air');
        cy.contains('Jetstar Asia');
    });
});