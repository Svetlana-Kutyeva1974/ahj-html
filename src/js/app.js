/**
 * Entry point of app:
 */

import Widjet from './FormVidjet.js';
// import GameController from './GameController.js';
// import GameStateService from './GameStateService.js';

const buttonWidjet = new Widjet(document.querySelector('#button-container'));
buttonWidjet.bindToDOM();

// const stateService = new GameStateService(localStorage);

// const gameCtrl = new GameController(gamePlay, stateService);
// gameCtrl.init();
