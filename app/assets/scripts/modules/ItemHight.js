import $ from 'jquery';

class ItemHight {
	constructor(item){
		this.columns = item;
		this.tallestColumn = 0;
		this.currentHigth = this.columns.height();
		this.setEqualHeight();
	}

	setEqualHeight(columns){
		const that = this;
		
		this.columns.each(function(){
			if(that.currentHigth > that.tallestColumn){
				that.tallestColumn = that.currentHigth;	
			}
		});
		this.columns.height(this.tallestColumn);
	}

}



export default ItemHight;

