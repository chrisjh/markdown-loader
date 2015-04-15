/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author peerigon UG @peerigon 2014
 Author Chris Hendel @chrisjh 2015
 */

var metaMarked = require("meta-marked");

metaMarked.setOptions({
    renderer: new metaMarked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

module.exports = function(markdown) {
    this.cacheable();
    return metaMarked(markdown);
};