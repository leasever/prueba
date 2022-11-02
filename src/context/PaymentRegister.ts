import { Cart, User, UserConnected } from "../types";
import { getSessionStorage, getLocalStorage, useSessionStorage, useLocalStorage, removeLocalStorage } from "../hooks/useLocalStore";
import { encrypt, decrypt } from "../utilities/crypted";
import { v4 } from "uuid";


export async function paymentRegister() {
  let cartlist: Cart[] = getLocalStorage("carrito");
  let userconnected: UserConnected = getSessionStorage("user");
  let users: User[]  = getLocalStorage("users");

  userconnected.purchase.push({
    _id: v4(),
    date: new Date(),
    items: cartlist,
  })
  useSessionStorage<UserConnected>("user", userconnected);
 
  const pass = await decrypt(userconnected.email, userconnected.password);
  const userencryted = await encrypt(
    pass,
    JSON.stringify({
      email: userconnected.email,
      username: userconnected.username,
      password: userconnected.password,
      purchase: userconnected.purchase
    }),
  );

 const updUsers =  users.map((user) => {
   if (user.email === userconnected.email) {
      console.log(user)
      return { ...user, user: userencryted }
    } else {
      return user
    }
  })

  updateUsers(updUsers)
  alert('Gracias por su compra ' + userconnected.username)
}

function updateUsers(users: User[]) {
  useLocalStorage<User[]>("users", users);
  removeLocalStorage("carrito")    
  location.reload()
}
// function update
