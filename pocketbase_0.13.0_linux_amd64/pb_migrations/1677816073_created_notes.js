migrate((db) => {
  const collection = new Collection({
    "id": "c4se5esxd91ovcc",
    "created": "2023-03-03 04:01:13.138Z",
    "updated": "2023-03-03 04:01:13.138Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mqcfg9n4",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 150,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lwtnbz1e",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c4se5esxd91ovcc");

  return dao.deleteCollection(collection);
})
