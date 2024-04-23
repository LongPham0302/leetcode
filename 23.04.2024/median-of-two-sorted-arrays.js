function customRound(number) {
    if (number - Math.floor(number) === 0.5) {
        return number;
    } else {
        return Math.round(number);
    }
}
var findMedianSortedArrays = function(nums1, nums2) {
    for(let i=0;i<nums2.length;i++){
  nums1.push(nums2[i])
}

for(let i=0;i<nums1.length;i++){
  for(let j=i;j<nums1.length;j++){
    if(nums1[i]>nums1[j]){
      let tmp=nums1[i];
      nums1[i]=nums1[j];
      nums1[j]=tmp;
    }
  }
}
let x;

let sum=0,dem=0;
if(nums1.length<=2){
    for(let i=0;i<nums1.length;i++){
        sum+=nums1[i];
        dem++;
    }
    x=sum/dem;
}
else{
  for(let i=1;i<nums1.length-1;i++){
  sum+=nums1[i];
  dem++;
}
 x=sum/dem;
}

z=customRound(x).toFixed(5)
return z;

};
var nums1=[4,5,6,8,9]
var nums2=[]
findMedianSortedArrays(nums1,nums2)