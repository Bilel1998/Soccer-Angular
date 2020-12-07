import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  //mahich kemla
  getUserByEmail(email: string) {
    return this.httpClient.get<{ user : any }>(`${this.userUrl}/userByEmail/${email}`);
  }
  getAllusers()
  {
    console.log('*********');
    return this.httpClient.get<{users:any}>(`${this.userUrl}/getAllUsers`)
  }
  addUserService(user:any)
  {
    let u = {
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      password:user.password,
      cPassword:user.cPassword
    }
    return this.httpClient.post(`${this.userUrl}/addUser`, u);

  }
  loginUserService(user:any)
  {
       return this.httpClient.post<{user:any}>(`${this.userUrl}/loginUser`,user);
  }

}
