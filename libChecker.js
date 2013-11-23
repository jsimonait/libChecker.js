/**
* Library Checker
* @author: jsimonait <jsimonait@gmail.com>
*/


(function(root, undefined) {

    root.libChecker = new function() {
        var that = this;

        this.exist = function(name) {
            return that.libs[name].exist();
        };

        this.version = {
            getCurrent: function(name) {
                return that.libs[name].version.getCurrent();
            },
            equal: function(name, version) {
                return that.libs[name].version.equal(version);
            },
            lessThan: function(name, version) {
                return that.libs[name].version.lessThan(version);
            },
            greaterThan: function(name, version) {
                return that.libs[name].version.greaterThan(version);
            },
        };

        this.libs = {};

        this.helpers = {
            /*
             * Returns:
             * -1 = left is LOWER than right
             *  0 = they are equal
             *  1 = left is GREATER = right is LOWER
             *  And FALSE if one of input versions are not valid
            */
            compare: function(left, right) {
                if (typeof left + typeof right != 'stringstring')
                    return false;
                
                var a = left.split('.'),
                    b = right.split('.'),
                    i = 0, len = Math.max(a.length, b.length);
                    
                for (; i < len; i++) {
                    if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
                        return 1;
                    } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
                        return -1;
                    }
                }
                
                return 0;
            },
            isValid: function(lib, cversion, version){
                if (!lib.exist() || 
                    cversion === undefined || 
                    cversion === null || 
                    cversion === ""){
                    return false;
                }

                return true;
            },
            equal: function(lib, version) { 
                var cversion = lib.version.getCurrent();
                var helpers = root.libChecker.helpers;

                if(!helpers.isValid(lib, cversion, version)) return undefined;

                return helpers.compare(cversion, version) === 0;
            }, 
            lessThan: function(lib, version) { 
                var cversion = lib.version.getCurrent();
                var helpers = root.libChecker.helpers;

                if(!helpers.isValid(lib, cversion, version)) return undefined;

                return helpers.compare(cversion, version) === -1;
            },
            greaterThan:  function(lib, version) { 
                var cversion = lib.version.getCurrent();
                var helpers = root.libChecker.helpers;

                if(!helpers.isValid(lib, cversion, version)) return undefined;

                return helpers.compare(cversion, version) === 1;
            }
        };
    };

    root.libChecker.libs = new function(){
        
        var helpers = root.libChecker.helpers;

        this.jquery = new function(){
            var lib = this;
            
            this.exist = function() { return typeof jQuery != 'undefined'; };

            this.version = new function() {
                this.getCurrent = function() { return jQuery.fn.jquery; };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function (version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function (version) { return helpers.greaterThan(lib, version); };
            }
        };

        this.marionette = new function(){
            this.exist = function() { return typeof Marionette != 'undefined'; };
        };

        this.backbone = new function(){
            var lib = this;
            
            this.exist = function() { return typeof Backbone != 'undefined'; };

            this.version = new function() {
                this.getCurrent = function() { return Backbone.VERSION; };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function (version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function (version) { return helpers.greaterThan(lib, version); };
            }
        };

        this.underscore = new function(){
            var lib = this;
            
            this.exist = function() { return typeof _ != 'undefined'; };

            this.version = new function() {
                this.getCurrent = function() { return _.VERSION; };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function (version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function (version) { return helpers.greaterThan(lib, version); };
            }
        };

        this.knockout = new function(){
            var lib = this;
            
            this.exist = function() { return typeof ko != 'undefined'; };

            this.version = new function() {
                this.getCurrent = function() { return ko.version; };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function (version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function (version) { return helpers.greaterThan(lib, version); };
            }
        };

        this.require = new function(){
            var lib = this;
            
            this.exist = function() { return typeof require != 'undefined'; };

            this.version = new function() {
                this.getCurrent = function() { return require.version; };
                this.equal = function(version) { return helpers.equal(lib, version); };
                this.lessThan = function (version) { return helpers.lessThan(lib, version); };
                this.greaterThan = function (version) { return helpers.greaterThan(lib, version); };
            }
        };
        
    };

})(window);