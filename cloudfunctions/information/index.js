// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event, context) => {
  try {
    console.log("Sending message with event data:", event);

    let openid = cloud.getWXContext().OPENID;  // 获取用户的openid
    console.log(openid);
    if (openid === 'oj7Xy5F0cJEh1J72BW5zCc7ycCmM') {//_openidA放到单引号里
        openid = 'oj7Xy5NBtQlOnd3nG5qn9C5iYfDI';//_openidB放到单引号
    } else {
        openid = 'oj7Xy5F0cJEh1J72BW5zCc7ycCmM';//_openidA放到单引号里
    }

    const result = await cloud.openapi.subscribeMessage.send({
      touser: openid, // 发送通知给谁的openid(把上面挑好就行，这块不用动)
      data: {
        // 标题
        thing3: {
          value: event.title
        },
        //内容
        thing4: {
          value: event.content
        },
        //发布时间
        time2: {
          value: event.time
        },
        //创建人
        name1: {
          value: event.me
        }
      },
      
      templateId: event.templateId, // 模板ID
      miniprogramState: 'developer',
      page: 'pages/MainPage/index' // 这个是发送完服务通知用户点击消息后跳转的页面
    })
    console.log("Sending message with event data:", event);

    console.log("Message sent successfully:", result);
    return event.startdate
  } catch (err) {
    console.log("Error while sending message:", err);
    return err
  }
}
