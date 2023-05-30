#!/usr/bin/env node
import gameCalc from '../src/index.js';
import { rules, gameProcess } from '../src/games/game-calc.js';

gameCalc(rules, gameProcess);
