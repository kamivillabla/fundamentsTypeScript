import { subDays, format } from 'date-fns';

const date = new Date(2020, 0, 2); // 0 enero - 1 = febrero.. etc.

// Le resto un día
const rta = subDays(date, 1); // 2020-01-01
const srt = format(rta, 'yyyy/MM/dd'); //

console.log(srt);
