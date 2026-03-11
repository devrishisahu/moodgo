const getTickets = async(req,res)=>{
    res.send('Your Tickets !.')
}

const getTicket = async(req,res)=>{
    res.send('Your Ticket !.')
}

const bookTicket = async(req,res)=>{


    





    res.send('Ticket Booked !.')
}

const cancelTicket = async (req ,res) =>{
    res.send('Ticket Cancelled !.')
}

const orderController = {  bookTicket , cancelTicket , getTickets , getTicket}


export default orderController