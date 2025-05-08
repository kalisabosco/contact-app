const express = require('express');
const require = require('express/lib/request');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Home Page');
});
const properties = [
    { id: 1, name: 'izuba hotel', address: 'Musanze-Rwanda', property_type: 'Commercial', description: 'for rent', number_of_unit: '23120' },
    { id: 2, name: '3 star hotel', address: 'Nyagatare-Rwanda', property_type: 'Commercial', description: 'for rent', number_of_unit: '09456' },
    { id: 3, name: ' ceohotel', address: 'kamony-Rwanda', property_type: 'Apartment', description: 'for rent', number_of_unit: '34902' },
    { id: 4, name: 'mubuga house', address: 'Muhanga-Rwanda', property_type: 'House', description: 'for sale', number_of_unit: '34903' },
    { id: 5, name: 'new york house ', address: 'Kigali-Rwanda', property_type: 'Apartment', description: 'for rent', number_of_unit: '33474' },
    { id: 6, name: 'local house', address: 'Kigali-Rwanda', property_type: 'House', description: 'for rent', number_of_unit: '34905' },
    { id: 7, name: 'selena hotel ', addess: 'Kigali-Rwanda', property_type: 'House', description: 'for sale', number_of_unit: '34900' },
    { id: 8, name: 'Clement Motel', address: 'Rutsiro-Rwanda', property_type: 'Apartment', description: 'for rent', number_of_unit: '349036' },
    { id: 9, name: 'muhabura mountin', address: 'musanze-Rwanda', property_type: 'Apartment', description: 'for rent', number_of_unit: '34933' },
    { id: 10, name: 'CHIC', address: 'Kigali-Rwanda', property_type: 'Commercial', description: 'for rent', number_of_unit: '34998' },
];



const unit=[
    {
        id:1,
        property:'Goico',
        unit_number:'3442',
        bedrooms:'2',
        bathrooms:'1',
        rent:'$344',
        is_available:'True'
    },
    {
        id:2,
        property:'5 star hotel',
        unit_number:'4561',
        bedrooms:'1',
        bathrooms:'1',
        rent:'$730',
        is_available:'False'
    },
    {
        id:'3',
        property:'Fatima hotel',
        unit_number:'1209',
        bedrooms:'1',
        bathrooms:'1',
        rent:'$90',
        is_available:'True'
    },
    {
        id:'4',
        property:'Kinini house',
        unit_number:'8760',
        bedrooms:'5',
        bathrooms:'3',
        sell:'$1.3million',
        is_available:'True'
    },
    {
        id:'5',
        property:'City Plazer',
        unit_number:'2387',
        bedrooms:'5',
        bathrooms:'3',
        sell:'$390',
        is_available:'True'
    },
    {
        id:'6',
        property:'Global house',
        unit_number:'7462',
        bedrooms:'6',
        bathrooms:'3',
        sell:'$540',
        is_available:'True'
    },
    {
        id:'7',
        property:'WAP',
        unit_number:'7912',
        bedrooms:'4',
        bathrooms:'1',
        sell:'$124',
        is_available:'True'
    },
    {
        id:'8',
        property:'Clement Motel',
        unit_number:'3012',
        bedrooms:'3',
        bathrooms:'2',
        sell:'$97',
        is_available:'True'
    },
    {
        id:'9',
        property:'Green Mountain',
        unit_number:'3212',
        bedrooms:'5',
        bathrooms:'2',
        sell:'$230',
        is_available:'True'
    },
    {
        id:'10',
        property:'CHIC',
        unit_number:'1762',
        bedrooms:'4',
        bathrooms:'2',
        sell:'$120',
        is_available:'True'
    }
];

