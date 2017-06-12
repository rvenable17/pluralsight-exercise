module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            all: {
                src: ['dist', 'dist-test']
            }
        },
        mochacli: {
            options: {
                filesRaw: 'dist-test/**/*.js',
                harmony: true,
                timeout: 4000,
                require: [ 'babel-core/register', 'babel-polyfill' ]
            },
            test: {
                options: {
                    reporter: 'list'
                }
            }
        },
        babel: {
            options: {
                sourceMap: 'inline',
                presets: ['latest']
            },
            dist: {
                files: [{
                    expand: true,
                    src: ['src/**/*.*'],
                    dest: 'dist'
                }]
            },
            distTests: {
                files: [{
                    expand: true,
                    cwd: 'test',
                    src: ['**/*.js'],
                    dest: 'dist-test',
                    ext: '.js'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('test', ['clean', 'babel', 'mochacli:test']);

    // grunt.registerTask('test', ()=>{
    //     grunt.task.run('mochacli:test');
    // });
};
