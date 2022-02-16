const api = require("./server");

const port = process.env.PORT || 3000;

api.listen(port, () => console.log(`Express now departing from port ${port}!`));
