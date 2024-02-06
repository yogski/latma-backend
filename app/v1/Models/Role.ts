import { HandlerTypes, HttpMethods, Model } from "axe-api";

class MainRole extends Model {
  get handlers() {
    return [HandlerTypes.PAGINATE, HandlerTypes.INSERT,HandlerTypes.UPDATE, HandlerTypes.DELETE]
  }
  
  get fillable() {
    return {
      [HttpMethods.POST]: ["role_name","role_description","min_authority_level"],
      [HttpMethods.PUT]: ["role_name","role_description","min_authority_level", "is_active"],
    }
  }
  
  get validations() {
    return {
      [HttpMethods.POST]: {
        role_name: "required|string",
        role_description: "required|string",
        min_authority_level: "numeric|min:1"
      },
      [HttpMethods.PUT]: {
        role_name: "string",
        role_description: "string",
        min_authority_level: "numeric|min:1",
        is_active: "boolean",
      }
    }
  }

  get hiddens() {
    return ["min_authority_level", "is_active", "created_at", "updated_at"];
  }
}

export default MainRole;