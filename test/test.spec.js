describe('Volvo Car Safety Page', () => {
    it('should have the title "A Million More"', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        expect(browser.getTitle()).toBe('A Million More');
    });

    it('should display the main heading', () => {
        const mainHeading = $('h1').getText();
        expect(mainHeading).toBe('A Million More.');
    });

    it('should have a visible "Learn more" button', () => {
        const learnMoreButton = $('[data-test-id="cta-button"]');
        expect(learnMoreButton.isDisplayed()).toBe(true);
    });
});
