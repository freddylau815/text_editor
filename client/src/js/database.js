import { openDB } from "idb";

const initdb = async () =>
  openDB("jate_db", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Create a connection to the db
  const jateDb = await openDB("jate_db", 1); // Parent

  // Create a transaction
  const tx = jateDb.transaction("jate", "readwrite"); //Child

  // Open up the object store
  const store = tx.objectStore("jate");

  await store.put({
    id: 1,
    value: content,
  });

  console.error("jate updated successfully");
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("Post to the database");

  // Create a connection to the db
  const jateDb = await openDB("jate_db", 1); // Parent

  // Create a transaction
  const tx = jateDb.transaction("jate", "readwrite"); //Child

  // Open up the object store
  const store = tx.objectStore("jate");
  const jate = await store.get(1);

  console.log("Data saved to the database");

  return jate?.value || "";
};

initdb();
