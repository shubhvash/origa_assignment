# origa_assignment

∙ Consider following user and order collection in mongo db: 

User Collection 
userId name
1 Rahul
2 Ramesh
3 Ankita


Order Collection
orderId userId subtotal date
1 1 500 23 January 2019
2 2 400 16 March 2019
3 1 150 20 March 2019
4 1 700 25 March 2019
5 3 200 21 Feb 2019
6 3 1500 22 Feb 2019
7 1 1200 16 April 2019
8 2 1600 1 May 2019
9 2 900 23 May 2019
10 1 700 13 April 2019


a. Write an API which returns total no of orders placed and average bill subtotal,  user wise. Response should be array of user as follows: 
[{ userId : 1, name : “Rahul”, noOfOrders: 5, averageBillValue : 650}, 
{userId : 2, name : “Ramesh”, noOfOrders : 3, averageBillValue :966 }, 
{userId: 3, name : “Ankita”, noOfOrders : 2, averageBillValue : 850}] 
b. A new key is created in user table (noOfOrders) with default value 0, write an API  to update it, with its correct value for all users respectively. After calling your API  the new User table will be as follows: 
User Id Name No. Of Orders
1 Rahul 5
2 Ramesh 3
3 Ankita 2


Response of the API should be: {success: true, message : “Successfully updated”}
