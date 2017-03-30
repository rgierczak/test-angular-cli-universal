import { TestAngularCliUniversalPage } from './app.po';

describe('test-angular-cli-universal App', () => {
    let page: TestAngularCliUniversalPage;

    beforeEach(() => {
        page = new TestAngularCliUniversalPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
