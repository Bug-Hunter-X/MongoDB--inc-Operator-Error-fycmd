```javascript
const query = { user: 'JohnDoe' };

//Correct usage of $inc operator to increment the points field.
db.collection('users').updateOne(query, { $inc: { points: 1 } });
```