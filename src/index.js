import app from "./app.js";
import main from "./db.js";

app.listen(process.env.PORT || 1337, () => {
  main()
    .then(() => {
      console.log("DB is connected");
      console.log("Server listen on port", process.env.PORT || 1337);
    })
    .catch((error) => console.log("DATABASE ERROR: ", error));
});
