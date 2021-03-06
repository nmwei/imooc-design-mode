class User {
  constructor(type) {
    this.type = type
  }

  buy() {
    if(this.type === 'oridinary') {
      console.log('普通用户购买')
    } else if(this.type === 'member') {
      console.log('会员用户购买')
    } else if('this.type' === 'vip') {
      console.log('vip 用户购买')
    }
  }
}

let u1 = new User('member') 
//u1.buy()

class OridinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}
class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}

class VipUser {
  buy() {
    console.log('vip 用户购买')
  }
}

class UserManager {
  constructor() {
    this.user = null
  }

  setUser(user) {
    this.user= user
  }

  userBuy() {
    this.user.buy()
  }
}


const m = new UserManager()
const u = new OridinaryUser()
m.setUser(u)
m.userBuy() //u2.buy()


class Color {
  constructor(name) {
    this.name = name
  }
}

class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  draw() {
    console.log(`${this.color.name} ${this.name}`)
  }
}

let red = new Color('red')
let circle = new Shape('circle', red)
circle.draw() //red circle