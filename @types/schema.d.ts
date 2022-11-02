export type Tag = {
    color: string;
    id: string;
    name: string
}

export type BlogPost = {
    id : string;
    slug : string;
    title : string;
    cover : string;
    tag : Tag[]
    description : string;
    date : string;
}