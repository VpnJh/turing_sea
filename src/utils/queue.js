class Queue {
  constructor() {
    this.count = 0; //记录队列的数量
    this.lowestCount = 0; //记录当前队列顶部的位置
    this.items = []; //用来存储元素。
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "queue is null";
    }
    let result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return "queue is null";
    }
    let objString = this.items[this.lowestCount];

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

export { Queue };
