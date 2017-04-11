if (Deals.find().count() === 0) {
    Deals.insert({
        owner: "Ryan Basch",
        name: "My first Deal",
        amount: 10000,
        close_date: "04/15/2017",
        type: "HR | One"
    });
}
