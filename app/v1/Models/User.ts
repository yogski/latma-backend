import { HandlerTypes, HttpMethods, Model } from "axe-api";

class MainUser extends Model {
  get handlers() {
    return [HandlerTypes.PAGINATE, HandlerTypes.SHOW, HandlerTypes.INSERT, HandlerTypes.UPDATE, HandlerTypes.DELETE];
  }

  get hiddens() {
    return ["id", "password_crypt", "authority_level", "updated_at", "is_active"];
  }

  get fillable() {
    return {
      [HttpMethods.POST]: ["username", "password_crypt", "email","bio_description", "avatar_url"],
      [HttpMethods.PUT]: ["username", "password_crypt", "email", "bio_description", "status_updates", "avatar_url", "user_score", "authority_level", "is_active"], 
    } ;
  }

  get validations() {
    return {
      [HttpMethods.POST]: {
        username: "required|string",
        password_crypt: "required|string",
        email: "required|email",
        bio_description: "string",
        avatar_url: "string",
      }, 
      [HttpMethods.PUT]: {
        username: "string",
        password_crypt: "string",
        email: "string|email",
        bio_description: "string",
        avatar_url: "string",
        status_updates: "string",
        user_score: "numeric",
        authority_level: "numeric",
        is_active: "boolean",
      }
    }
  }
}

export default MainUser;