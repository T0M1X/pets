let booked = [
  {
    sitterId: "123456",
    ownerId:"187",
    id: "DGHRT4",
    title: "Booking 1",
    start: "2022-03-05 10:30:00",
    end: "2022-03-05T13:30:00",
    name: "brandonhicks",
    Address: "60 Main Road, London, SE25 8LQ",
    Number: "07788 910431",
    typeBooking: "Sitting",
    typePet: ["StarFish"],
    amount: 1,
    other: "Give medication every 2 hours ",
    Payment: 11.5,
    accepted: "Not Booked",
  },
  {
    sitterId: "21313",
    ownerId:"187",
    id: "124FG5",
    title: "Booking 2",
    start: "2022-03-29 09:30:00",
    end: "2022-03-29 21:30:00",
    name: "yelenalane",
    Address: "60 Main Road, London, SE25 8LQ",
    Number: "07721 124541",
    typeBooking: "Sitting",
    typePet: ["Lynx Cat"],
    amount: 1,
    other: "Give medication every 2 hours ",
    Payment: 88.12,
    accepted: "Not Booked",
  },
  {
    sitterId: "99313",
    ownerId:"187",
    id: "1A1SF3",
    title: "Booking 3",
    start: "2022-04-01T14:30:00",
    end: "2022-04-01T17:30:00",
    name: "carolynmoorer",
    Address: "60 Main Road, London, SE25 8LQ",
    Number: "07700 900471",
    typeBooking: "Sitting",
    typePet: ["French bull dog", "Goldfish"],
    amount: 2,
    other: "Give medication every 2 hours ",
    Payment: 30.53,
    accepted: "Booked",
  },
  {
    sitterId: "12A313",
    ownerId:"187",
    id: "2A2DGGY",
    title: "Booking 4",
    start: "2022-04-01 12:30:00",
    end: "2022-04-01T13:30:00",
    name: "benniebailey",
    Address: "60 Main Road, London, SE25 8LQ",
    Number: "07720 81471",
    typeBooking: "Sitting",
    typePet: ["Golden Retriever", "rabbit"],
    amount: 2,
    other: "Give medication every 2 hours ",
    Payment: 20.21,
    accepted: "Booked",
  },
  {
    sitterId: "45215",
    ownerId:"187",
    id: "1DSGF3",
    title: "Booking 5",
    start: "2022-04-17 10:30:00",
    end: "2022-04-17T11:30:00",
    name: "johnweeks",
    Address: "60 Main Road, London, SE25 8LQ",
    Number: "07703 821421",
    typeBooking: "Walking",
    typePet: [
      "Elephant",
      "Giraffe",
      "French iguana",
      "rattlesnake",
      "Transformer",
    ],
    amount: 4,
    other: "Give medication every 2 hours ",
    Payment: 125.12,
    accepted: "Booked",
  },
  {
    sitterId: "45215",
    ownerId:"187",
    id: "A72NGS",
    title: "Booking 6",
    start: "2022-04-15 12:00:00",
    end: "2022-04-16T11:30:00",
    name: "johnweeks",
    Address: "60 Main Road, London, SE25 8LQ",
    Number: "07703 821421",
    typeBooking: "Sitting",
    typePet: ["Hamster"],
    amount: 1,
    other: "Give medication every 2 hours ",
    Payment: 252.12,
    accepted: "Booked",
  },
];

class BookingMethods {
  static GetBookingById(id) {
    return booked.filter((b) => b.id == id)[0];
  }

  static GetBookingBySitterId(sitterID) {
    return booked.filter((b) => b.sitterId == sitterID)[0];
  }

  static AddBooking(b) {
    booked.push(b);
}

  static GetLength(){
    return booked.length;
  }

  static acceptBookingById(id) {
    booked.forEach((booking, index) => {
      if (booking.id === id) {
          booked[index].accepted = "Booked"
      }
    })

    console.log('updated bookings:');
    console.log(booked)
  }

  static declineBookingById(id) {
    booked.forEach((booking, index) => {
      if (booking.id === id) {
          booked[index].accepted = "Not Booked"
      }
    })

    console.log('updated bookings:');
    console.log(booked)
  }
}

export { booked, BookingMethods };
