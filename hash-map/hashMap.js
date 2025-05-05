class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key, capacity = this.capacity) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const targetBucket = this.buckets[index];

    if (targetBucket) {
      for (let i = 0; i < targetBucket.length; i++) {
        if (targetBucket[i].key === key) {
          targetBucket[i].value = value;
          return;
        }
      }

      targetBucket.push({ key, value });
    } else {
      this.buckets[index] = [{ key, value }];
    }

    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const targetBucket = this.buckets[index];

    if (targetBucket) {
      for (let i = 0; i < targetBucket.length; i++) {
        if (targetBucket[i].key === key) {
          return targetBucket[i].value;
        }
      }

      return null;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const targetBucket = this.buckets[index];

    if (targetBucket) {
      for (let i = 0; i < targetBucket.length; i++) {
        if (targetBucket[i].key === key) {
          return true;
        }
      }

      return false;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const targetBucket = this.buckets[index];

    if (targetBucket) {
      for (let i = 0; i < targetBucket.length; i++) {
        if (targetBucket[i].key === key) {
          targetBucket.splice(i, 1);
          this.size--;
          return true;
        }
      }

      return false;
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  keys() {
    const keyArray = [];

    for (let i = 0; i < this.capacity; i++) {
      let targetBucket = this.buckets[i];

      if (targetBucket) {
        for (let j = 0; j < targetBucket.length; j++) {
          keyArray.push(targetBucket[j].key);
        }
      }
    }

    return keyArray;
  }

  values() {
    const valuesArray = [];

    for (let i = 0; i < this.capacity; i++) {
      let targetBucket = this.buckets[i];

      if (targetBucket) {
        for (let j = 0; j < targetBucket.length; j++) {
          valuesArray.push(targetBucket[j].value);
        }
      }
    }

    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (let i = 0; i < this.capacity; i++) {
      let targetBucket = this.buckets[i];

      if (targetBucket) {
        for (let j = 0; j < targetBucket.length; j++) {
          entriesArray.push([targetBucket[j].key, targetBucket[j].value]);
        }
      }
    }

    return entriesArray;
  }

  resize() {
    const newCapacity = this.capacity * 2;
    const newBuckets = new Array(newCapacity).fill(null);

    for (let i = 0; i < this.capacity; i++) {
      const targetBucket = this.buckets[i];

      if (targetBucket) {
        for (let j = 0; j < targetBucket.length; j++) {
          const { key, value } = targetBucket[j];

          const newIndex = this.hash(key, newCapacity);

          if (newBuckets[newIndex]) {
            newBuckets[newIndex].push({ key, value });
          } else {
            newBuckets[newIndex] = [{ key, value }];
          }
        }
      }
    }

    this.capacity = newCapacity;
    this.buckets = newBuckets;
  }
}

export { HashMap };
