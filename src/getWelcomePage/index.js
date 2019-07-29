const fs = require('fs');
const express = require('express')
exports.handler = async event => {
  // Log http request
  console.log(event);

  const responseBody = fs.readFileSync('./welcome.html', 'utf8');
  // Build an HTTP response.
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {"key1":1,"key2":2}
  };

  return response;
};
