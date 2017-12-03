import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import ItemHight from './modules/ItemHight';
import RevealOnScroll from './modules/RevealOnScroll';
import AnimateScroll from './modules/AnimateScroll';

// Mobile menu init
var mobileMenu = new MobileMenu();
// Equals vehicles items
var itemHight = new ItemHight($(".vehicles__item"));
var itemHight_span = new ItemHight($(".vehicles__item>span"));
var itemHight_p = new ItemHight($(".vehicles__item>p"));
// Reveal on scroll

var aniScroll = new AnimateScroll($(".vehicles__item"),"left",5000);


