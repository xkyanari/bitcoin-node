# Bitcoin Node API

This project is an API for a Bitcoin Node application that allows communication with a Bitcoin node using JSON-RPC and SSH. It enables you to send commands to the Bitcoin node, as well as execute SSH commands for various tasks such as inscribing images.

## Project Structure

```
bitcoin-node/
| -- config/
|     | -- clients/ (rpcClient.js and sshClient.js)
| -- functions/ (mostly functions called for execution in routes/)
| -- routes/
|     | -- api/
|     |     | -- v1/
|     |     |     | -- getBlockCount.js
|     |     |     | -- ls.js
|     |     | -- index.js
| -- app.js (for setting up the Express app and middleware)
| -- index.js (for starting the server)
```

## Setup
1. Clone the repository:

```
git clone https://github.com/xkyanari/bitcoin-node.git
```

2. Install the dependencies:

```
npm install
```

3. Set the environment variables:

```
PORT = <listening-port>
RPC_USERNAME = <rpc-user>
RPC_PASSWORD = <rpc-password>
RPC_HOSTNAME = <rpc-hostname>
RPC_PORT = <rpc-port>
SSH_HOSTNAME = <ssh-hostname>
SSH_PORT = <ssh-port>
SSH_USERNAME = <ssh-username>
SSH_PRIVATE_KEY = <ssh-private-key-string>
```

4. Run the application:

```
npm start
```

The application will start running on http://localhost:$PORT.

## Sample API Endpoints

### `GET /api/v1/getBlockCount`
Returns the current block count of the Bitcoin node.

### `GET /api/v1/ls`
Executes the ls -l command on the server and returns the result.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
