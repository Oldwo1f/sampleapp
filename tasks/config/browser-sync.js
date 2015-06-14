module.exports = function(grunt) {

	grunt.config.set('browserSync', {
		dev: {
                bsFiles: {
                    src : ['.tmp/styles/**/*.css','.rebooted','views/**/*.ejs']
                }, 
                options: {
                    proxy: "localhost:1337",
                    // socket: {
                    //     path: '/socket.io',
                    //     namespace: function (namespace) {
                    //         return "localhost:1337" + namespace;
                    //     }
                    // }
                }
            }
	});

	grunt.loadNpmTasks('grunt-browser-sync');

};