var fs=require('fs');  
var path = require('path');  
function ls(ff)  
{  
    var files=fs.readdirSync(ff);  
    for(fn in files)  
    {  
        var fname = ff+path.sep+files[fn];  
        var stat = fs.lstatSync(fname);  
        if(stat.isDirectory() == true)  
        {  
            ls(fname);  
        }  
        else  
        {  
            var data = fs.readFileSync(fname,"utf-8");
            var exc = new RegExp("viz_type");
            if(exc.test(data))
                console.log(fname);
            }  
    }  
}  
ls('D:\\anJS\\D3\\caravel-master\\caravel');  