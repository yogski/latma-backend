import { Model } from "axe-api";

class MainRole extends Model {
  get fillable() {
    return ["role_name","role_description","min_authority_level"];
  }
  
  get validations() {
    return {
      role_name: "required",
      role_description: "required",
      min_authority_level: "min:1"
    }
  }

  get hiddens() {
    return ["min_authority_level", "is_active", "created_at", "updated_at"];
  }
}

export default MainRole;