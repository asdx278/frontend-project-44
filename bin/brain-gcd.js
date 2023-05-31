#!/usr/bin/env node
import gameGcd from '../src/index.js';
import { rules, gameProcess } from '../src/games/game-gcd.js';

gameGcd(rules, gameProcess);
