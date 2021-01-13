import { Router } from 'express';
import caesar from './caesar';
import process from './process';

const routes: Router[] = [caesar, process];

export default routes;
