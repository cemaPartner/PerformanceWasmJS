import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class JavaScriptService {

    async fibonacci(n: number): Promise<number> {
        let start = performance.now();
        this.fibonacciRecursive(n);
        let stop = performance.now();

        return stop - start;
    }

    /*async tri(): Promise<number> {

    }

    async matrice(): Promise<number> {

    }

    async recherche(): Promise<number> {

    }

    async compression(): Promise<number> {

    }
*/
    private fibonacciIterative(n: number) {
        if (n <= 1) return n;
        let prev = 0, curr = 1;
        for (let i = 2; i <= n; i++) {
          [prev, curr] = [curr, prev + curr];
        }
        return curr;
      }

      private fibonacciRecursive(n: number): number {
        if (n <= 1) return n;
        return this.fibonacciIterative(n - 1) + this.fibonacciRecursive(n - 2);
      }
}