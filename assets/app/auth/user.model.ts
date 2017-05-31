export class User {

  //public allows me to not have to write the begining stuff like I did in messages
//? allows me to set these as optional values
  constructor (public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string) {

  }
}
