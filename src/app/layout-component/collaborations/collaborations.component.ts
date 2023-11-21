import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './user-model/User';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss'],
})
export class CollaborationsComponent implements OnInit {
  private user: any = {
    id: 2,
    name: 'Giuliana',
    username: 'Giacomino',
    email: 'giuliana@april.biz',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onGetUsers(): void {
    this.userService
      .getUsers()
      .subscribe((response) => console.table(response)),
      (error: any) => console.log(error),
      () => console.log('Done getting all users');
  }
  onGetUser(): void {
    this.userService.getUser().subscribe((response) => console.table(response)),
      (error: any) => console.log(error),
      () => console.log('Done getting the first user');
  }

  onCreateUser(): void {
    this.userService
      .createUser(this.user)
      .subscribe((response) => console.table(response)),
      (error: any) => console.log(error),
      () => console.log('Done creating user');
  }

  onUpdateUser(): void {
    this.userService
      .updateUser(this.user)
      .subscribe((response) => console.table(response)),
      (error: any) => console.log(error),
      () => console.log('Done updating user');
  }

  onPatchUser(): void {
    this.userService
      .patcheUser(this.user)
      .subscribe((response) => console.table(response)),
      (error: any) => console.log(error),
      () => console.log('Done patching user');
  }
}
