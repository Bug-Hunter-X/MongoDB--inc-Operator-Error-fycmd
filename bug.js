```javascript
const query = { user: 'JohnDoe' };

//Incorrect use of $inc operator will result in an error
//Should be: db.collection('users').updateOne(query, { $inc: { points: 1 } });
db.collection('users').updateOne(query, { points: 1 });
```