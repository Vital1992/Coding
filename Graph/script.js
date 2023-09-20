// A graph is a data structure where a node can have zero or more adjacent elements.
// The connection between two nodes is called edge. Nodes can also be called vertices.

// Graph is composed of vertices and edges
// The degree is the number of edges connected to a vertex. E.g., the purple vertex has a degree of 3 while the blue one has a degree of 1.

// If the edges are bi-directional, then we have an undirected graph. If the edges have a direction, then we have a directed graph or di-graph for short. 
// You can think of it as a one-way street (directed) or two-way street (undirected).

// Directed vs Undirected graph
// Vertex can have edges that go to itself (e.g., blue node). This is called self-loop.

// A graph can have cycles, which means you could get the same node more than once. The graph without cycles is called acyclic graph.
// Cyclic vs Acyclic directed graph
// Also, acyclic undirected graphs are called tree. We are going to cover trees in-depth in the next post.

// Not all vertices have to be connected in the graph. You might have isolated nodes or even separated subgraphs. If all nodes have at least one edge, 
// then we have a connected graph. When all nodes are connected to all other nodes, then we have a complete graph.

// Complete vs Connected graph
// For a complete graph, each node should have #nodes - 1 edges. In the previous example, we have seven vertices, so each node has six edges

// Adjacency list

// const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
// const routes = [
// ['PHX', 'LAX'], 
// ['PHX', 'JFK'],
// ['JFK', 'OKC'],
// ['JFK', 'HEL'],
// ['JFK', 'LOS'], 
// ['MEX', 'LAX'], 
// ['MEX', 'BKK'], 
// ['MEX', 'LIM'],
// ['MEX', 'EZE'],
// ['LIM', 'BKK']
// ];

// // The graph
// const adjacencyList = new Map();

// // Add node
// function addNode(airport) {
//   adjacencyList.set(airport, []);
// }

// // Add edge, undirected
// function addEdge(origin, destination) {
//   adjacencyList.get(origin).push(destination);
//   adjacencyList.get(destination).push(origin);
// }

// // Create the graph
// airports.forEach(addNode);
// routes.forEach(route => addEdge(route[0], route[1]));

// console.log(adjacencyList);

// // Breadth First Search
// function bfs(start) {

//   const visited = new Set();

//   const queue = [start];


//   while (queue.length > 0) {

//       const airport = queue.shift(); // mutates the queue

//       const destinations = adjacencyList.get(airport);


//       for (const destination of destinations) {

//           if (destination === 'BKK')  {
//               console.log(`BFS found Bangkok!`)
//           }

//           if (!visited.has(destination)) {
//               visited.add(destination);
//               queue.push(destination);
//           }
         
//       }

      
//   }

// }

// bfs('PHX')

// // Depth First Search
// function dfs(start, visited = new Set()) {

//   console.log(start)
  
//   visited.add(start);

//   const destinations = adjacencyList.get(start);

//   for (const destination of destinations) {

//       if (destination === 'BKK') { 
//           console.log(`DFS found Bangkok`)
//           return;
//       }
      
//       if (!visited.has(destination)) {
//           dfs(destination, visited);
//       }

//   }

// }

// dfs('PHX')

class Graph {
  constructor() {
    this.nodes = {}
  }

  addNode(node) {
    this.nodes[node] = [];
  }

  addEdge(source, destination) {
    if (!this.nodes[source] || !this.nodes[destination]) {
      return false;
    }

    if (!this.nodes[source].includes(destination)) {
      this.nodes[source].push(destination)
    }
    if (!this.nodes[destination].includes(source)) {
      this.nodes[destination].push(source)
    }
  }

  showNodes() {
    console.log(this.nodes)
  }

  bfs(source, destination) {
    const queue = [source];
    const visited = {};

    while(queue.length) {
      let current = queue.shift();
      if (visited[current]) {
        continue;
      }

      if (current === destination) {
        return true;
      }

      visited[current] = true;
      let neighbours = this.nodes[current];
      for (let i = 0; i < neighbours.length; i++) {
        queue.push(neighbours[i]);
      }
    }
    return false;
  }

  dfs(source, destination, visited = {}) {
    if (visited[source]) {
      return false;
    }

    if (source === destination) {
      return true;
    }
    visited[source] = true;

    const neighbours = this.nodes[source];
    for (let i = 0; i < neighbours.length; i++) {
      if (this.dfs(neighbours[i], destination, visited)) {
        return true;
      }
    }

    return false;
  }
}
let g = new Graph;
g.addNode('Vova');
g.addNode('Tim'); 
g.addNode('John');
g.addNode('Ann');
g.addNode('Lee'); 
g.addNode('Ron');
g.addNode('Jeff');

g.addEdge('Tim', 'Vova'); 
g.addEdge('Tim', 'Ann'); 
g.addEdge('Tim', 'Lee'); 
g.addEdge('Ann', 'John'); 
g.addEdge('Ann', 'Lee'); 
g.addEdge('Ron', 'Lee'); 
g.addEdge('Ron', 'Jeff');
g.showNodes();

console.log(g.bfs('Tim', 'Jeff'));
console.log(g.dfs('Tim', 'Jeff'));