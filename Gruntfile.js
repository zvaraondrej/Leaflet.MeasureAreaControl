/*
npm install grunt --save-dev
npm install grunt-bower-install --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-browser-sync --save-dev
*/

module.exports = function(grunt) {

	grunt.initConfig({
		
		bowerInstall: {
		  target: {
	      src: 'src/index.html', // point to your HTML file
		  }
		},
		
  	browserSync: {
 		 files: {
		    src : [
		      'src/css/*.css',
		      'src/js/*.js',
		      'src/*.html'
		    ],
		  },
		  options: {
		     //watchTask: true
		  }
		},

		//copy index.html
		copy: {
      files: {
		    cwd: 'src',  // set working folder / root to copy
		    src: 'index.html',           
		    dest: 'build',    // destination folder
		    expand: true           // required when using cwd
		  }
    },

		clean: {
		  build: {
		    src: [ 'build' ]
		  },
		  stylesheets: {
		    src: 'build/**/*.css',
		  },
		  scripts: {
		    src: 'build/**/*.js'
		  },
		},

		//minify stylesheets
		cssmin: {
		  minify: {
		    src: 'src/css/*.css',
		    dest: 'build/css/styles.min.css'
		  }
		},		

		//build js: check syntac
		jshint: {
      all: ['src/js/*.js'] 
    },

		//build js: concat
		concat: {
	    options: {
	      separator: ';'
	    },
	    dist: {
	      src: ['src/js/*.js'], 
	      dest: 'build/js/script.js'
	    }
	  },

	  //build js: minify
	  uglify: {
		  build: {
		    options: {
		      mangle: false
		    },
		    files: {
		      'build/js/script.js': [ 'build/**/*.js' ]
		    }
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-browser-sync');

  //default
  grunt.registerTask('default', ['browserSync']);

  //install
	grunt.registerTask('install', ['bowerInstall']);

	//debugging
  grunt.registerTask('debug', ['jshint']);

  //build javascript
	grunt.registerTask('build', ['jshint', 'clean', 'copy', 'concat', 'uglify', 'cssmin']);
};