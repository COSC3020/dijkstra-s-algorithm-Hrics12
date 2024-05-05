const dijkstra = require('./code.js');

test('Test Dijkstra function', () => {
    let graph = {
        'A': {'B': 1, 'C': 4},
        'B': {'A': 1, 'C': 2, 'D': 5},
        'C': {'A': 4, 'B': 2, 'D': 1},
        'D': {'B': 5, 'C': 1}
    };

    expect(dijkstra(graph, 'A')).toEqual({'A': 0, 'B': 1, 'C': 3, 'D': 4});
    expect(dijkstra(graph, 'B')).toEqual({ 'A': 1, 'B': 0, 'C': 2, 'D': 3 });
    expect(dijkstra(graph, 'C')).toEqual({ 'A': 3, 'B': 2, 'C': 0, 'D': 1 });
    expect(dijkstra(graph, 'D')).toEqual({ 'A': 4, 'B': 3, 'C': 1, 'D': 0 });
 
});
