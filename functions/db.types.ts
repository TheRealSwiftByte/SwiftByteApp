export enum MenuItemType {
    PIZZA = "pizza",
    DRINK = "drink",
    DESSERT = "dessert"
}

export interface MenuItem {
    id: string;
    type: MenuItemType;
    name: string;
    price: number;
    description: string;
    image: string;
    available: boolean;
}

export enum VenueType {
    RESTAURANT = "restaurant",
    BAR = "bar",
    CAFE = "cafe"
}

export interface Venue {
    id: string;
    type: VenueType;
    name: string;
    address: string;
    phone: string;
    averageRating: number;
    averageWaitTime: number;
    menu: MenuItem[];
}

export interface Order {
    id: string;
    customer: User;
    venue: Venue;
    items: MenuItem[];
    status: "pending"|"accepted"|"declined"|"completed";
    netTotal: number;
    promoCode: string;
    discount: number;
    createdAt: string;
    updatedAt: string;
    payment:Payment
}

export interface Payment{
    id:string
    amount:number
    type:"card"|"paypal"
    last4Digits?:string
    createdAt:string
    updatedAt:string
}

export interface Review{
    id:string
    author:Customer
    rating:number
    comment:string
    createdAt:string
}

export interface Cart {
    id: string
    venue: Venue
    items: MenuItem[]
    promoCode: string
    netTotal: number
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface Customer extends User {
    cart: Cart
}

export interface Driver extends User {
    vehicle: string;
    licensePlate: string;
}