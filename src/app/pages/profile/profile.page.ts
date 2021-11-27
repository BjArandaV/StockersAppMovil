import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  public userProfile: UserProfile;
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
  }

  async logOut(): Promise<void> {
    await this.authService.logout();
    this.router.navigateByUrl('login');
  }

  async updateName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Ingresa tu nombre',
      inputs: [
        {
          type: 'text',
          name: 'fullName',
          placeholder: 'Tu Nombre',
          value: this.userProfile.fullName
        }
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Guardar',
          handler: data => {
            this.profileService.updateName(data.fullName);
          }
        }
      ]
    });
    return await alert.present();
  }

  async updateFono(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Ingresa numero telefonico',
      inputs: [
        {
          type: 'text',
          name: 'fono',
          placeholder: 'Tu numero',
          value: this.userProfile.fono
        }
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Guardar',
          handler: data => {
            this.profileService.updateFono(data.fono);
          }
        }
      ]
    });
    return await alert.present();
  }



  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Nuevo correo' },
        { name: 'password', placeholder: 'Tu Contraseña', type: 'password' }
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Guardar',
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email cambiado con éxito');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
          }
        }
      ]
    });
    return await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'oldPassword', placeholder: 'Contraseña antigua', type: 'password' },
        { name: 'newPassword', placeholder: 'Nueva contraseña', type: 'password' }
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Guardar',
          handler: data => {
            this.profileService.updatePassword(
              data.oldPassword,
              data.newPassword
            );
          }
        }
      ]
    });
    return await alert.present();
  }
}
