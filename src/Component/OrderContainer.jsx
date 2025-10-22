import React, { use, useState } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCards';
import CookingCard from './Cards/CookingCards';
import ServeCard from './Cards/ServeCard';
import { toast } from 'react-toastify';

const OrderContainer = ({ordersPromise}) => {

    const data = use(ordersPromise);
    // console.log(orders);
    const [orders, setOrders] = useState(data);


    const [cookingItems, setCookingItems] = useState([])
    const [readyItems, setReadyItems] = useState([])

    const handleOrder = (order) => {
        // console.log(order);
        // toast.success("Order Placed Successfully")

        // at first, we need to check if the order is already in the cookingItems array
        const isExist = cookingItems.find((item) => item.id === order.id);

        if(isExist) {
            toast.error("Order already on processing...!");
            return;
        }

        // put the clicked order in the cookingItems array

        // setCookingItems([...cookingItems, order]);
        const newCookingItems =  [...cookingItems, order];
        setCookingItems(newCookingItems); 

        
    }
    // console.log(cookingItems);

    const handleCooking = (order) => {
        order.cookedAt = new Date().toLocaleTimeString();
        //1. put orders into readyItems array
        const newReadyItems = [...readyItems, order];
        setReadyItems(newReadyItems);

        //2. remove the order from cookingItems array
        const remaining = cookingItems.filter((item) => item.id !== order.id);
        setCookingItems(remaining);

        //3. remove the order from orders array
        const remainingOrders = orders.filter((item) => item.id !== order.id);
        setOrders(remainingOrders);

    }
    


    return (
        <div>
            <States 
                cookingTotal={cookingItems.length} 
                orderTotal={orders.length}
                readyTotal={readyItems.length}
                >
            </States>
            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
            <div className="col-span-1 lg:col-span-7">
                <h2 className='text-4xl font-bold'>Current Orders</h2>
                <div className='space-y-5'>
                    {
                        orders.map(order => 
                        <OrderCard handleOrder={handleOrder} key={order.id} order={order}></OrderCard>
                        )
                    }
                </div>
            </div>
            <div className="col-span-1 lg:col-span-5 space-y-5">
                <h2 className='text-4xl font-bold'>Cooking Now </h2>
                <div className='shadow p-10 space-y-5'>
                    {cookingItems.map(order => 
                    <CookingCard 
                        handleCooking={handleCooking} 
                        key={order.id} 
                        order={order} >

                    </CookingCard>)}
                </div>
                <h2 className='text-4xl font-bold'>Order Ready </h2>
                <div className='shadow p-10 space-y-5'>
                    {
                        readyItems.map((order) => 
                        <ServeCard 
                            key={order.id} order={order}>
                        </ServeCard> )
                    }
                </div>
            </div>
            </section>
        </div>
    );
};

export default OrderContainer;