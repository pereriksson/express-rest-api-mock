# Express REST API Mock

This repo provides a convenient way to set up a local REST service for your new dev projects. After constantly setting up random REST environments as a developer it was time to create something maintainable.

## Usage

```
npm install
npm start
```

## Purpose

The purpose of this repo is to provide a fully working minimal REST service to simplify the development of new web apps.

This repo contains the following:

**Datasets**

This repo contains a small dataset with the following to get you started. The dataset can easily be expanded with new data.

The handling of collections is **completely automatic**. The only requirement for data is that there is a unique id value for each entity.

* suppliers
* customers
* products
* categories

**Routing**

The following routes are provided:

| Route               | Methods     | Purpose                                       |
|---------------------|-------------|-----------------------------------------------|
| /login              | POST        | Authenticate when the feature is enabled.     |
| /v1/:collection     | POST, GET   | Retrieve all entities or create a new entity. |
| /v1/:collection/:id | PUT, DELETE | Modify or delete any entity.                  |


**Authentication**

When authentication is enabled, the client must authenticate using JWT. Send a POST request to `/login` as follows:

```json
{
	"username": "username",
	"password": "password"
}
```

## Configuration
This instance supports some configuration, to simulate different kinds of scenarios.

| Name                   | Default value | Purpose                                    |
|------------------------|---------------|--------------------------------------------|
| NAMESPACE              | v1            | The namespace for the REST API.            |
| EXPRESS_LISTEN_PORT    | 3000          | The listen port for Express.               |
| RESPONSE_DELAY         | 0 | If responses should be delayed. This can be used to simulate low response times from the backend. |
| ACCESS_TOKEN_SECRET    | 8429596911795967866632657467080640 | Any value you like.   |
| ACCEPTED_CONTENT_TYPES | ['application/json; charset=UTF-8 application/json', 'application/json'] | Both are provided as the default value may differ between clients. |
| AUTH_USER              | false         | If authentication should be required.      |
| USERNAME               | username    | The valid username during authentication.    |
| PASSWORD               | password    | The valid password during authentication.    |

## Middlewares

| Name                   | Purpose                                       |
|------------------------|-----------------------------------------------|
| collectionMiddleware   | Ensures that requested collections are valid. |
| contentTypeMiddleware  | Sets the content type for the response.       |
| delayResponseMiddleware| Delays the request if configured.             |
| failRequestMiddleware  | Fails a request if `{ fail: true)` is provided in the requested entity. |
| verifyTokenMiddleware  | Verifies that the provided token is correct, if authentication is enabled. |
