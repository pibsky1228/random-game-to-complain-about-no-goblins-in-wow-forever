const element = document.getElementById("incrementText");
function incrementButton() {
if (event.repeat) return;
let value = Number(element.textContent);
value++;

element.textContent = value;

if (value === 10) {
document.body.style.backgroundImage =
"url('https://blob.gifcities.org/gifcities/OARUXSH6VWGNH553MRWDQSPDHHNP624B.gif')"}
if (value === 20) {
document.body.style.backgroundImage =
"url(https://blob.gifcities.org/gifcities/C54JOVQLXCBMEK7IKJ6YKUQZHBNDJFHJ.gif)"}
if (value === 30) {
document.body.style.backgroundImage =
"url(https://blob.gifcities.org/gifcities/SSKCOMCKPL6ENU5U4SS5G6THBRHNAMP3.gif)"}
if (value === 40) {
document.body.style.backgroundImage =
"url(https://blob.gifcities.org/gifcities/CXBAGZTQQ4R2DD5L5J2A6JSG7DEHNBU7.gif)"}
if (value === 40) {
document.body.style.backgroundImage =
"url(https://blob.gifcities.org/gifcities/6XDR5J3YFZETJOZL5FHVG2CPAKFRO7DF.gif)"}
if (value === 40) {
document.body.style.backgroundImage =
"url(https://blob.gifcities.org/gifcities/7INKOAAAX244WP24SL2PCKP5GL5DY5RT.gif)"}
if (value === 40) {
document.body.style.backgroundImage =
"url(https://blob.gifcities.org/gifcities/VWOQTDC2MEDFTMYW7WAXOZA6EWJ4I6Y5.gif)"}
;
}
document.onkeydown = function(event) {
incrementButton(event);

}