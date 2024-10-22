import { $post } from "@/utils/request.js";
const API = {
  test: "/getInfo"
};
export function getInfo(data = {}) {
  return $post(API.test, data);
}
