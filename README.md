[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


The $\Theta$ time complexity of this implementation is $\Theta((V + E) \log V)$, where $V$ is the number of vertices and $E$ is the number of edges in the graph.
The algorithm sets up the distances object and the visited set then takes $\Theta(V)$ time as it involves iterating over all vertices in the graph.
The main part of the algorithm is a while loop that continues until all vertices have been visited. This loop will run a maximum of $V$ times because each iteration marks a new vertex when visited.
In the while loop the algorithm performs two operations. First it is identifying the unvisited vertex with the smallest distance. This operation can take up to $\Theta(V)$ time if a simple array or list is used to store the vertices. 
The second operation inside the while loop is iterating over all of the edges of the selected vertex. This operation is performed once for each edge in the graph and it takes $\Theta(E)$ time in total.
Finally after the while loop has completed, the function returns the distances object which is a constant time operation.
The overall time complexity is $\Theta(V \log V + E \log V)$ or $\Theta((V + E) \log V)$. When we ignore any constants or coefficients, the time complexity is $\Theta((V + E) \log V)$.

Source:
I used chatGPT to help me make the test and workflow for the action. I'm not that familiar with Github to know how to do that
https://patrickkarsh.medium.com/dijkstras-shortest-path-algorithm-in-javascript-1621556a3a15
