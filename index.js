var gutil = require('gulp-util'),
    through = require('through2'),
    configReader = require('./lib/configReader'),
    configInstant = require('./lib/configInstant');

module.exports = function(options) {
    var configration = {},
        cachedConfig = '',
        readyStatus = false;

        

    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        if (file.isStream()) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }
        var me = this;
        configReader(options, null, function(data) {
            configration = data;
            var content = configInstant(file, configration);
            me.push(file);
            cb();
        });
    });
};
