import { Injectable } from '@angular/core';
import { InMemoryDbService, ResponseOptions, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      people: JSON.parse(localStorage.getItem('angular/people') || 'null') || [
        { id: 1, firstname: 'Alberto', lastname: 'Trabucco', email: 'alberto.trabucco@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/albertotrabucco' },
        { id: 2, firstname: 'Blaise', lastname: 'Kenmoe', email: 'blaise.kenmoe@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/blaisekenmoe' },
        { id: 3, firstname: 'Cristian', lastname: 'Carrino', email: 'cristian.carrino@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/cristiancarrino' },
        { id: 4, firstname: 'Edoardo', lastname: 'Claps', email: 'edoardo.claps@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/edoardoclaps' },
        { id: 5, firstname: 'Emanuel', lastname: 'Epifani', email: 'emanuel.epifani@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/emanuelepifani' },
        { id: 6, firstname: 'Erik', lastname: 'Fullone', email: 'erik.fullone@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/erikfullone' },
        { id: 7, firstname: 'Flavio', lastname: 'Driusso', email: 'flavio.driusso@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/flaviodriusso' },
        { id: 8, firstname: 'Francesco', lastname: 'Manigrasso', email: 'francesco.manigrasso@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/francescomanigrasso' },
        { id: 9, firstname: 'Francesco', lastname: 'Ribatti', email: 'francesco.ribatti@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/francescoribatti' },
        { id: 10, firstname: 'Gianluca', lastname: 'Beatrice', email: 'gianluca.beatrice@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/gianlucabeatrice' },
        { id: 11, firstname: 'Giorgia', lastname: 'Chieca', email: 'giorgia.chieca@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/giorgiachieca' },
        { id: 12, firstname: 'Hassan', lastname: 'Marji', email: 'hassan.marji@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/hassanmarji' },
        { id: 13, firstname: 'Livio', lastname: 'Bioglio', email: 'livio.bioglio@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/liviobioglio' },
        { id: 14, firstname: 'Luca', lastname: 'Ottaviano', email: 'luca.ottaviano@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/lucaottaviano' },
        { id: 15, firstname: 'Massimo', lastname: 'Santoli', email: 'massimo.santoli@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/massimosantoli' },
        { id: 16, firstname: 'Pietro', lastname: 'Delfino', email: 'pietro.delfino@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/pietrodelfino' },
        { id: 17, firstname: 'Raffaele', lastname: 'Corgiat', email: 'raffaele.corgiat@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/raffaelecorgiat' },
        { id: 18, firstname: 'roberto', lastname: 'ruffinengo', email: 'roberto.ruffinengo@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/robertoruffinengo' },
        { id: 19, firstname: 'Rosaria', lastname: 'La Pietra', email: 'rosaria.lapietra@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/rosarialapietra' },
        { id: 20, firstname: 'Sandra', lastname: 'Imafidon', email: 'sandra.imafidon@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/sandraimafidon' },
        { id: 21, firstname: 'Sergio', lastname: 'Pugliese', email: 'sergio.pugliese@engimtorino.net', type: 'student', imageUrl: 'https://robohash.org/sergiopugliese' },
        { id: 22, firstname: 'Simone', lastname: 'Leonardi', email: 'simone.leonardi@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/simoneleonardi' },
        { id: 23, firstname: 'Zhongli Filippo', lastname: 'Hu', email: 'zhonglifilippo.hu@engimtorino.net', type: 'teacher', imageUrl: 'https://robohash.org/zhonglifilippohu' },
      ],

      messages: JSON.parse(localStorage.getItem('angular/messages') || 'null') || [
        { id: 1, userId: 1, type: 'outcoming', message: 'Ciao Alberto come stai?' },
        { id: 2, userId: 1, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 3, userId: 2, type: 'outcoming', message: 'Ciao Blaise come stai?' },
        { id: 4, userId: 2, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 5, userId: 3, type: 'outcoming', message: 'Ciao Cristian come stai?' },
        { id: 6, userId: 3, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 7, userId: 4, type: 'outcoming', message: 'Ciao Edoardo come stai?' },
        { id: 8, userId: 4, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 9, userId: 5, type: 'outcoming', message: 'Ciao Emanuel come stai?' },
        { id: 10, userId: 5, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 11, userId: 6, type: 'outcoming', message: 'Ciao Erik come stai?' },
        { id: 12, userId: 6, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 13, userId: 7, type: 'outcoming', message: 'Ciao Flavio come stai?' },
        { id: 14, userId: 7, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 15, userId: 8, type: 'outcoming', message: 'Ciao Francesco come stai?' },
        { id: 16, userId: 8, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 17, userId: 9, type: 'outcoming', message: 'Ciao Francesco come stai?' },
        { id: 18, userId: 9, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 19, userId: 10, type: 'outcoming', message: 'Ciao Gianluca come stai?' },
        { id: 20, userId: 10, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 21, userId: 11, type: 'outcoming', message: 'Ciao Giorgia come stai?' },
        { id: 22, userId: 11, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 23, userId: 12, type: 'outcoming', message: 'Ciao Hassan come stai?' },
        { id: 24, userId: 12, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 25, userId: 13, type: 'outcoming', message: 'Ciao Livio come stai?' },
        { id: 26, userId: 13, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 27, userId: 14, type: 'outcoming', message: 'Ciao Luca come stai?' },
        { id: 28, userId: 14, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 29, userId: 15, type: 'outcoming', message: 'Ciao Massimo come stai?' },
        { id: 30, userId: 15, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 31, userId: 16, type: 'outcoming', message: 'Ciao Pietro come stai?' },
        { id: 32, userId: 16, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 33, userId: 17, type: 'outcoming', message: 'Ciao Raffaele come stai?' },
        { id: 34, userId: 17, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 35, userId: 18, type: 'outcoming', message: 'Ciao roberto come stai?' },
        { id: 36, userId: 18, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 37, userId: 19, type: 'outcoming', message: 'Ciao Rosaria come stai?' },
        { id: 38, userId: 19, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 39, userId: 20, type: 'outcoming', message: 'Ciao Sandra come stai?' },
        { id: 40, userId: 20, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 41, userId: 21, type: 'outcoming', message: 'Ciao Sergio come stai?' },
        { id: 42, userId: 21, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 43, userId: 22, type: 'outcoming', message: 'Ciao Simone come stai?' },
        { id: 44, userId: 22, type: 'incoming', message: 'Bene grazie! E tu?' },
        { id: 45, userId: 23, type: 'outcoming', message: 'Ciao Zhongli Filippo come stai?' },
        { id: 46, userId: 23, type: 'incoming', message: 'Bene grazie! E tu?' }
      ]
    };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  genId<T extends { id: number }>(collection: T[]): number {
    return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
  }

  responseInterceptor(responseOptions: ResponseOptions, requestInfo: RequestInfo): ResponseOptions {
    localStorage.setItem('angular/' + requestInfo.collectionName, JSON.stringify(requestInfo.collection));
    return responseOptions;
  }
}