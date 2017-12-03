import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import ItemHight from './modules/ItemHight';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var itemHight = new ItemHight($(".vehicles__item"));
var itemHight_span = new ItemHight($(".vehicles__item span "));
var itemHight_p = new ItemHight($(".vehicles__item>p"));
var modal = new Modal();



