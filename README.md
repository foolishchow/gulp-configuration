gulp replace vars in javascript
----------

> useage

```shell
    npm install gulp-configuration --save
```

##in you `gulpfile.js`

```javascript   

    var configration = require('gulp-configration');

    gulp.task('configration',function(){
        return gulp.src([
            'src/main.js'
        ])
        .pipe(configration('./vars/pre.vars.properties'))
        .pipe(gulp.dest('../dist'));
    });
```
##in your `src/main.js`

```javascript 

    window.configurations = {};
    if( "${evn}".length == 3 ){
        configurations = {
            app_url : '${app_url}',
            InterFaceIp:'${InterFaceIp}',
            InterfaceUrl:'/Interface/core/postCtrl',
            headpicPreffix: '${headpicPreffix}/Interface/upload/showImg?remoteFile=',
            InterfaceName:'/Interface'
        }
    }else{
        configurations = {
            app_url: 'http://192.168.2.100:9300',
            InterFaceIp: 'http://10.20.16.74:8282',
            InterfaceUrl: '/Interface/core/postCtrl',
            UploadInterfaceUrl: '/Interface/upload/file',
            headpicPreffix: 'http://10.20.16.74:8282/Interface/attach/downloadFile?remoteFile=',
        }
    }
```

##in your `vars/pre.vars.properties`

``` 
    evn=pre
    app_url=http://10.20.16.75:9300
    InterFaceIp=http://10.20.16.75:8018
    headpicPreffix=http://10.20.16.75:8018
```

##after configuration , your `src/main.js`would be 
```javascript
    if( "pre".length == 3 ){
        configurations = {
            app_url : 'http://10.20.16.75:9300',
            InterFaceIp:'http://10.20.16.75:8018',
            InterfaceUrl:'/Interface/core/postCtrl',
            headpicPreffix: 'http://10.20.16.75:8018/Interface/upload/showImg?remoteFile=',
            InterfaceName:'/Interface'
        }
    }else{
        configurations = {
            app_url: 'http://192.168.2.100:9300',
            InterFaceIp: 'http://10.20.16.74:8282',
            InterfaceUrl: '/Interface/core/postCtrl',
            UploadInterfaceUrl: '/Interface/upload/file',
            headpicPreffix: 'http://10.20.16.74:8282/Interface/attach/downloadFile?remoteFile=',
        }
    }
```
