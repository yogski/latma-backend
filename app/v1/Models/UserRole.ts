import { HandlerTypes, Model } from "axe-api";

class MainUserRole extends Model {
  get handlers() {
    return [HandlerTypes.SHOW, HandlerTypes.INSERT, HandlerTypes.UPDATE, HandlerTypes.DELETE]
  }

  get fillable() {
    return ["user_id", "role_id"];
  }

  get validations() {
    return {
      user_id: "required|numeric|min:1",
      role_id: "required|numeric|min:1"
    }
  }

  get hiddens() {
    return ["created_at", "updated_at"]
  }
}

export default MainUserRole;