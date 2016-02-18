var fs = require('fs');
var eventEmitter = require("events").EventEmitter;
var util = require("util");

var readProps = function(filename,encoding){
    var me = this;
    fs.readFile(filename, encoding, function(err,data){
        if(err){
            me.emit('error',err);
        }else{
            parseProp(data.toString('utf8'),me);
            // me.emit('success',config);
        }
    });
};

var parseProp = function(str,obj){
    var config = {};
    str = str.replace(/\r\n/gi,'\n')
            .replace(/(\n){1,}/gi,'\n')
            .replace(/^\#(.*?)\n/gi,'');
    // console.info(str);
    var arr = str.split('\n');
    arr.forEach(function(item){
        var arrItem = item.split("=");
        if( arrItem.length == 2 ){
            config[arrItem[0].replace(/^\s*|\s*$/gi,'')] = arrItem[1].replace(/^\s*|\s*$/gi,'');
        } 
    });
    // console.info(config);
    obj.emit('success',config);
}

util.inherits(readProps, eventEmitter);

module.exports = function(filename,encoding,cb){
    var configThymeleaf = new readProps(filename,encoding);
    configThymeleaf.on('error',function(){
        console.info(err);
    });
    configThymeleaf.on('success',function(config){
        cb(config);
    });
    return configThymeleaf;
}
       // viewResolver.addStaticVariable( "Static", "http://localhost:8080/shopMall-web/");