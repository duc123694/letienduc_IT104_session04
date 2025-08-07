interface Category {
  id: string;
  name: string;
}
interface Product {
  id: string; 
  name: string;
  price: number;
  category: Category;
  discount?: number;
}

const listProduct: Product[] = [
  {
    id: "1", 
    name: "Laptop ",
    price: 20000000,
    category: {
      id: "1",
      name: "Điện tử"
    },
    discount: 10
  },
  {
    id: "2", 
    name: "Áo thun nam",
    price: 250000,
    category: {
      id: "2",
      name: "Thời trang"
    }
  },
  {
    id: "3", 
    name: "Tai nghe Bluetooth",
    price: 1500000,
    category: {
      id: "1",
      name: "Điện tử"
    },
    discount: 5
  }
];
const getFinalPrice =(product:Product):number =>{
    if(product.discount){
       return product.price*(1-product.discount/100);
    }
    return product.price;
}
const printfProduct = (product:Product):void =>{
  console.log(`ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Category: ${product.category.name}`);
  console.log(`Original Price: ${product.price.toLocaleString()} VND`);

  if (product.discount) {
    console.log(`Discount: ${product.discount}%`);
    console.log(`Final Price: ${getFinalPrice(product).toLocaleString()} VND`);
  } else {
    console.log(`No discount`);
    console.log(`Final Price: ${getFinalPrice(product).toLocaleString()} VND`);
  }
}
