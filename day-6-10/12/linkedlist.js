class Node {
    constructor(data ) {
        this.data = data
         this.next = null;
    }
}

class linkedlist {

    list(){
        let a =  new Node(1);
        let b =  new Node(4);
        let c =  new Node(2);
        let d =  new Node(6);
        let e =  new Node(2);
        a.next = b
        b.next = c
        c.next = e
        // console.log(a.next ,b.next , c.next ,  d.next , e.next)  we can not do this , we have better way to this
        let temp = a;
        // for (let i = 0; i < 4; i++) {
        //    console.log(temp)
        //    temp = temp.next
        // }

        // while(temp){
        //     console.log(temp);
        //     temp = temp.next
        // }

         // anther way that i like most 
         this.display(a)
     }

     display(head , length =0){
         let temp = head
        if (temp === null) return 
        console.log(temp , length)
        this.display(temp.next , length+1)
     }
}

let obj = new linkedlist();

obj.list()