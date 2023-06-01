#!/usr/bin/env node
import gamePrime from '../src/index.js';
import { rules, gameProcess } from '../src/games/game-prime.js';

gamePrime(rules, gameProcess);
