/**
 * University of La Laguna
 * Computer engineering Degree
 * Interactive application programming
 * Project: Presentation of MVC
 * @author Alberto Cruz Luis
 * @email alu0101217734@ull.edu.es
 *
 * @author Jeremy Manuel Luis Leon
 * @email alu0101244587@ull.edu.es
 *
 * @since
 * @link
 * @description
 *
 * Server
 */

'use strict';
import express from 'express';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const HOST = '127.0.0.1';
const PORT = 3000;
// const IP_ADRESS = '';

const app = express();
app.use(express.static(path.join(__dirname, '../TicTacToe')));
app.use(express.static(path.join(__dirname, '../formas')));
app.use(express.static(path.join(__dirname, '../src')));
app.listen(PORT, HOST);

console.log(`Running server at http://${HOST}:` + PORT);
