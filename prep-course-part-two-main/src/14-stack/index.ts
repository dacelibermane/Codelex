/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

//stack - kā gramatu kaudze  - pirmais elements kas ieiet, būs pēdējais kas iziet.
/**A stack is an ordered collection of items that follows the last in, first out
(LIFO) principle. The addition of new items or the removal of existing items
takes place at the same end. The end of the stack is known as the top, and the
opposite side is known as the base. The newest elements are near the top, and the
oldest elements are near the base.
We have several examples of stacks in real life, for example, a pile of books

push(element(s)): This method adds a new element (or several elements) to
the top of the stack.
pop(): This method removes the top element from the stack. It also returns
the removed element.
peek(): This method returns the top element from the stack. The stack is not
modified (it does not remove the element; it only returns the element for
information purposes). */

class Stack {
  stack: number[] = [];
  push(n: number) {
    this.stack.push(n);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

export { Stack };
