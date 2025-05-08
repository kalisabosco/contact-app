const express = require('express');
const app = express();
app.get('/',(req,res) =>{
    res.send('property')
});
const property = [
    {
        id:1,name:'hirwa',
        adddress:'kigali',
        property_type:'hotel',
        description:'booking',
        number_of_unit:'90',
    },
    {
        id:2,
        name:'smith',
        address:'muhanga',
        property_type:'accomodition',
        description:'booking',
        number_of_unit:'80',
    },
    {
        id:3,
        name:'mutoni',
        adresss:'musanze',
        property_type:'school',
        description:'booking',
        number_of_unit:'70',

    },
    
    {
        id:4,
        name:'emmerance',
        adress:'nyanza',
        property_type:'restor',
        description:'booking',
        number_of_unit:'60',

    },
    {
        id:5,
        name:'summy',
        adress:'nyamagabe',
        property_type:'apartment',
        description:'booking',
        number_of_unit:'50',
    },
    {
        id:6,name:'ruth', adress:'nyarubuye',property_type:'house',description:'booking',number_of_unit:'40',
    },
    {
        id:7, name:'martha',adress:'remera',property_type:'commercial',number_of_unit:'30',number_of_unit:'30',   
    },
    {
     id:8,name:'kellia',adress:'muhanga',property_type:'akabare',description:'booking',number_of_unit:'20',
    },
    {
        id:9,name:'izere',adress:'nyarugenge',property_type:'hotel',description:'booking',number_of_unit:'10',    
    },
    {
     id:10,name:'patience',adress:'gashake',escription:'booking', number_of_unit:'100',property_type:'izuba hotel',
    }
];

 app.get('/api/property',(req,res) =>{
    res.send(property)
});

const unit = [
     {
        propety:'house',unit_number:'23',bedroom:'available',rent:'$450',bathroom:'available',  
     },
     {
    property:'school',unit_number:'46',bedroom:'available',rent:'$677', bathroom:'available',
     },
     {
        propety:'ruhondo beach',unit_number:'46',bedroom:'available',rent:'$6750',bathroom:'available',  
     },
     {
        propety:'SERENA hotel',unit_number:'66',bedroom:'available',rent:'$7750',bathroom:'available',
           
    
     },
     {
        propety:'credo hotel',unit_number:'76',bedroom:'available',rent:'$8850',bathroom:'available',
         
     },
     {
        propety:'ONE AND  ONLY HOTEL',unit_number:'67',bedroom:'available',rent:'$9950',bathroom:'available',
        
     },
     {
        propety:'CEP HOTEL',unit_number:'97',bedroom:'available',rent:'$2250',bathroom:'available',
     },
     {
        property:'ceo hotel',unit_number:'87',bedroom:'available',rent:'$8679',bathroom:'available',
     },
     {
        property:'kivu beach',unit_number:'76',bedroom:'available',rent:'$9087',bathroom:'available',
     },
     {
       property:'convertion',unit_number:'98',bedroom:'available',rent:'$3456',bathroom:'available', 
     },
];
 app.get('/api/unit',(req,res) => {
     res.send(unit)
 });
 const ternant = [
    {
        name:'marcy',phone:'074451884',email:'alphonsineumutoni@483gmail.com',adress:'musanze',
    },
    {
        name:'mutoni',phone:'0793044086',email:'jhony@66gmali.com',adress:'muhanga',

    },
{
    name:'kity',phone:'0793644086',email:'kity@66gmali.com',adress:'rubavu',

},
{
    name:'numyi',phone:'0793088086',email:'numyi@66gmali.com',adress:'nyaruguru',

},
{
    name:'hyty',phone:'0793040086',email:'hyty@66gmali.com',adress:'kigali',

},
{
    name:'mutoni',phone:'0793044086',email:'jhony@66gmali.com',adress:'nyanza',

},
{
    
    name:'erst',phone:'0793564086',email:'erst@66gmali.com',adress:'kirehe',

},
{
    name:'hyny',phone:'0793994086',email:'hyny@66gmali.com',adress:'karongi',

},
{
    name:'elie',phone:'087664508',email:'elie@987gmail.com',adress:'nyamagabe',
},
];



app.get('/api/property',(req,res) => {
    res.send(property)
});

 
 const lease = [
    {
      
      unit_number:'10',phone:'0797654234',start_date:'18/10/2025',end_date:'25/10/2025', rent_amount:'$567',
    },
    {
        name:'kenia',unit_numbe:'98',phone:'70987654',start_date:'9/2/2025',end_date:'10/2/2025',rent_amount:'$568',
    
    },
    {
        name:'mesia',unit_numbe:'65',phone:'078654322',start_date:'7/8/2025',end_date:'10/8/2025',rent_amount:'$563',
    },
    {
        name:'mubi',unit_numbe:'87',phone:'078665433',start_date:'4/5/2025',rent_amount:'$8765',
    },
    
    app.get('/api/lease',(req,res) => {
        res.send(lease)
    }),

 ];
 app.listen(30001,() => { 
     console.log('is running on 1000')
 }); 