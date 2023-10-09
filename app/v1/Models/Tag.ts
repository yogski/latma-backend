import { Model } from "axe-api";

class MainTag extends Model {
  get fillable() {
    return ["tagname"];
  }

  get hiddens() {
    return ["id", "popularity_index", "last_used", "created_at", "updated_at"];
  }

  get validations() {
    return {
      tagname: "required|string",
    }
  }
}

export default MainTag