const model = require("../models");
const { Op } = require("sequelize");
const { User } = require("../models");

// 회원가입 페이지 조회
exports.getSignup = async (req, res) => {
  try {
    const singup = await User.findAll();
    res.send({ result: true, data: singup });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 로그인 페이지 조회
exports.getLogin = async (req, res) => {
  try {
    const login = await User.findAll();
    res.send({ result: true, data: login });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 장바구니 목록 조회
exports.getCart = async (req, res) => {
  try {
    const cart = await User.findAll();
    res.send({ result: true, data: cart });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 회원가입 post
exports.postSignup = async (req, res) => {
  const { id, password, username, nickname, email } = req.body;
  try {
    const postsignup = await User.create({
      id,
      password,
      username,
      nickname,
      email,
    });
    res.send({ result: true, data: postsignup });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 로그인 post{
exports.postLogin = async(req,res)=>{
  try {
    const {id,password} = req.body;
    const postlogin = await User.create({
      id,
      password
    })
    res.send({result: true, data: postlogin})
  } catch (error) {
    res.send({result: false, data: error})
  }
}
