const dijkstra = require('./file.js');

test('Test Dijkstra function', () => {
    let graph = {
        'A': {'B': 1, 'C': 4},
        'B': {'A': 1, 'C': 2, 'D': 5},
        'C': {'A': 4, 'B': 2, 'D': 1},
        'D': {'B': 5, 'C': 1}
    };

    expect(dijkstra(graph, 'A')).toEqual({'A': 0, 'B': 1, 'C': 3, 'D': 4});
});
