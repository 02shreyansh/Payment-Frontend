import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import Card from './Cards'
const Home = () => {
    const checkoutHandler=async(amount)=>{
        const response =await fetch('https://backend-mgr5.onrender.com/api/checkout',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({amount}),
        })
        const {order}=await response.json();
        const key=import.meta.env.VITE_KEY_ID;
        const options = {
            key,
            amount: order.amount, 
            currency: "INR",
            name: "Home Tutions",
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/137887705?v=4",
            order_id: order.id, 
            callback_url: "https://backend-mgr5.onrender.com/api/paymentSuccess",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#000"
            }
        };
        var razor = new window.Razorpay(options)
        razor.open();
    }
  return (
    <Box>
        <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"} direction={["column","row"]}>
            <Card amount={5000} img={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"} checkoutHandler={checkoutHandler} />
            <Card amount={3000} img={"https://rukminim2.flixcart.com/image/850/1000/xif0q/dslr-camera/n/p/t/eos-r50-24-2-r50-canon-original-imagngc7syac8pfd.jpeg?q=90&crop=false"} checkoutHandler={checkoutHandler} />
        </Stack>
    </Box>
  )
}

export default Home
