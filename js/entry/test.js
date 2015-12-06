'use strict';

require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery'
    }
});
require(['jquery'], function ($) {});