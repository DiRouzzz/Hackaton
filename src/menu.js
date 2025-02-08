import { Menu } from './core/menu';

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		this.menuItems = [];

		document.addEventListener('contextmenu', event => {
			event.preventDefault();
			this.open(event.pageX, event.pageY);
			console.log(event.pageX, event.pageY);
		});
	}

	open(x, y) {
		if (this.menuItems.length === 0) return;

		this.el.style.top = `${y}px`;
		this.el.style.left = `${x}px`;
		this.el.classList.add('open');
	}

	close() {
		this.el.classList.remove('open');
	}

	add(moduleInstance) {
		this.menuItems.push(moduleInstance);

		const menuItem = document.createElement('li');
		menuItem.innerHTML = moduleInstance.toHTML();
		menuItem.classList.add('menu-item');
		menuItem.addEventListener('click', () => {
			moduleInstance.trigger();
			this.close();
		});

		this.el.appendChild(menuItem);
	}
}
