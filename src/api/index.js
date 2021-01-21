import instance from "../axios.js";
const meituan = "/api/meituan/";
let Http = {
  /* 登录接口 */
  Login({ userName, password }) {
    return instance.get(meituan + "login", { params: { userName, password } });
  },
  /* 登录接口 */
  Register({ userName, password, rePassword }) {
    return instance.get(meituan + "register", {
      params: { userName, password, rePassword }
    });
  },
  /* 搜索框列表数据获取 */
  getSearchList() {
    return instance.get(meituan + "header/search.json");
  },
  /* 查询最近热门搜索 */
  getHotList() {
    return instance.get(meituan + "header/searchHotWords.json");
  },
  /* 首页左侧导航条 导航数据 */
  getIndexLestNavList() {
    return instance.get(meituan + "index/nav.json");
  },
  /* 首页下方（有格调内容区数据获取） */
  getInsexContentBottomList() {
    return instance.get(meituan + "index/resultsByKeywords.json");
  },
  /* 获取城市列表接口 */
  getCityList() {
    return instance.get(meituan + "city/cityList.json");
  },
  /* 获取热门城市 */
  getHotCityList() {
    return instance.get(meituan + "city/hot.json");
  },
  /* 获取省份列表 */
  getHotProvinceList() {
    return instance.get(meituan + "city/province.json");
  },
  /* 最近搜索城市 */
  getRecentCityList() {
    return instance.get(meituan + "city/recents.json");
  },
  /* 产品展示列表数据获取 */
  getProductList() {
    return instance.get(meituan + "list/goodsList.json");
  },
  /* 推荐产品列表 */
  getRecommandCityList() {
    return instance.get(meituan + "list/recommend.json");
  },
  /* 获取分类列表 */
  getCategoryList() {
    return instance.get(meituan + "list/classify.json");
  },
  /* 获取区域列表 */
  getAreaList() {
    return instance.get(meituan + "list/areaList.json");
  },
  /* 获取当前位置信息 */
  getPositionIndexMsg() {
    return instance.get(meituan + "city/getPosition.json");
  },
  /* 获取当前位置信息 */
  getPositionDetailMsg() {
    return instance.get(meituan + "product/detail.json");
  }
};
export default Http;
