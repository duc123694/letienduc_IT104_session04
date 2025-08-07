const processInput = (input:string|number|boolean):void => {
    if(typeof input === "string"){
        //chuoi toàn số
        if(!isNaN(Number(input))){
      const num = Number(input);
      console.log(num * num);
    } else {
      // Đếm ký tự chữ cái
      const count = (input.match(/[a-zA-Z]/g) || []).length;
      console.log(`${count} ký tự chữ cái`);
    }
  } else if (typeof input === "number") {
    if (input < 2) {
      console.log("Không phải số nguyên tố");
      return;
    }
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i === 0) {
        console.log("Không phải số nguyên tố");
        return;
      }
    }
    console.log("Là số nguyên tố");
  } else {
    if (input) {
       console.log("Giá trị là true - tiến hành xử lý");
    } else {
      console.log("Giá trị là false - dừng xử lý");
    }
  }
}
