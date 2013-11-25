/**
* Library Checker
* @author: jsimonait <jsimonait@gmail.com>
*/

(function(root, undefined) {

        root.libChecker.libs = new function () {

        var helpers = root.libChecker.helpers;

        this.jquery = new function () {
            var lib = this;

            this.exist = function() { 
                return typeof jQuery != 'undefined'; 
            };

            this.version = new function() {
                this.getCurrent = function () {
                    if (!lib.exist()) return undefined;
                    
                    return jQuery.fn.jquery;
                };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function(version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function(version) { return helpers.greaterThan(lib, version); };
            };
        };

        this.marionette = new function () {
            this.exist = function() {
                 return typeof Marionette != 'undefined';
            };
        };

        this.backbone = new function () {
            var lib = this;

            this.exist = function () { 
                return typeof Backbone != 'undefined'; 
            };

            this.version = new function() {
                this.getCurrent = function () {
                    if (!lib.exist()) return undefined;
                    
                    return Backbone.VERSION;
                };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function(version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function(version) { return helpers.greaterThan(lib, version); };
            };
        };

        this.underscore = new function () {
            var lib = this;

            this.exist = function () { 
                return typeof _ != 'undefined'; 
            };

            this.version = new function() {
                this.getCurrent = function () {
                    if (!lib.exist()) return undefined;
                    
                    return _.VERSION;
                };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function(version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function(version) { return helpers.greaterThan(lib, version); };
            };
        };

        this.knockout = new function () {
            var lib = this;

            this.exist = function () { 
                return typeof ko != 'undefined'; 
            };

            this.version = new function() {
                this.getCurrent = function () {
                    if (!lib.exist()) return undefined;

                    return ko.version;
                };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function(version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function(version) { return helpers.greaterThan(lib, version); };
            };
        };

        this.require = new function () {
            var lib = this;

            this.exist = function () { 
                return typeof require != 'undefined'; 
            };

            this.version = new function() {
                this.getCurrent = function () {
                    if (!lib.exist()) return undefined;

                    return require.version;
                };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function(version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function(version) { return helpers.greaterThan(lib, version); };
            };
        };

    };

})(window);