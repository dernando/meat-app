class Order {
    constructor(
        public address: string,
        public number: number,
        public OptionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = []
    ){}
}

class OrderItem {
    constructor(public quantity, public menuId: string){}
}

export {Order, OrderItem}