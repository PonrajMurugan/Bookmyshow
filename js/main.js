
export const findUser = "FINDUSER";

export function hello(){
    console.log("Hello function")
}

export default class Movie {
    static users = 0;
    constructor(name, price, rating){
        this.movieName = name;
        this.price = price;
        this.rating = rating;
        this.bookedSeats = [];
        Movie.users++;
    }
    
    seatBooking(data){
        this.bookedSeats.push(data);
    }

}
