var argsLen = process.argv.length
if(argsLen===2){
    var stdin = process.openStdin();
    stdin.on('data', function(input){
        calculateSum(input,10);
        process.exit()
    });
}
else{
    switch(process.argv[2]){
        case "-x":  var stdin = process.openStdin();
                    stdin.on('data', function(input){
                        calculateSum(input,16);
                        process.exit()
                    });
                    break;
        case "-f":  if(process.argv.length!==4){
                        console.log("please provide a single file name after -f flag")
                    }
                    else{           
                        var fs = require('fs');
                        fs.readFile(process.argv[3], "utf8", function(error, data) {

                            if (error) {
                                if(error="ENOENT")
                                    return console.log("File "+process.argv[3] +" does not exist")
                                return console.log(error);
                            }
                    
                            calculateSum(data,10)
                        });
                    }
                    break;
        default:    console.log("invalid argument after .js file");
                    break;
    }
}

function calculateSum(str,base){
    var sum =0;
    str = str.toString();
    for(var i =0;i<str.length;i++){
        if(base===10){
            if(str[i]>='0' && str[i]<='9')
                sum+=parseInt(str[i])
        }
        else if(base===16){
            if(str[i]!=='\n')
            sum+=parseInt(str[i],16);
        }
    }
    process.stdout.write(sum+"\n")
}