const Tenants=[
    {
        id:1,name:'kuyytt Emmanuel',email:'ema7@gmail.com',property:'Goico', phone:'+250796200787' 
    },
    {
        id:2,name:'umutoni',email:'hard@gmail.com',property:'5 star hotel' ,phone:'+250793512212'   
    },
    {
        id:3,name:'emmeranne',email:'pmana129@gmail.com',property:'Fatima hotel',phone:+250788888888
    },
    {
         id:4,name:'pacy',email:'bona762@gmail.com',property:'Kinini house',phone:'079465528'
    },
    {
        id:5,name:'Cuyt',email:'emiza62@gmail.com',property:'City Plazer',phone:'079123098'
   },
   {
    id:6,name:'uytre',email:'divineuwimana001@gmail.com',property:'Global house',phone:'078923432'
},
{
    id:7,name:'uiyutgfdf',email:'jeankwizera002@gmail.com',property:'WAP',phone:'072309874'
},
{
    id:8,name:'ujhytrre',email:'tuyikundepatrick098@gmail.com',property:'Clement Motel',phone:'079478791'
},
{
    id:9,name:' Fred',email:'mugishafred789@gmail.com',property:'Green Mountain',phone:'079787876'
},
{
    id:10,name:'Uwitonze esert',email:'vedasteuwitonze346@gmail.com',property:'CHICK',phone:'07976456345'
}

];

const lease=[
    {
        id:'1',
        Tenants:'ikirezi',
        unit:'3442',
        start_date:'03/07/2025',
        end_date:'03/08/2025',
        rent_amount:'$473'
    },
    {
        id:'2',
        Tenants:'umuytfd',
        unit:'4561',
        start_date:'29/07/2025',
        end_date:'29/08/2025',
        rent_amount:'$730'
    },
    {
        id:'3',
        Tenants:'yyhhgffdd',
        unit:'1209',
        start_date:'11/07/2025',
        end_date:'11/08/2025',
        rent_amount:'$90'
    },
    {
        id:'4',
        Tenants:'umutoni',
        unit:'8760',
        start_date:'12/07/2025',
        end_date:'12/08/2025',
        rent_amount:'$1.3million'
    },
    {
        id:'5',
        Tenants:'yvonne',
        unit:'2387',
        start_date:'30/07/2025',
        end_date:'30/08/2025',
        rent_amount:'390'
    },
    {
        id:'6',
        Tenants:' Divine',
        unit:'7462',
        start_date:'21/07/2025',
        end_date:'21/08/2025',
        rent_amount:'$540'
    },
    {
        id:'7',
        Tenants:'iribagz jean',
        unit:'7912',
        start_date:'17/07/2025',
        end_date:'17/08/2025',
        rent_amount:'$124'
    },
    {
        id:'8',
        Tenants:'trick',
        unit:'3012',
        start_date:'28/07/2025',
        end_date:'28/08/2025',
        rent_amount:'$97'
    },
    {
        id:'9',
        Tenants:'red',
        unit:'3212',
        start_date:'09/07/2025',
        end_date:'09/08/2025',
        rent_amount:'$230'
    },
    {
        id:'10',
        Tenants:' Frank',
        unit:'1762',
        start_date:'4/07/2025',
        end_date:'4/08/2025',
        rent_amount:'$120'
    }
];


app.get('/api/unit',(req,res)=>{
    res.send(unit)
});
app.get('/api/lease',(req,res)=>{
    res.send(lease)
});
app.get('/api/Tenants',(req,res)=>{
    res.send(Tenants)
});

app.get('/api/property/', (req, res) => {
    res.json(properties);
});

           

app.get('/api/property/:id', (req, res) => {
    const propertyId = parseInt(req.params.id);
    const property = properties.find(p => p.id === propertyId);

    if (!property) { 
        return res.status(404).json({ message: "Property with the given ID not found" });
    }
    res.json(property);
});


app.get('/api/Tenants/:id', (req, res) => {
    const TenantsId = parseInt(req.params.id);
    const Tenants = Tenanties.find(p => p.id === TenantsIdId);

    if (!Tenants) { 
        return res.status(404).json({ message: "Tenants with the given ID not found" });
    }
    res.json(Tenants);
});

app.post('/api/property', (req, res) => {
    const newProperty = req.body;

    if (!newProperty.id || !newProperty.name || !newProperty.address) {
        return res.status(400).json({ message: "ID, name, and address are required" });
    }

    properties.push(newProperty);
    res.status(201).json(newProperty);
    console.log("New Property Added:", newProperty);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

/*
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required!" });
    }

    res.json({ message: "Data received successfully!", data: { name, email } });
});
*/