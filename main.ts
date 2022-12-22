export interface Node {
    isRoot():{};
    getName():{};
    getDepth():{};
    getParent(Node: Node):{};
}

export interface Sortable extends Node{
    sort1(fn: any):{};
    sort():{};
}

export interface Printable extends Node{
    print():{};
}

export class File implements Node {
    name: any;
    parent: Node;
    printer: NodePrinter;
    constructor(parent: Node,name: any,printer: NodePrinter){
        this.name = name;
        this.parent = parent;
        this.printer = printer;
    }
    isRoot():boolean{
        return false;
    };
    getName():string{
        return "";
    };
    getDepth():number{
        return 0;
    };
    print():any{};
    sort1(fn: any):any{};
    sort():any{};
    getParent(Node: Node):Node{
        return Node;
    };
}


export class Folder implements Node {
    name: any;
    children: Node[];
    parent: Node;
    printer: NodePrinter;
    constructor(parent: Node,name: any,printer: NodePrinter,children: Node[]){
        this.name = name;
        this.children = children;
        this.parent = parent;
        this.printer = printer;
    }
    isRoot():boolean{
        return false;
    };
    getName():string{
        return "";
    };
    getDepth():number{
        return 0;
    };
    print():any{};
    sort1(fn: any):any{};
    sort():any{};
    getParent(Node: Node):Node{
        return Node;
    };
    has(node: Node):boolean{
        return false;
    };
    add(node: Node):any{};
    remove(node: Node):any{};
    getChild(node: Node):any{};
}

export interface NodePrinter extends Node {
    print:(node: Node)=>{};
}


export class NodeParser implements NodePrinter {
    print(node: Node):any{};
    isRoot():boolean{
        return false;
    };
    getName():string{
        return "";
    };
    getDepth():number{
        return 0;
    };
    getParent(Node: Node):Node{
        return Node;
    };
    printer(NodePrinter: any):any{};
    parse(paths: String[], delimiter: String):any{};
}

export class SimplePrinter implements NodePrinter{
    isRoot():boolean{
        return false;
    };
    getName():string{
        return "";
    };
    getDepth():number{
        return 0;
    };
    getParent(Node: Node):Node{
        return Node;
    };
    print(node: Node):any{};
}

export class TreePrinter implements NodePrinter{
    isRoot():boolean{
        return false;
    };
    getName():string{
        return "";
    };
    getDepth():number{
        return 0;
    };
    getParent(Node: Node):Node{
        return Node;
    };
    print(node: Node):any{};
}