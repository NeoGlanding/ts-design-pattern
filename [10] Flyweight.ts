// The Flyweight design pattern is a structural design pattern that aims to reduce the memory usage of an application by sharing common data among multiple objects.
// The pattern achieves this by separating the intrinsic state (shared data) from the extrinsic state (unique data) of objects.
// In other words, the Flyweight pattern shares the common state across objects,
// thereby reducing the total number of objects that need to be created and managed.

// An analogy for the Flyweight pattern could be a library where books are shared among multiple readers.
// The intrinsic state of the book, such as its title, author, and contents, is shared among all readers.
// Each reader has their own extrinsic state, such as bookmarks or notes, that are unique to them.

interface IBook {
  title: string;
  author: string;
}

interface INote {
  page: number;
  notes: string;
}

class Book implements IBook {
  constructor(public title: string, public author: string) {}
}

class Reader {
  private notes: INote[] = [];

  addNote(note: INote) {
    this.notes.push(note);
  }

  getNotes() {
    this.notes.forEach((el) => console.log(el));
  }
}

const myBook = new Book("Ihsan Book", "Ihsan");

const rowan = new Reader();
rowan.addNote({ page: 40, notes: "THis is very good books" });

const jonah = new Reader();
jonah.addNote({ page: 29, notes: "Woow amazing" });

rowan.getNotes();
jonah.getNotes();
