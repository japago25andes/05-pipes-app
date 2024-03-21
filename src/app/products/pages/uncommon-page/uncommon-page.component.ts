import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'John Alexander';
  public gender: 'male' | 'female' = 'male';
  public incitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeCliente() {
    this.name = 'Ana Maria';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['John', 'Ana', 'Maria', 'Hernando', 'Luis', 'Carlos', 'Andres', 'Felipe', 'Jhon', 'Jairo', 'Javier'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.'
  };

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'John',
    age: 30,
    address: 'Cra 10 # 20-30',
    phone: '300-123-4567'
  };

  // Async Pipe
  public myObservable: Observable<number> = interval(1000).pipe(
    tap( value => console.log('tap: ', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Promesa terminada');
      this.person.name = 'Otro nombre';
    }, 3500);
  });


}
