# manager

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.


## Database
[CouchDB](http://couchdb.apache.org/) is used as database. CouchDB offers a REST API for creating, updating, deleting et retrieving data.


## Categories

### Get categories {GET}
```bash 
curl -i -H "Content-Type: application/json" \
http://[DB_SERVER]/manager/_design/lists/_view/categories?include_docs=true
```


### Create / Update category {PUT}
The only difference between create and update is when you update, you need to add a _rev attribute to your JSON data.

The category must have an \_id property in data that is formatted as following: 'category_' + generatedId.


```bash 
curl -i -H "Content-Type: application/json" \
-X PUT \
-d '{"_id": "category_12345", "label": "12345"}' \
http://[DB_SERVER]/manager/category_12345
```

For updating, just add the \_rev attribute you've get when listing or after a creation:  

```bash 
curl -i -H "Content-Type: application/json" \
-X PUT \
-d '{"_id": "category_12345", "_rev": "1-1234567890", "label": "12345"}' \
http://[DB_SERVER]/manager/category_12345
```

### Delete category {PUT}
For delete a category, you'll just have to update all attributes of your json data with a \_deleted attribute:


```bash 
curl -i -H "Content-Type: application/json" \
-X PUT \
-d '{"_id": "category_12345", "_rev": "1-1234567890", "_deleted": true}' \
http://[DB_SERVER]/manager/category_12345
```



## Partners

### Get partners {GET}
```bash 
curl -i -H "Content-Type: application/json" \
http://[DB_SERVER]/manager/_design/lists/_view/partners?include_docs=true
```


### Create / Update partner {PUT}
The only difference between create and update is when you update, you need to add a _rev attribute to your JSON data.

The partner must have an \_id property in data that is formatted as following: 'partner_' + generatedId.


```bash 
curl -i -H "Content-Type: application/json" \
-X PUT \
-d '{"_id": "partner_12345", "name": "Smith"}' \
http://[DB_SERVER]/manager/partner_12345
```

For updating, just add the \_rev attribute you've get when listing or after a creation:  

```bash 
curl -i -H "Content-Type: application/json" \
-X PUT \
-d '{"_id": "partner_12345", "_rev": "1-1234567890", "label": "12345"}' \
http://[DB_SERVER]/manager/partner_12345
```

### Delete partner {PUT}
For delete a partner, you'll just have to update all attributes of your json data with a \_deleted attribute:


```bash 
curl -i -H "Content-Type: application/json" \
-X PUT \
-d '{"_id": "partner_12345", "_rev": "1-1234567890", "_deleted": true}' \
http://[DB_SERVER]/manager/partner_12345
```
