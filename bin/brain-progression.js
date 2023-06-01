#!/usr/bin/env node
import gameProgression from '../src/index.js';
import { rules, gameProcess } from '../src/games/game-progression.js';

gameProgression(rules, gameProcess);
