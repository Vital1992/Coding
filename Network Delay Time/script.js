// Network Delay Time

// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed 
// edges times[i] = (ui, vi, wi), where ui is the source node, vi is the 
// target node, and wi is the time it takes for a signal to travel from source to target.
// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. 
// If it is impossible for all the n nodes to receive the signal, return -1.

// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// [fromNode, toNode, timeTaken]
// Output: 2

// Dijkstra Algorithm

function networkDelay(times, n, k) {

    // Our return value, how long did it take
    // to reach all nodes within the network from {k}
    let time_taken = 0;

    // A set so we don't visit the same node twice.
    const visited_set = new Set();

    // A min heap, as we want to visit the the node
    // with the cheapest path so far. Relative to {k}.
    const min_heap = new MinPriorityQueue();

    // An adjacency list, where we store 
    // Node -> [[Edge, Cost],[Edge, Cost]]
    const node_edge_cost = new Map();

    // Build the adjacency list.
    for (const [node, edge, cost] of times) {
        let edges = [];
        if (node_edge_cost.has(node)) {
            edges = node_edge_cost.get(node);
        }
        edges.push([edge, cost]);
        node_edge_cost.set(node, edges);
    }

    // We have been asked to start at {k}
    // So we enqueue {k} at the cost of 0, as of course
    // it costs nothing as we start here.
    min_heap.enqueue([k, 0], 0);

    // Perform Dijkstra's algorithm.
    // Get the cheapest operation relative to {k}
    // and add it's edges to the heap, where we're always
    // updating the cost relative to {k}. Therefore, 
    // we're visiting all the cheapest operations relative to {k}.
    while (min_heap.size()) {

        // Get the cheapest operation relative to {k}
        // Node and cost
        const [node, cost] = min_heap.dequeue().element;

        // Have we already been here? No loops today kiddo
        if (visited_set.has(node)) continue;

        // Set it. We don't want to come back here. 
        visited_set.add(node);

        // Did our distance increase?
        // If so, update it. If not, keep the same
        time_taken = Math.max(cost, time_taken);

        // Get the edges for this node (If any)
        const node_edges = node_edge_cost.get(node) || [];

        // Get all the edges for this node and add them to the heap
        // If they haven't been visited yet. Note:
        // We're adding the cost of the given node to the cost of the edge.
        // Because we're moving out relative to {k}. Thus,
        // even if all nodes have a cost of 2.
        // It's going to cascade outwards.
        // 2 -> 4 -> 6 -> 8 etc.
        for (const [edge_node, edge_cost] of node_edges) {
            if (!visited_set.has(edge_node)) {

                // Add it to the queue, set the priority to the cost of the edge
                // So we only ever visit the cheapest edge.
                min_heap.enqueue([edge_node, edge_cost + cost], edge_cost + cost);
            }
        }
    }

    // Did we visit every node?
    // If not, we failed to spread the message across the network.
    // If so, return the time taken. 
    return visited_set.size === n ? time_taken : -1;
}

const times = [[2,1,1],[2,3,1],[3,4,1]]
const n = 4
const k = 2

networkDelay(times, n, k)