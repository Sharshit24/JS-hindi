const myNums=[1,2,3,4]

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js cource",
        price:5999
    },
    {
        itemName:"C cource",
        price:5999
    },
    {
        itemName:"C++ cource",
        price:5999
    },
    {
        itemName:"py cource",
        price:5999
    },
    {
        itemName:"java cource",
        price:5999
    },
]

const priceToPay= shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
