const express = require('express');

const app = express();

app.get('/api/customers', (req,res)=>{
 const customers = [
    {id: 1,
    firtName: 'Wilber',
    lastName: 'Pulido'
    },
    {id: 2,
        firtName: 'Gabriel',
        lastName: 'Rodriguezzz'
        },
    {id: 3,
    firtName: 'Lisseth',
    lastName: 'Machado'
    }
 ];
 res.json(customers);



});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));