export class Post {
    constructor(
        public nomePessoa: String,
        public texto: String,
        public qtdLikes: Number,
        public id?: Number
    ){}
}