import './styles.css';

import { ContextMenu } from './menu.js';
import { ClicksModule } from './modules/clicksModule.js';
import { TimerModule } from './modules/timerModule.js'

const menu = new ContextMenu('#menu');

const clickModule = new ClicksModule();
const timerModule = new TimerModule();
menu.add(clickModule);
menu.add(timerModule);
