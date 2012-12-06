var path = require( "path" );

module.exports = function( _, anvil ) {
	anvil.command( {
		name: "anvil.extension",
		commander: {
			"disable [value]": {
				description: "Disable plugin",
				action: "disable"
			},
			"enable [value]": {
				description: "Enable plugin",
				action: "enable"
			},
			"install [value]": {
				description: "Install a plugin from npm",
				action: "install"
			},
			"list": {
				description: "List available plugins",
				action: "list"
			},
			"uninstall [value]": {
				description: "Uninstall plugin",
				action: "uninstall"
			},
			"update": {
				description: "Update all installed plugins",
				action: "update"
			}
		},
		disable: function( extension, options, done ) {
			anvil.extensionManager.disable( extension, done );
		},
		enable: function( extension, options, done ) {
			anvil.extensionManager.enable( extension, done );
		},
		install: function( extension, options, done ) {
			anvil.extensionManager.install( extension, done );
		},
		list: function( options, done ) {
			anvil.extensionManager.list( done );
		},
		uninstall: function( extension, options, done ) {
			anvil.extensionManager.uninstall( extension, done );
		},
		update: function( options, done ) {
			anvil.extensionManager.update( done );
		}
	} );
};