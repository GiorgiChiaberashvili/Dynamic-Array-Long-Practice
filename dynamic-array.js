class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    return this.data[index]
  }

  push(val) {
    if (this.value + 1 > this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    // Your code here
  }

  shift() {
    // Your code here
  }

  unshift(val) {
    // Your code here
    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = newArray(this.capacity);
      newArray[0] = val;
      for (let i = 0; i < this.data.length; i++) {
        newArray[i + 1] = data[i];
      }
      this.data = newArray;
    } else {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = val;
    }
    this.length++;
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {

    // Your code here
    const newArr = new Array(this.capacity * 2);
    for (let i = 0; i < this.data.length; i++) {
      newArr[i] = this.data[i];
    }
    this.capacity *= 2;
    this.data = newArr;
  }
}


module.exports = DynamicArray;
