type BookEntityProps = {
  _id?: string | null | undefined;
  title?: string | null | undefined;
  isbn?: string | null | undefined;
  pageCount: number | null | undefined;
  publishedDate: Date | null;
  thumbnailUrl?: string | null | undefined;
  shortDescription?: string | null | undefined;
  longDescription?: string | null | undefined;
  status?: string | null | undefined;
  authors: string[];
  categories: string[];
};

class BookEntity {
  _id?: string | null | undefined;
  title?: string | null | undefined;
  isbn?: string | null | undefined;
  pageCount: number | null | undefined;
  publishedDate: Date | null;
  thumbnailUrl?: string | null | undefined;
  shortDescription?: string | null | undefined;
  longDescription?: string | null | undefined;
  status?: string | null | undefined;
  authors: string[];
  categories: string[];

  constructor(props: BookEntityProps) {
    this._id = props._id;
    this.title = props.title;
    this.isbn = props.isbn;
    this.pageCount = props.pageCount;
    this.publishedDate = props.publishedDate;
    this.thumbnailUrl = props.thumbnailUrl;
    this.shortDescription = props.shortDescription;
    this.longDescription = props.longDescription;
    this.status = props.status;
    this.authors = props.authors;
    this.categories = props.categories;
  }
}

export { BookEntity };
