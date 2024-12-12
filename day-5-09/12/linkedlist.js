class Node {
    constructor(data) {
        this.data = data
        this.next =   null
    }
}

class linnkedlist{
    constructor(){
        this.head = null
    }
    
    add(data){
        let node =  new Node(data)
        node.next = this.head
        this.head = node
    }

    insertAtStart(data){
        let node =  new Node(data);
        node.next = this.head
        this.head = node
    }

    insertAtEnd(data){
        //  travels list until the null
        let node =  new Node(data)
        let temp  = this.head
        while (temp.next) {
            temp = temp.next
        }
        temp.next = node
    }

    insertAtPosition(p , data){
        let node =  new Node(data)
        let temp  =  this.head
        for (let i = 0; i < p; i++) {
            temp = temp.next
        }
        node.next = temp.next
        temp.next = node
    }


    removeAtFirst(){
        this.head = this.head.next
    }

    removeAtEnd(){
        let temp =  this.head
        while (temp.next.next != null) {
            temp= temp.next
        }
        temp.next = null
    }
    
    printlist(){
        let temp =  this.head;
        let i= 0
        while (temp) {
            console.log(temp.data , i++ )
            console.log("⬇️")
            temp = temp.next
        }
        console.log(null)
    }
}

let list =  new linnkedlist();
console.time("time")
list.add(10)
list.add(12)
list.add(14)
list.add(16)
list.add(18)
list.insertAtEnd(90)
list.insertAtPosition(2 , 30)
list.removeAtFirst()
list.removeAtEnd()


list.printlist()