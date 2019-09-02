function setup(){
  //noCanvas();
  tree = new Tree();
  tree.addValue(5);//assigning 5 to node
  tree.addValue(3);
  tree.addValue(8);
  tree.addValue(2);
  tree.addValue(9);
  tree.addValue(7);
  console.log(tree);
}

function Tree(){//creating tree
  this.root = null;
}

Tree.prototype.addValue = function(val){//addNode function
  var n = new Node(val);
  if (this.root == null){//prevents overriding root
    this.root = n;
  }else{
    this.root.addNode(n);
  }
}

Node.prototype.addNode = function(n){
  if (n.value < this.value){
    if (this.left == null){
      this.left = n;
    }else{
    this.left.addNode(n);
    }
  }else if (n.value > this.value){//so if they equals, nothing will happen
    if (this.right == null){
      this.right = n
    }else{
    this.right.addNode(n);
    }
  }
}

function Node(val){//creating node of that tree
  this.value = val;
  this.left = null;
  this.right = null;
}
//Traversing begins
Tree.prototype.traverse = function(){
  this.root.visit();
}

Node.prototype.visit = function(){
  if (this.left != null){
    this.left.visit();
  }
  console.log(this.value)
  if (this.right != null){
    this.right.visit();
  }
}
//Traversing ends

//Start searching
Tree.prototype.search = function(val){
  var found = this.root.searching(val);
  if(found != null){
    console.log('Found:');
    console.log(found);
  }else{
    console.log('Not found')
  }
}
Node.prototype.searching = function(val){
  if (this.value == val){
    return val;
  }else if(val < this.value && this.left != null){
    return this.left.searching(val);
  }else if(val > this.value && this.right != null){
    return this.right.searching(val);
  }
}

setup();
tree.traverse();

tree.search(9);
