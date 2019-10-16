describe('Import tests', () => {

    const rootUrl = "/api/v1/";
    const secret = process.env.ADMIN_SECRET;

    it('Should return empty insert ok', async () => {
        await request
            .post(rootUrl + "/import/all")
            .set("secret", secret)
            .expect(200);
    });

});