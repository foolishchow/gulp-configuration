

module.exports = function(file,config){
    var fileString = file.contents.toString(),
        replaceStr = '';
    for( var key in config ){
        replaceStr += key + "|";
    }
    var regexpStr = '\\$\\{(' + replaceStr.substring(0,replaceStr.length-1) + ')\\}';
    fileString = fileString.replace(new RegExp(regexpStr,'gi'),function(wholeMatch,m1){
        return config[m1];
    });
    file.contents = new Buffer(fileString);
};