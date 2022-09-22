/**
 * The Collatz Conjecture or 3x+1 problem can be summarized as follows:
 *
 * Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.
 *
 * Given a number n, return the number of steps required to reach 1.
 *
 * Examples:
 * Starting with n = 12, the steps would be as follows:
 *
 *     0. 12
 *     1. 6
 *     2. 3
 *     3. 10
 *     4. 5
 *     5. 16
 *     6. 8
 *     7. 4
 *     8. 2
 *     9. 1
 *
 * Resulting in 9 steps. So for input n = 12, the return value would be 9.
 */

/**Differences between for and while loops -> The prime thing that sets for loop and while loop apart is their overall nature. In the case of for loop, you as a coder will be aware of the number of iterations that need to be used in attaining a particular result. On the contrary, the while loop statement needs to be executed until it reaches a condition and proves the statement false. */

//1.Sākam ar to, ka izveidojam error, ja skaitlis 0 vai negatīvs ->  throw new Error("Only positive numbers are allowed");
//throw līdzīgi kā return apstādina procesu, līdz ar to pie pirmā if return nav vajadzīgs. Tiek izmests error un funkcija savu darbību beidz.
//2. izmantojam while loop, jo mums nav zināms cik iterācijas būs nepieciešamas veikt, lai iegūtu vajadzīgo rezultātu
//3. let counter skaita līdz cik iterācijas bija nepieciešams veikt, lai tiktu līdz rezultātam, skaitlim 1
function steps(n: number) {
  if (n < 1) {
    throw new Error("Only positive numbers are allowed");
  }

  let counter = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    counter++;
  }
  return counter;
}

export { steps };
