export interface IModel {
    id: string;
    parent_id: string | null;
    children?: IModel[];
    order: number;
}

export interface ICollection {
    collection: IModel[];
}

