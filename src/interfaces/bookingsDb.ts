export interface Bookings {
    idBooking: number;
    guest: string;
    order_date: Date;
    check_in: Date;
    check_out: Date;
    special_request: string;
    room_type: string;
    status: number; 
    img: string
}