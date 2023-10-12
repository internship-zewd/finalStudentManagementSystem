
export const accountantSidebar = [
    {
        name:"Dashboard", 
        iconClassName:"uil uil-estate",
        to:"/"
    },
    {
        name:"Financial Report", 
        to:"", 
        iconClassName:"uil uil-graduation-cap", 
        subMenus:[
            {
              name:"Deposit", to:"/Accountant/Deposit"
            },
            {
             name:"Payment", to:"/Accountant/Payment"
            }
        ]
    },
]