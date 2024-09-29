import React from 'react'
import {Box,VStack,Heading,Text} from "@chakra-ui/react"
import { useSearchParams } from 'react-router-dom'
const Payment = () => {
    const searchpara=useSearchParams()[0]
    const refNum=searchpara.get("reference") ||"123456789"
    return (
        <Box>
            <VStack h={"100vh"} justifyContent={"center"}>
                <Heading textTransform={"uppercase"}>Order Successful</Heading>
                <Text>
                   Reference No. :{refNum}
                </Text>
            </VStack>
        </Box>
    )
}

export default Payment