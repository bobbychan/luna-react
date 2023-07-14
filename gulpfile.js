const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const ts = require('gulp-typescript');
const prettier = require('gulp-prettier');
const nested = require('postcss-nested');
const del = require('del');
const through = require('through2');
const autoprefixer = require('autoprefixer');

const tsconfig = require('./tsconfig.lib.json');
const packageJson = require('./package.json');

function clean() {
  return del('./lib/**');
}

function buildESM() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
  });
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('lib/esm/'));
}

function buildCJS() {
  return gulp
    .src(['lib/esm/**/*.js'])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(gulp.dest('lib/cjs/'));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('lib/esm/'))
    .pipe(gulp.dest('lib/cjs/'));
}

function buildStyle() {
  const plugins = [nested, autoprefixer];

  return gulp
    .src(['src/**/*.css'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(postcss(plugins))
    .pipe(prettier())
    .pipe(gulp.dest('./lib/esm'))
    .pipe(gulp.dest('./lib/cjs'));
}

function copyMetaFiles() {
  return gulp.src(['./README.md', './LICENSE']).pipe(gulp.dest('./lib/'));
}

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        delete parsed.scripts;
        delete parsed.devDependencies;
        delete parsed.publishConfig;
        delete parsed.files;
        const stringified = JSON.stringify(parsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      }),
    )
    .pipe(gulp.dest('./lib/'));
}

exports.default = gulp.series(
  clean,
  buildESM,
  buildCJS,
  buildDeclaration,
  buildStyle,
  copyMetaFiles,
  generatePackageJSON,
);
