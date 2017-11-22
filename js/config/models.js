import Realm from "realm";

const FavesSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
};
const realm = new Realm({ schema: [FavesSchema] });

export const queryFaves = () => {
  return realm.objects("Fave");
};

export const deleteFave = favId => {
  let fav = realm.objects("Fave").filtered("id ==$0", favId);
  try {
    realm.write(() => {
      realm.delete(fav);
    });
  } catch (e) {
    console.log("Error deleting fav", e);
  }
};

export const createFave = session_id => {
  try {
    realm.write(() => {
      realm.create("Fave", { id: session_id, faved_on: new Date() });
    });
  } catch (e) {
    console.log("Error on creation");
  }
};

export default realm;
