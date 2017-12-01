import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.siteHeader = $(".header");
		this.menuIcon = $(".header__menu-icon ");
		this.menuIconTop = $(".header__menu-icon__top");
		this.menuIconMiddle = $(".header__menu-icon__middle");
		this.menuIconBottom = $(".header__menu-icon__bottom");
		this.menuContent = $(".header__menu-content");
		this.events();
	}

	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu(){
		this.menuContent.toggleClass("header__menu-content--is-visible");
		this.siteHeader.toggleClass("header--is-expanded");
		this.menuIconTop.toggleClass("header--button-x--middle");
		this.menuIconMiddle.toggleClass("header--button-x--top");
		this.menuIconBottom.toggleClass("header--button-x--bottom");
	}	
}

export default MobileMenu;