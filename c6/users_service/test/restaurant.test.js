describe('Restaurant tests', () => {
    it.only('Get qr hash', async () => {
        await
        request.get('/api/v1/restaurant/1/table/1/hash')
            .expect(200)
    });
});