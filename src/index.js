import {model} from './model';
import {Site} from './classes/site';
import './style/main.css';

const site = new Site('#site');

site.render(model);
