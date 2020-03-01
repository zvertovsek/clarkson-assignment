import { ICollection, IModel } from "./Interfaces";

class Tree <ICollection> {
    public static collection: IModel[] = [];
    
    public static create(data: IModel[]) {
        Tree.collection = data;
    }

    public static empty() {
        Tree.collection = [];
    }

    public static flatten(keepChildren: boolean = false): IModel[] {
        const flattenCollection: IModel[] = [];

        function copyChildren(node: IModel) {
            flattenCollection.push( keepChildren ? node : (({children, ...rest}) => rest)(node) );
            node.children?.forEach((child: IModel) => copyChildren(child));
        }

        this.collection.forEach((node: IModel) => copyChildren(node));
        return flattenCollection;
    } 

    public static getParent(id: string): IModel | null {
        const flattenCollection: IModel[] = Tree.flatten(true);
        const lookupNode: IModel | undefined = flattenCollection.find((node: IModel) => node.id === id);
        if (typeof lookupNode === 'undefined') {
            return null;
        } else {
            if (lookupNode.parent_id === null) {
                return null;
            }
            const parentNode: IModel | undefined = flattenCollection.find((node: IModel) => node.id === lookupNode?.parent_id);
            return (typeof parentNode === 'undefined') ? null : parentNode;
        }
    }

    public static addNode(parent_id: string, node: IModel, index: number) {
        const flattenCollection: IModel[] = Tree.flatten();
        const children: IModel[] = flattenCollection.filter((node: IModel) => node.parent_id === parent_id);
        children.sort((a, b) => a.order - b.order).splice(index, 0, { ...node, parent_id });
        
        children.forEach((child: IModel, count: number) => {
            const nodeInCollection = flattenCollection.find((node: IModel) => node.id === child.id);
            if (typeof nodeInCollection === 'undefined') {
                flattenCollection.push({ ...child, order: count+1 });
            } else {
                nodeInCollection.order = count + 1;
            }
        });

        Tree.build(flattenCollection);
    }

    public static build(flattenCollection: IModel[]) {
        const collection: IModel[] = flattenCollection.filter((node: IModel) => node.parent_id === null);

        function createChildren(id: string) {
            const children = flattenCollection.filter((node: IModel) => node.parent_id === id);
            if (typeof children === 'undefined') {
                return [];
            } else {
                children.sort((a, b) => a.order - b.order).forEach((child: IModel) => {
                    child.children = createChildren(child.id);
                });
                return children;
            }
        }

        collection.forEach((node: IModel) => {
            node.children = createChildren(node.id);
        });

        Tree.create(collection);
    }

}

export default Tree;
