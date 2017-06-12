import {install} from '../dist/src/installer';
import expect from 'expect';
import {PACKAGELIST_REQUIRED_MSG} from '../dist/src/constants';

describe('installer tests', function () {
   it('should error when no packageList provided', function (done) {
       try {
           let result = install();
           done('test failed - exception was not thrown');
       } catch (e) {
           expect(e.message).toEqual(PACKAGELIST_REQUIRED_MSG);
           done();
       }
   });

    it('should install 2 packages', function (done) {
        try {
            let input = ['KittenService: CamelCaser', 'CamelCaser: '];
            let result = install(input);
            expect(result).toEqual('CamelCaser, KittenService')
            done();
        } catch (e) {
            done(e);
        }
    });
});
