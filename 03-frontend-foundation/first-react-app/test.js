let itms = [ {name:"Pen", price:20, isTaken:false},
    {name:"Scale", price:20, isTaken:false},
    {name:"Pencil", price:20, isTaken:false},
    {name:"Book", price:20, isTaken:false}]

    itms.map((item)=>printItem(item))

    function printItem (item){
        console.log(item.name)
    }