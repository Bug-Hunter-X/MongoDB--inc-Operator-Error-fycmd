# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB's `updateOne` method.  Incorrectly using the operator can lead to data corruption and unexpected behavior.

## Bug Description:
The provided JavaScript code incorrectly uses the `$inc` operator within the `updateOne` method. The correct way to increment a field is to use the `$inc` operator with the field to be incremented, this code incorrectly assigns a new value to the field instead of incrementing it.