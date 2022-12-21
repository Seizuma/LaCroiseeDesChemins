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
    isRoot():any{};
    getName():any{};
    getDepth():any{};
    print():any{};
    sort1(fn: any):any{};
    sort():any{};
    getParent(Node: Node):any{};
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
    isRoot():any{};
    getName():any{};
    getDepth():any{};
    print():any{};
    sort1(fn: any):any{};
    sort():any{};
    getParent(Node: Node):any{};
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
    isRoot():any{};
    getName():any{};
    getDepth():any{};
    getParent(Node: Node):any{};
    printer(NodePrinter: any):any{};
    parse(paths: String[], delimiter: String):any{};
}

export class SimplePrinter implements NodePrinter{
    isRoot():any{};
    getName():any{};
    getDepth():any{};
    getParent(Node: Node):any{};
    print(node: Node):any{};
}

export class TreePrinter implements NodePrinter{
    isRoot():any{};
    getName():any{};
    getDepth():any{};
    getParent(Node: Node):any{};
    print(node: Node):any{};
}