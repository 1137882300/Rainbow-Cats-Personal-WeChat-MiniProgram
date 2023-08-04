// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ // 初始化云开发环境
  env: cloud.DYNAMIC_CURRENT_ENV // 当前环境的常量
})
const db = cloud.database()

// 云函数入口函数,命名为 main 的异步函数,接受一个参数 context。
exports.main = async (context) => {
  // 根据待办的 _id 找到并删除
  db.collection(context.list).where({
    _id: context._id
  }).remove()
}