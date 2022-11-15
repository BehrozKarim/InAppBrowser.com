function check_args(one, two, three) {
    console.log(arguments)
    const x = function(){
        console.log(arguments)
        if(arguments)
        {
            console.log(arguments)
            // console.log(arg)
            // console.log(Object.values(arguments).map((arg) => renderParam(arg)).join(", "))
        }
    }()
    // setTimeout(x, 5000);

}

check_args(10,20,30)