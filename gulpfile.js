var gulp = require('gulp');
var Server = require('karma').Server;
gulp.task('unittest', function(done){
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});
