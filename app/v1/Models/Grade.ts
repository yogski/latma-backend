import { Model, HandlerTypes } from "axe-api";

class MainGrade extends Model {
  get handlers() {
    return [HandlerTypes.PAGINATE];
  }

  get fillable () {
    return ["description"];
  }

  get validations() {
    return {
      description: "required|string",
    }
  }

  get hiddens() {
    return ["created_at", "updated_at"];
  }
}

export default MainGrade;