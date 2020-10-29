# MongoDB Products and Manufacturers

This is an API for Creating, Reading, Updating, and Deleting
'Products / Mainufacturers' using Node and Express and MongoDB.


## Install

    npm install

## Run the app

    npm start


# Products Endpoints

The Endpoints for CRUD is described below.

## Return all products

### Request
    GET /products

#### Response

```json
[
    {
        "name": "Milk",
        "category": "food",
        "price": 4.99,
        "quantity": 30
    },

    {
        "name": "Jacket",
        "category": "shopping",
        "price": 15.50,
        "quantity": 23
    }
]
```

## Return specific Product

### Request
    GET /products/:id

#### Response

```json
{
    "id": "4312b117-2a4d-4059-b341-70b0ada893bb",
    "name": "jacket",
    "category": "clothing",
    "price": 15.50,
    "quantity": 23
}
```

## Create new product

### Request
    Post /products

```json
{
    "name": "tv",
    "category": "electronics",
    "price": 31.30,
    "quantity": 50
}
```
    
#### Response

```json
{
    "name":"tv",
    "category":"electronics",
    "price": 31.30,
    "quantity": 50
}
```

## Update Products

### Request
    Patch /products/:id

```json
{
    "name": "television",
    "price": 35.99
}
```
    
#### Response

```json
{
    "name": "television",
    "category": "electronics",
    "price": 35.99,
    "quantity": 30
}
```

## Delete Products

### Request
    Delete /products/:id

    
#### Response

[Item that was deleted]


## Get products by manufacturer

### Request
    GET /products/productsByManufacturer/:manufacturerID

```
    http://localhost:3000/products/productsByManufacturer/5f8e620a39664a4b45804319
```
    
#### Response

```json
[
    {
        "_id": "5f9ac3455f8d2566fc6d2c1c",
        "name": "shirt",
        "category": "clothing",
        "price": 15,
        "quantity": 25,
        "manufacturer": "5f8e620a39664a4b45804319",
        "__v": 0
    },
    {
        "_id": "5f9ac3545f8d2566fc6d2c1d",
        "name": "pants",
        "category": "clothing",
        "price": 30,
        "quantity": 50,
        "manufacturer": "5f8e620a39664a4b45804319",
        "__v": 0
    }
]
```


# Manufacturers Endpoints


## Return all manufacturers

### Request
    GET /manufacturer

#### Response

```json
[
    {
        "name": "walmart",
        "address": "cirle lane orem",
        "phone": "555-755-8555",
    },

    {
        "name": "target",
        "address": "happy ave",
        "phone": "555-755-3232",
    }
]
```

## Return specific Manufacturer

### Request
    GET /manufacturer/:id

#### Response

```json
{
    "id": "4312b117-2a4d-4059-b341-70b0ada893bb",
    "name": "target",
    "address": "happy ave",
    "phone": "555-755-3232",
}
```

## Create new Manufacturer

### Request
    Post /manufacturer

```json
{
    "name": "target",
    "address": "happy ave",
    "phone": "555-755-3232",
}
```
    
#### Response

```json
{
    "name": "target",
    "address": "happy ave",
    "phone": "555-755-3232",
}
```

## Update Manufacturers

### Request
    Patch /manufacturer/:id

```json
{
    "name": "Maceys",
    "phone": "801-555-2020"
}
```
    
#### Response

```json
{
    "name": "Maceys",
    "address": "happy ave",
    "phone": "801-555-2020",
}
```

## Delete Manufacturers

### Request
    Delete /manufacturer/:id

    
#### Response

[Item that was deleted]