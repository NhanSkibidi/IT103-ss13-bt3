function calculateBaggageSurcharge(ticket, baggageList) {
    let totalWeight = 0;
    let specialFee = 0;
    for (let i = 0; i < baggageList.length; i++) {
        totalWeight += baggageList[i].weight;

        if (baggageList[i].type === "BULKY") {
            specialFee += 200000;
        } else if (baggageList[i].type === "PET") {
            specialFee += 500000;
        }
    }
    let freeWeight = ticket.ticketClass === "BUSINESS" ? 30 : 20;
    if (ticket.loyaltyTier === "TITAN") {
        freeWeight += 10;
    }
    let excessWeight = Math.max(0, totalWeight - freeWeight);
    let excessFee = 0;
    if (excessWeight <= 5) {
        excessFee = excessWeight * 60000;
    } else {
        excessFee = 5 * 60000 + (excessWeight - 5) * 80000;
    }
    let totalFee = excessFee + specialFee;
    console.log("\n========================================");
    console.log("         BAGGAGE PAYMENT RECEIPT");
    console.log("========================================");
    console.log(`Passenger     : ${ticket.passengerName}`);
    console.log(`Ticket class  : ${ticket.ticketClass}`);
    console.log(`Loyalty tier  : ${ticket.loyaltyTier}`);
    console.log(`Total weight  : ${String(totalWeight).padStart(5)} kg`);
    console.log(`Free weight   : ${String(freeWeight).padStart(5)} kg`);
    console.log(`Excess weight : ${String(excessWeight).padStart(5)} kg`);
    console.log("----------------------------------------");
    console.log(`Excess fee    : ${excessFee.toLocaleString("vi-VN")} VND`);
    console.log(`Special fee   : ${specialFee.toLocaleString("vi-VN")} VND`);
    console.log("----------------------------------------");
    console.log(`TOTAL         : ${totalFee.toLocaleString("vi-VN")} VND`);
    console.log("========================================");

    return totalFee;
}

const ticket = {
    passengerName: "Nguyen Van An",
    ticketClass: "ECONOMY",
    loyaltyTier: "TITAN"
};

const baggageList = [
    { name: "Vali", weight: 20, type: "NORMAL" },
    { name: "Gậy golf", weight: 8, type: "BULKY" },
    { name: "Lồng thú cưng", weight: 2, type: "PET" }
];
calculateBaggageSurcharge(ticket, baggageList);