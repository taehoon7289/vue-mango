import Base from "@/common/axios/api/Base";

class Board extends Base {
  /**
   * 게시물 리스트
   * @param params
   */
  async getListOfBoard(params = {}) {
    const res = await this.get("/api/user/boards/", params);
    return res.data;
  }
}

export default new Board();
