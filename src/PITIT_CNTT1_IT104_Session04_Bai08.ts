interface Product {
    readonly id: string;
    name: string;
    price: number;
}

interface OrderItem {
    product: Product;
    quantity: number;
}

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
}

const calculateOrderTotal = (order: Order): number => {
    let { items } = order;
    let total = 0;
    items.forEach(item => {
        total += (item.product.price * item.quantity);
    });
    return total;
}

const printOrder = (order: Order): void => {
    console.log("Đơn hàng: ", order.orderId);
    console.log("Khách hàng: ", order.customerName);
    console.log("Sản phẩm: ");
    order.items.forEach(item => {
        console.log(`- ${item.product.name} x ${item.quantity} = ${(item.product.price * item.quantity).toLocaleString()}`);
    });
    console.log(`Tổng cộng: ${calculateOrderTotal(order).toLocaleString()}`);
    if (order.note !== undefined) {
        console.log(`Ghi chú: ${order.note}`);
    }
}

const orders: Order[] = [
    {
        orderId: "ORD1",
        customerName: "Nguyễn Văn A",
        items: [
            {
                product: {
                    id: "Sp1",
                    name: "Áo khoác",
                    price: 125000,
                },
                quantity: 12,
            },
            {
                product: {
                    id: "Sp2",
                    name: "quần",
                    price: 120000,
                },
                quantity: 2,
            },
            {
                product: {
                    id: "Sp3",
                    name: "Bánh mì",
                    price: 12000,
                },
                quantity: 10,
            },
        ],
        note: "Giao trước 10h"
    },
    {
        orderId: "ORD2",
        customerName: "Nguyễn Văn A",
        items: [
            {
                product: {
                    id: "Sp8",
                    name: "Áo mưa",
                    price: 120000,
                },
                quantity: 5,
            },
            {
                product: {
                    id: "Sp9",
                    name: "Bánh gaoh",
                    price: 5000,
                },
                quantity: 10,
            },
        ],
        note: "Giao hỏa tốc"
    }
]

orders.forEach(order => {
    printOrder(order);
});
