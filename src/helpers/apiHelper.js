import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

export const errorEntityValidationFormat = (message, model) =>
  ReactDOMServer.renderToString(
    <>
      {message}
      {model && Object.keys(model).length > 0 && (
        <p>
          <ul>
            {Object.keys(model).map((key) => (
              <li key={key}>{model[key].find(() => true)}</li>
            ))}
          </ul>
        </p>
      )}
    </>
  );

/* eslint-disable import/prefer-default-export */
export const handleApiErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const handleOkResponse = (response) => {
  if (response.headers.get('Content-Type') && response.headers.get('Content-Type').indexOf('application/json') >= 0) {
    return response.json();
  }

  return response.text();
};

export const simplePOST = (contextPath, body = '{}') =>
  fetch(`${process.env.REACT_APP_BACKEND}${contextPath}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })
    .then((response) => handleApiErrors(response))
    .then((response) => handleOkResponse(response));

export const GET = (url) =>
  axios({
    url,
    method: 'GET',
  }).then((response) => response.data);

export const POST = (url, reqBody) =>
  axios({
    url,
    method: 'POST',
    data: reqBody,
  }).then((response) => response.data);

export const PUT = (url, reqBody) =>
  axios({
    baseURL: process.env.REACT_APP_BACKEND,
    url,
    method: 'PUT',
    data: reqBody,
  }).then((response) => response.data);

export const DELETE = (url) =>
  axios({
    url,
    method: 'DELETE',
  }).then((response) => response.data);
