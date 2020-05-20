# dev-challenge
MEGA Comfort dev challenge

This is a React app. 

How to deployed the app? 
run `npm start `  on the app and go to specific URL which is `/sales/form` and `/sales/report` 


Details of each page 
---------------------

/sales/form --> has the form that allow the cashier to enter their sales in to the form  

The form consists of a few input : 

    1. First Name  

    2. Last Name  

    3. Position   

    4. Comission Percentage 

    5. Date of sales   

    6. Items List with title and price   

    7. Item Quantity   

The form will submited to the local storage with a key call "salesPerson" and all of the data will be store it in json format 

--------------------------------------------------------

/sales/report --> this allow them to keep track of their sales and commission  

This page consists of 2 part:    

    A. a Key in form to set constraint search for a specfic report   

    B. a table (report) will be render based on the constraint that the salesperson / manager key in   

A. Form consists of a few input:  

    i.   Name ( First Name , Last Name ) 

    ii.  Start Date picker   

    iii. End Data picker  

B. The Table will shown as requested (but currently it is not working yet)

--------------------------------------------------------
A few non-working requirement( But will keep on work on it on the free time )

This is my first react app. There are a few ideas that I am planing to work with even it is not working as the challenge requested. 

These are a few items that I would like to keep working even I cannot finish by the deadline: 

1. store multiple form input to the local storage and able to used the local storage data to render out a proper table.

2. vaidation feature for the input form with formik and bootstrap 

3. render the table when after clicking the submit button. 


  



