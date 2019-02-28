import Mock from "mockjs";

let imgs=Mock.mock({
    'imgs|4':[{
        'src': "@image('750x350', '#02adea')"
    }]
})
Mock.mock("http://api/imgs",imgs)
export default imgs