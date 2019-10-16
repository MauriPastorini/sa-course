describe('Health routes', () => {

    const rootUrl = '/api/v1/';

    it('Should return ping pong', async () => {
        await request.get(rootUrl + '/health/ping').expect(200);
    });
    
});