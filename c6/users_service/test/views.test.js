describe('Views tests', () => {

    it('Should get 200', async () => {
        await request.get(rootUrl + 'views').expect(200)
    });
});