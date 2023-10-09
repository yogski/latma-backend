import { Model } from "axe-api";

class MainAchievement extends Model {
  get fillable() {
    return ["title", "description", "image_url"];
  }

  get validations() {
    return {
      title: "required",
      description: "required",
      image_url: "required|url",
    }
  }
}

export default MainAchievement;