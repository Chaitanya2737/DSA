class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}
class linkedlist {
    constructor(){
        this.head = null;
    }

    insertAtEnd(data){
        let ll =  new Node(data)
        if (this.head === null) {
            this.head = ll
            return
        }
        let temp  =  this.head;
        while (temp.next !== null) {
            temp = temp.next
        } 
       temp.next = ll
    }

    insertAtStart(data){
        let newNode = new Node(data); 
        newNode.next = this.head;   
        this.head = newNode; 
    }

    insertAt(position, data){
        let temp  =  this.head
        let newNode = new Node(data)
        for (let i = 0; i <position -1; i++) {
            temp= temp.next
        }
        newNode.next = temp.next
        temp.next = newNode
    }

    valueAt(position){
        let temp =  this.head;
        for (let i = 0; i < position; i++) {
           temp = temp.next
        }
        console.log(temp.data)
    }

    display(){
        if (this.head === null) {
          return
        }
        let temp = this.head;
        while (temp !== null) {
            console.log(temp)
            temp = temp.next
        }
    }
}

let list = new linkedlist();
list.insertAtEnd(10)
list.insertAtStart(6)
list.insertAtEnd(12)
list.insertAtEnd(14)
list.insertAtEnd(16)
list.insertAtEnd(18)
list.insertAtEnd(20)
list.insertAtStart(8)

list.insertAt(3 , 11)
list.valueAt(2)
list.display()