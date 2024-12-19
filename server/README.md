# Backend-app

---

### Key Endpoints
1. **Submit FAQ**
   - **URL**: `/api/submit-faq`
   - **Method**: `POST`
   - **Description**: Send the Query to the api.
2. **Update FAQ**
   - **URL**: `/api/message`
   - **Method**: `POST`
   - **Description**: Provide the answer and visibilty value for the previously provided faq. 
3. **Fetch all FAQs with visibility true**
   - **URL**: `/api/message`
   - **Method**: `GET`
   - **Description**: API will fetch all faq's whose visibility is set to true in the form of a list.
4. **Submit Contact-Us Details**
   - **URL**: `/api/contactus`
   - **Method**: `POST`
   - **Description**: Send the name, email, phone number, country, message to the api.
5. **Submit Product Details**
   - **URL**: `/api/product`
   - **Method**: `POST`
   - **Description**: Send the name, title, stock, mrp, original_price, categories and images of product to the api.

---

## Example Usage

### Submit FAQ
**Endpoint**: `POST /api/submit-faq`
**Payload**:
```json
{
    "query": "What's the price of the item?",
}
```
**Response**:
```json
{
    "message": "FAQ submitted successfully"
}
```

### Update FAQ
**Endpoint**: `POST /api/message`
**Payload**:
```json
{
    "query": "What's the price of the item?",
    "answer": "It's $400 per piece.",
    "visibility": true
}
```
**Response**:
```json
{
    "message": "FAQ updated successfully"
}
```

### Fetch all FAQs with visibility true
**Endpoint**: `GET /api/message`
**Response**:
```json
{
    "faqs": [
        {
            "query": "What is Grip Chain Packtech",
            "answer": "Grip Chain Packtech is a smart packaging company"
        },
        {
            "query": "What services does Grip Chain Packtech offer?",
            "answer": "Grip Chain Packtech specializes in innovative and sustainable packaging solutions."
        },
        {
            "query": "Where is Grip Chain Packtech located?",
            "answer": "Grip Chain Packtech is headquartered in Mumbai, India."
        },
        {
            "query": "How can I contact Grip Chain Packtech?",
            "answer": "You can contact us via our website or customer service hotline."
        }
    ]
}
```

### Submit Contact-Us Details
**Endpoint**: `POST /api/contactus`
**Payload**:
```json
{
    "name": "ABC XYZ",
    "email": "abc@example.com",
    "phone": "+123 1234567890",
    "country": "india",
    "message": "I would like more information about your services."
}
```
**Response**:
```json
{
    "message": "Contact details submitted successfully."
}
```

### Submit Product Details
**Endpoint**: `POST /api/product`
**Payload**:
```json
{
    "name": "bottle wrapper",
    "title": "bottle wrapper for all sizes",
    "stock": "12000",
    "mrp": "15",
    "original_price": "27",
    "categories": [
        "small",
        "medium",
        "large"
    ],
    "images" : [
        "image/1/file/route",
        "image/2/file/route "
    ]
}
```
**Response**:
```json
{
    "message": "Product created successfully"
}
```

---

## Project setup
```
npm install
```

---

### Add .env file
Add the .env file in the server directory.
Add the following variables according to your credentials:
    PORT , DB_NAME , DB_USER , DB_PASSWORD , DB_HOST

---

### Run the migrations
```
node migrations/migrate.js
```

---

### Compiles and hot-reloads for development
```
npm run start
```
