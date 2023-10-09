import { Model } from "axe-api";

class MainUser extends Model {
  get hiddens() {
    return ["id", "password_crypt", "authority_level", "updated_at", "is_active"];
  }

  get fillable() {
    return ["username", "password_crypt", "email", "bio_description", "status_updates", "avatar_url"];
  }

  get validations() {
    return {
      username: "required",
      password_crypt: "required",
      email: "required|email",
      is_active: "required|boolean|accepted",
    }
  }
}

export default MainUser;