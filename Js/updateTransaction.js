//Write a function updateTransaction() to update all the 5 properties of the object transaction.

let transaction = {
    id: "12",
    date: "18-01-2023",
    amount: 200,
    status: "Open",
    customer: "SBI"
};

function updateTransaction(id, date, amount, status, customer) {
    transaction.id = id;
    transaction.date = date;
    transaction.amount = amount;
    transaction.status = status;
    transaction.customer = customer;
}

updateTransaction("tx001", "18-01-2023", 100, "Success", "Ram Gawas");
console.log(transaction);