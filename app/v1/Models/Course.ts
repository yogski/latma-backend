import { HandlerTypes, HttpMethods, Model } from "axe-api";

class MainCourse extends Model {
  get handlers() {
    return [HandlerTypes.PAGINATE, HandlerTypes.INSERT, HandlerTypes.UPDATE, HandlerTypes.DELETE, HandlerTypes.SHOW];
  }

  get fillable() {
    return {
      [HttpMethods.POST]: ["name", "grade_id", "category_id"],
      [HttpMethods.PUT]: ["name", "grade_id", "category_id", "is_active"],
    };
  }

  get validations() {
    return {
      [HttpMethods.POST]: {
        name: "required|string",
        grade_id: "required|numeric|min:1",
        category_id: "required|numeric|min:1",
      },
      [HttpMethods.PUT]: {
        name: "string",
        grade_id: "numeric|min:1",
        category_id: "numeric|min:1",
        is_active: "boolean"
      },
    }
  }

  get hiddens() {
    return ["created_at", "updated_at", "is_active","grade_id","category_id"]
  }

  grades() {
    return this.hasOne("Grade", "id", "grade_id");
  }

  categories() {
    return this.hasOne("Category", "id", "category_id");
  }
}

export default MainCourse;