import Tree from './Tree';
import { IModel } from './Interfaces';

const _collection: IModel[] = [
    { id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", parent_id: null, order: 1, children: [
        { id: "c3d9f398-a34b-422c-9f69-6390d80851da", parent_id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", order: 1, children: []},
        { id: "ba694876-bfc6-45dd-bd70-6eaa530fa087", parent_id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", order: 2, children: [
            { id: "dacf3f05-fdf5-4aaa-bfd6-8895a75f9201", parent_id: "ba694876-bfc6-45dd-bd70-6eaa530fa087", order: 1, children: []}
        ]}
    ]},
    { id: "2b7e390-8866-4816-bf41-a49318b7c05e3", parent_id: null, order: 2, children: [
        { id: "271ea5b7-82cb-4391-8a71-7a79d6bf262c", parent_id: "2b7e390-8866-4816-bf41-a49318b7c05e3", order: 1, children: [
            { id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", parent_id: "271ea5b7-82cb-4391-8a71-7a79d6bf262c", order: 1, children: [
                { id: "777d4f89-a84e-4b9a-a25d-376f16b51f5a", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 1, children: []},
                { id: "fe88e36d-f364-42a0-b5cf-c2d17135d5a7", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 2, children: []},
                { id: "9d40e242-af75-4518-b2ff-fc7ae216b8f2", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 3, children: []}
            ]},
            { id: "7ad3441e-3498-411b-81ef-486ce2d18a19", parent_id: "271ea5b7-82cb-4391-8a71-7a79d6bf262c", order: 2, children: [
                { id: "076696e9-d4bd-4de0-b7fd-d9dbf73586dc", parent_id: "7ad3441e-3498-411b-81ef-486ce2d18a19", order: 1, children: []}
            ]}
        ]},
        { id: "96fddd36-72db-40ca-a7fb-00b007739e4d", parent_id: "2b7e390-8866-4816-bf41-a49318b7c05e3", order: 2, children: []},
        { id: "2c0c7d2f-7a07-445f-a1bd-e5a0610c2892", parent_id: "2b7e390-8866-4816-bf41-a49318b7c05e3", order: 3, children: []}
    ]},
    { id: "cef9a315-72f1-4f52-a5ff-f9320ec64226", parent_id: null, order: 3, children: []},
];

const _flatCollection: IModel[] = [
    { id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", parent_id: null, order: 1 },
    { id: "c3d9f398-a34b-422c-9f69-6390d80851da", parent_id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", order: 1 },
    { id: "ba694876-bfc6-45dd-bd70-6eaa530fa087", parent_id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", order: 2 },
    { id: "dacf3f05-fdf5-4aaa-bfd6-8895a75f9201", parent_id: "ba694876-bfc6-45dd-bd70-6eaa530fa087", order: 1 },
    { id: "2b7e390-8866-4816-bf41-a49318b7c05e3", parent_id: null, order: 2 },
    { id: "271ea5b7-82cb-4391-8a71-7a79d6bf262c", parent_id: "2b7e390-8866-4816-bf41-a49318b7c05e3", order: 1 },
    { id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", parent_id: "271ea5b7-82cb-4391-8a71-7a79d6bf262c", order: 1 },
    { id: "777d4f89-a84e-4b9a-a25d-376f16b51f5a", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 1 },
    { id: "fe88e36d-f364-42a0-b5cf-c2d17135d5a7", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 2 },
    { id: "9d40e242-af75-4518-b2ff-fc7ae216b8f2", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 3 },
    { id: "7ad3441e-3498-411b-81ef-486ce2d18a19", parent_id: "271ea5b7-82cb-4391-8a71-7a79d6bf262c", order: 2 },
    { id: "076696e9-d4bd-4de0-b7fd-d9dbf73586dc", parent_id: "7ad3441e-3498-411b-81ef-486ce2d18a19", order: 1 },
    { id: "96fddd36-72db-40ca-a7fb-00b007739e4d", parent_id: "2b7e390-8866-4816-bf41-a49318b7c05e3", order: 2 },
    { id: "2c0c7d2f-7a07-445f-a1bd-e5a0610c2892", parent_id: "2b7e390-8866-4816-bf41-a49318b7c05e3", order: 3 },
    { id: "cef9a315-72f1-4f52-a5ff-f9320ec64226", parent_id: null, order: 3 },
]

describe("Tree Utilities", () => {
    
    beforeEach(() => {
        Tree.create(_collection);
    });

    afterEach(() => {
        Tree.empty();
    });

    test("tree has been created", () => {
        expect(Tree.collection.length).not.toBe(0);
    });

    test("flatten collection", () => {
        const flatCollection = Tree.flatten();
        expect(flatCollection.length).toBe(15);
        expect(flatCollection).toMatchObject(_flatCollection);
    });

    test("find parent node by giving the node id", () => {
        const parent1 = Tree.getParent("c3d9f398-a34b-422c-9f69-6390d80851da");
        expect(parent1).toMatchObject({ id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", parent_id: null, order: 1, children: [
            { id: "c3d9f398-a34b-422c-9f69-6390d80851da", parent_id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", order: 1, children: []},
            { id: "ba694876-bfc6-45dd-bd70-6eaa530fa087", parent_id: "bef1bce-d36e-47fb-abcd-8728eba8f24c2", order: 2, children: [
                { id: "dacf3f05-fdf5-4aaa-bfd6-8895a75f9201", parent_id: "ba694876-bfc6-45dd-bd70-6eaa530fa087", order: 1, children: []}
            ]}
        ]});

        const parent2 = Tree.getParent("076696e9-d4bd-4de0-b7fd-d9dbf73586dc");
        expect(parent2).toMatchObject({ id: "7ad3441e-3498-411b-81ef-486ce2d18a19", parent_id: "271ea5b7-82cb-4391-8a71-7a79d6bf262c", order: 2, children: [
            { id: "076696e9-d4bd-4de0-b7fd-d9dbf73586dc", parent_id: "7ad3441e-3498-411b-81ef-486ce2d18a19", order: 1, children: []}
        ]});

        const rootObject = Tree.getParent("cef9a315-72f1-4f52-a5ff-f9320ec64226");
        expect(rootObject).toBe(null);
    });

    test("adding new node to the hierarchy", () => {
        const parent_id: string = "c841a6b9-175b-48d8-81ed-d7f9b4809af6";
        const node: IModel = {
            id: "07da958c-1978-4a19-ae10-5dfeddc20fb7",
            parent_id: null,
            children: [],
            order: 0
        };
        const atIndex: number = 2;

        Tree.addNode(parent_id, node, atIndex);
        const parent = Tree.getParent("07da958c-1978-4a19-ae10-5dfeddc20fb7");
        expect(parent).toMatchObject({ id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", parent_id: "271ea5b7-82cb-4391-8a71-7a79d6bf262c", order: 1, children: [
            { id: "777d4f89-a84e-4b9a-a25d-376f16b51f5a", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 1, children: []},
            { id: "fe88e36d-f364-42a0-b5cf-c2d17135d5a7", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 2, children: []},
            { id: "07da958c-1978-4a19-ae10-5dfeddc20fb7", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 3, children: []},
            { id: "9d40e242-af75-4518-b2ff-fc7ae216b8f2", parent_id: "c841a6b9-175b-48d8-81ed-d7f9b4809af6", order: 4, children: []}
        ]});
    });
});
