//Create a Javascript application :
//Below are two list of User

let List1=['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Pune', 'Kolkata']
let List2=['Gujarat', 'Pune', 'Rajasthan', 'Bangalore', 'Vizag', 'Delhi']


/*Question-1
a. Get a unique set of users from List1 which are not in List2*/
//OUTPUT-1
let finalList1NotInList2=new Array();
finalList1NotInList2=List1.filter(user => !List2.includes(user)); // Check if the element does not exist in List2.If not found,add it to `finalList1NotInList2.
/*Question-2
b. Get a unique set of users from List2 which are not in List1*/
//OUTPUT-2
let finalList2NotInList1=new Array();
finalList2NotInList1=List2.filter(user => !List1.includes(user));//Check if the element does not exist in List1.If not found

/*Question-3
 Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)*/
//OUTPUT-3
let finalList2IntersectionList1=new Array();
finalList2IntersectionList1=List1.filter(user => List2.includes(user));//Check if the element exist in List1.If found,add it to `finalList2IntersectionList1` 

console.log(finalList1NotInList2);
console.log(finalList2NotInList1);
console.log(finalList2IntersectionList1);