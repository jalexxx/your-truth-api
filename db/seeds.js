const db = connect("mongodb://localhost:27017/yourTruthApiDB");

db.posts.drop();

db.posts.insertMany([
    {
        title: "test",
        name: "bojin",
        blog: "Blah Blah Blah",
        date: new Date(),
    },
    {
        title: "test test",
        name: "Jumaanah",
        blog: "Two minds are better than one",
        date: new Date(),
    },
]);
