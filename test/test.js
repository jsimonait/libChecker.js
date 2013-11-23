(function(){

	test( "Main function", function() {
		var lVersion = '1.8.0', cVersion = '1.10.0', gVersion = '1.10.2';

		equal( libChecker.exist('jquery'), true, 'exist');

		equal( libChecker.version.getCurrent('jquery'), cVersion, 'getCurrent');
		equal( libChecker.version.equal('jquery', cVersion), true, 'equal');
		equal( libChecker.version.lessThan('jquery', gVersion), true, 'lessThan');
		equal( libChecker.version.greaterThan('jquery', lVersion), true, 'greaterThan');
	});

	test( "jQuery", function() {
		var lVersion = '1.8.0', cVersion = '1.10.0', gVersion = '1.10.2';

		equal( libChecker.libs.jquery.exist(), true, 'exist');

		equal( libChecker.libs.jquery.version.getCurrent(), cVersion, 'getCurrent');
		equal( libChecker.libs.jquery.version.equal(cVersion), true, 'equal');
		equal( libChecker.libs.jquery.version.lessThan(gVersion), true, 'lessThan');
		equal( libChecker.libs.jquery.version.greaterThan(lVersion), true, 'greaterThan');
	});

	test( "Marionette", function() {
		equal( libChecker.libs.marionette.exist(), true, 'exist');
	});

	test( "Backbone", function() {
		var lVersion = '0.9.1', cVersion = '0.9.9', gVersion = '1.1.0';

		equal( libChecker.libs.backbone.exist(), true, 'exist');

		equal( libChecker.libs.backbone.version.getCurrent(), cVersion, 'getCurrent');
		equal( libChecker.libs.backbone.version.equal(cVersion), true, 'equal');
		equal( libChecker.libs.backbone.version.lessThan(gVersion), true, 'lessThan');
		equal( libChecker.libs.backbone.version.greaterThan(lVersion), true, 'greaterThan');
	});

	test( "Underscore", function() {
		var lVersion = '1.4.2', cVersion = '1.5.0', gVersion = '1.5.2';

		equal( libChecker.libs.underscore.exist(), true, 'exist');

		equal( libChecker.libs.underscore.version.getCurrent(), cVersion, 'getCurrent');
		equal( libChecker.libs.underscore.version.equal(cVersion), true, 'equal');
		equal( libChecker.libs.underscore.version.lessThan(gVersion), true, 'lessThan');
		equal( libChecker.libs.underscore.version.greaterThan(lVersion), true, 'greaterThan');
	});

	test( "Knockout", function() {
		var lVersion = '1.1.1', cVersion = '2.3.0', gVersion = '3.0.0';

		equal( libChecker.libs.knockout.exist(), true, 'exist');

		equal( libChecker.libs.knockout.version.getCurrent(), cVersion, 'getCurrent');
		equal( libChecker.libs.knockout.version.equal(cVersion), true, 'equal');
		equal( libChecker.libs.knockout.version.lessThan(gVersion), true, 'lessThan');
		equal( libChecker.libs.knockout.version.greaterThan(lVersion), true, 'greaterThan');
	});

	test( "Require", function() {
		var lVersion = '2.1.1', cVersion = '2.1.5', gVersion = '2.1.9';

		equal( libChecker.libs.require.exist(), true, 'exist');

		equal( libChecker.libs.require.version.getCurrent(), cVersion, 'getCurrent');
		equal( libChecker.libs.require.version.equal(cVersion), true, 'equal');
		equal( libChecker.libs.require.version.lessThan(gVersion), true, 'lessThan');
		equal( libChecker.libs.require.version.greaterThan(lVersion), true, 'greaterThan');
	});

})();