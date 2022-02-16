const db = connect("mongodb://localhost:27017/yourTruthApiDB");

db.posts.drop();

db.posts.insertMany([
    {
        title: "test",
        pseudonym: "bojin",
        content: "Blah Blah Blah",
        date: new Date(),
    },
    {
        title: "test test",
        pseudonym: "Jumaanah",
        content: "Two minds are better than one",
        date: new Date(),
    },
]);
