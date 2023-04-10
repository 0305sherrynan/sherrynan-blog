/**
 * formatDateTime 将形如2023-03-22T13:12:42.000Z 改格式为2023-03-03 16:07:12
 * currentTime 返回当前的事件 格式：2023-03-03 16:07:12
 */

    //

    
	export const addZero = (num:number)=> {
	    return num < 10 ? '0' + num : num;
	}
	export const formatDateTime = (date : string)=> {
	    const time = new Date(Date.parse(date));
		time.setTime(time.setHours(time.getHours()));
		const Y = time.getFullYear() + '/';
		const M = addZero(time.getMonth() + 1) + '/';
	    const D = addZero(time.getDate()) + ' ';
		const h = addZero(time.getHours()) + ':';
		const m =addZero(time.getMinutes()) + ':';
		const s = addZero(time.getSeconds());
		return Y + M + D + h + m + s;
    }
	export const currentTime = ():string=> {
		const time = new Date()
		return formatDateTime(time.toString())

	}
