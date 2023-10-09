import { Model } from "axe-api";

class MainCategory extends Model {
  get fillable() {
    return ["category_name","description","parent_category_id"]
  }

  get validations() {
    return {
      category_name: "required",
      description: "required",
      is_active: "required|boolean|accepted",
    }
  }
}

export default MainCategory;