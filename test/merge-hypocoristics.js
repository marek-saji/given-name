const assert = require('assert');

const merge = require('../utils/merge-hypocoristics');


describe('merge-hypocoristics', function () {
    it('should combine', function () {
        assert.deepStrictEqual(
            merge(
                [
                    ['a', 'b'],
                    ['c', 'd'],
                ],
                [
                    [1, 2],
                    [3, 4],
                ]
            ),
            [
                ['a', 'b'],
                ['c', 'd'],
                [1, 2],
                [3, 4],
            ],
            'Does not combine properly'
        );
    });

    it('should merge', function () {
       assert.deepStrictEqual(
           merge(
               [
                   ['a', 'b'],
                   ['c', 'd'],
               ],
               [
                   ['A', 'b'],
                   ['E', 'd'],
               ]
           ),
           [
               ['a', 'b', 'A'],
               ['c', 'd', 'E'],
           ],
           'Does not merge properly'
       );
    });
});
