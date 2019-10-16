const expect = require('chai').expect;

describe('Redis test', function () {

    context('Basic redis commands', function () {
        let cacheManager;

        before(function () {
            cacheManager = require('../helpers/cache_manager');
        })

        it('Should set and get basic key ', async function () {
            await cacheManager.setAsync('key', 'value');
            const value = await cacheManager.getAsync('key');
            expect(value === 'value').to.be.true;
        });

        it('Should set and get basic key 2', async function () {
            await cacheManager.setAsync('key', 'value');
            const value = await cacheManager.getAsync('key');
            expect(value === 'value2').to.be.false;
        });
    });
});