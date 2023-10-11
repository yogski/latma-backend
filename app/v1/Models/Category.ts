import { HandlerTypes, HttpMethods, Model } from "axe-api";

class MainCategory extends Model {
  get handlers() {
    return [HandlerTypes.PAGINATE, HandlerTypes.INSERT, HandlerTypes.UPDATE, HandlerTypes.DELETE];
  }

  get fillable() {
    return {
      [HttpMethods.POST]: ["category_name","description","parent_category_id"],
      [HttpMethods.PUT]: ["category_name","description","parent_category_id", "is_active"],
    }
  }

  get validations() {
    return {
      [HttpMethods.POST]: {
        category_name: "required|string",
        description: "required|string",
        parent_category_id: "numeric",
      },
      [HttpMethods.PUT]: {
        category_name: "string",
        description: "string",
        parent_category_id: "numeric",
        is_active: "boolean",
      }
    }
  }

  get hiddens() {
    return ["created_at", "updated_at", "is_active"]
  }
}

export default MainCategory;