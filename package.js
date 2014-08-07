Package.describe({
    summary: "Simple log method for client and server."
});

Package.on_use(function (api, where) {
    cs = ['client', 'server'];

    api.add_files([
        "log.js"
    ], cs);

    api.export("log", cs);
});

/**
 * Taken from http://stackoverflow.com/questions/20793505/meteor-package-api-add-files-add-entire-folder .
 *
 * Thanks saimeunt.
 *
 * Todo: Seems like we need to repeat this in every package.js for now. I'd like a better solution in the future.
 *
 * Returns a list of filenames of files in a given subfolder in a given (local) package. Useful
 * for calling add_files on a collection of files.
 *
 * @param packageName
 * @param folder
 * @returns {*}
 */
function getFilesFromFolder(packageName, folder) {
    // local imports
    var _ = Npm.require("underscore");
    var fs = Npm.require("fs");
    var path = Npm.require("path");

    // helper function, walks recursively inside nested folders and return absolute filenames
    function walk(folder){
        var filenames=[];
        // get relative filenames from folder
        var folderContent=fs.readdirSync(folder);
        // iterate over the folder content to handle nested folders
        _.each(folderContent,function(filename){
            // build absolute filename
            var absoluteFilename=folder+path.sep+filename;
            // get file stats
            var stat=fs.statSync(absoluteFilename);
            if(stat.isDirectory()){
                // directory case => add filenames fetched from recursive call
                filenames=filenames.concat(walk(absoluteFilename));
            }
            else{
                // file case => simply add it
                filenames.push(absoluteFilename);
            }
        });
        return filenames;
    }

    // save current working directory (something like "/home/user/projects/my-project")
    var cwd=process.cwd();
    // chdir to our package directory
    process.chdir("packages"+path.sep+packageName);
    // launch initial walk
    var result=walk(folder);
    // restore previous cwd
    process.chdir(cwd);
    return result;
}