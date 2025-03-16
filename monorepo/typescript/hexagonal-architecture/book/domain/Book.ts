class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    public static create(title: string, author: string): Book {
        const book = new Book(title, author);
        return book;
    }
    getTitle(): string {
        return this.title;
    }
    setTitle(title: string): void {
        this.title = title;
    }
    getAuthor(): string {
        return this.author;
    }
    setAuthor(author: string): void {
        this.author = author;
    }
}