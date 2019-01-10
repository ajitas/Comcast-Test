var argsLen = process.argv.length
//if no flag is provided
if(argsLen===2){
    //take input from stdin
    var stdin = process.openStdin();
    stdin.on('data', function(input){
        //calculate sum inside callback function
        calculateSum(input,10); //10 for decimal
        //exit the program
        process.exit()
    });
}
else{   //if a flag is provided
    switch(process.argv[2]){
        //if flag is -x
        case "-x":  //take input from stdin and calculate sum inside callback function
                    var stdin = process.openStdin();
                    stdin.on('data', function(input){
                        calculateSum(input,16); //16 for hex
                        process.exit()
                    });
                    break;
        //if flag is -f
        case "-f":  if(process.argv.length!==4){
                        //if no file or more than 1 file is provided in argument
                        console.log("please provide a single file name after -f flag")
                    }
                    else{  
                        //use fs node internal package to read file         
                        var fs = require('fs');
                        //process.argv[3] contains the file name
                        fs.readFile(process.argv[3], "utf8", function(error, data) {
                            if (error) {
                                if(error="ENOENT")
                                    return console.log("File "+process.argv[3] +" does not exist")
                                return console.log(error);
                            }
                            //if file was read without errors, calculate the sum
                            calculateSum(data,10)   //10 for decimal
                        });
                    }
                    break;
        //if flag is neither -x nor -f
        default:    console.log("invalid argument after .js file");
                    break;
    }
}

//function to calculate sum
function calculateSum(str,base){
    var sum =0;
    str = str.toString();
    //go through each character in the input string
    for(var i =0;i<str.length;i++){
        if(base===10){
            //if base is 10, only look at the characters from '0' to '9'
            if(str[i]>='0' && str[i]<='9')
                sum+=parseInt(str[i])
        }
        else if(base===16){
            //if base is 16, look for all characters except the last new line character
            if(str[i]!=='\n')
            sum+=parseInt(str[i],16);
        }
    }
    //print result on stdout
    process.stdout.write(sum+"\n")
}