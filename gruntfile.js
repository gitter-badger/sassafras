module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('bower.json'),
		sass: {
			dist: {
				files: {
					'assets/css/main.css' : 'assets/scss/*.scss'
				}
			}
		},
    less: {
			dist: {
				files: {
					'assets/css/main.css' : 'assets/less/*.less'
				}
			}
		},
		watch: {
	  css: {
	    files: '**/*.sass',
	    tasks: ['sass'],
	    options: {
	      livereload: true,
				livereloadOnError: false,
	    	},
	  },
		sass: {
			files: '**/*.less',
			tasks: ['less'],
			options: {
				livereload: true,
				livereloadOnError: false,
			},
		},
		concurrent: {
			options: {
				logConcurrentOutput: true,
			},
			prod: {
				tasks: ["watch:css", "watch:sass"]
			}
		}
	},
});
  grunt.loadTasks('grunt-contrib-less');
	grunt.loadTasks('grunt-contrib-sass');
	grunt.loadTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};
