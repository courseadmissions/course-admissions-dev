const { gulp, series, src, dest } = require('gulp');
const del = require('del');
const destPath = "../course-admissions";
const buildPath = "./dist/course-admissions";

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function copy404() {
    return src(['./src/404.html'])
        .pipe(dest(buildPath))

}

function prodCopy() {
    return src([buildPath + '/**/*'], { "base": buildPath + "/" })
        .pipe(dest(destPath));
};

async function prodClean() {
    return await del([destPath + '/**/*',
    '!' + destPath + '/.git',
    '!' + destPath + '/CNAME',
    '!' + destPath + '/README.md'
    ], { force: true });
};

exports.sync = series(prodClean, copy404, prodCopy);
exports.default = defaultTask;
