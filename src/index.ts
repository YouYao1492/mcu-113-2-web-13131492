let productId:number;
productId=1;
console.log("Product Id = ", productId);

let productName = "圖像 Angular 開發入門 第二版";
console.log("Product Name = ",productName);

let isShow = true;
console.log("Is Show = ",isShow);

let createDate = new Date();
console.log("Create Date",createDate);

let modifyDate :Date| undefined=undefined;
console.log("Modify Date", modifyDate);


const Product={
    id:1,
    name:"圖像 Angular 開發入門 第二版",
    company:"博碩文化",
    price:500,
    isShow:true,
    createDate:new Date(),
    modifyDate:undefined,
};

console.log(Product);
console.table(Product);