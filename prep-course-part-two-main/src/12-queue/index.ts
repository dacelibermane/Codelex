/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

//klasē rakstam metodes, tādēļ arī vienkārši -> add(n:number)
/**A queue is an ordered collection of items that follows the first in, first out
(FIFO), also known as the first come, first served, principle. The addition of
new elements in a queue is at the tail, and the removal is from the front. The
newest element added to the queue must wait at the end of the queue.
The most popular example of a queue in real life is the typical line that we form
from time to time */

class Queue {
  queue: number[] = [];
  add(n: number) {
    this.queue.push(n);
  }

  remove() {
    return this.queue.shift();
  }
}

export { Queue };
