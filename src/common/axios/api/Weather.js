import Base from "@/common/axios/api/Base";

class Weather extends Base {
  /**
   * 게시물 리스트
   * @param params
   */
  async getInfo(params = {}) {
    const res = await this.get("/api/user/weathers/", params);
    return res.data;
  }
}

export default new Weather();
