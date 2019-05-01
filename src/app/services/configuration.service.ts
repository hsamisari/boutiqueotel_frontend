import { Injectable } from '@angular/core';
import { User } from '../pojo/auth/user';
const ENV = 'PROD';
const DEV_API_URL = 'http://localhost:8080/api';
const TEST_API_URL = 'http://';
const PROD_API_URL = 'http://35.198.82.103/api';
const REGISTRATION_PATH = 'registration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  getApiBaseUrl(): string {
    /*
    if (ENV === 'PROD') {
      return PROD_API_URL;
    } else if (ENV === 'DEV') {
      return DEV_API_URL;
    } else if (ENV === 'TEST') {
      return TEST_API_URL;
    }
    */
    return DEV_API_URL;
  }

  getApiUrl(resource: string, operation: string, args: string[]): string {
    switch (resource) {
      case 'app-user':
        switch (operation) {
          case 'login':
            if (args.length !== 2) {
              throw new Error('Invalid arguments when calling login service');
            }
            // tslint:disable-next-line:max-line-length
            return `${this.getApiBaseUrl()}/app-user/search/findByEmailOrPhoneNumberAndPassword?email=${args[0]}&phoneNumber=${args[0]}&password=${args[1]}`;

          case 'getAll':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/app-user/${args[0]}/hotels`;

          case 'create':
            if (args.length !== 0) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/app-user`;

          case 'update':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/app-user/${args[0]}`;

          case 'getUserHotels':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/app-user/${args[0]}/hotels`;

          case 'addHotel':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/app-user/${args[0]}/hotels`;
          case 'removeHotel':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/app-user/${args[0]}/hotels/${args[1]}`;

        }
        break;
      case 'registration':
        switch (operation) {
          case 'create':
            return `${this.getApiBaseUrl()}/registration`;
        }
        break;
      case 'hotel':
        switch (operation) {
          case 'get':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/hotel/${args[0]}`;

          case 'getRooms':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/hotel/${args[0]}/rooms`;

          case 'getRoomTypes':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/hotel/${args[0]}/rooms`;

          case 'getUsers':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/hotel/${args[0]}/appUsers`;

          case 'addRoom':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/hotel/${args[0]}/rooms`;
        }
        break;
      case 'room':
        switch (operation) {
          case 'create':
            if (args.length !== 0) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/room`;
          case 'append':
            if (args.length !== 1) {
              throw new Error('Invalid arguments when calling getUsers service');
            }
            return `${this.getApiBaseUrl()}/hotel/${args[0]}/rooms`;
        }
        break;
      case 'log':
        switch (operation) {
          case 'create':
          if (args.length !== 0) {
            throw new Error('Invalid arguments when calling getUsers service');
          }
          return `${this.getApiBaseUrl()}/log`;
        }
        break;
    }
    return null;
  }

}
