// Interview Questions.

let a=-1;
++a || ++a || ++a;
console.log(a)




let n=24
let l=0, r=100, ans=n;
while(l<=r){
    let mid=Math.floor((l+r)/2);
    if(mid*mid<=n){
        ans=mid;
        l=mid+1;

    }
    else{
        r=mid-1
    }
    
}
console.log(ans)

