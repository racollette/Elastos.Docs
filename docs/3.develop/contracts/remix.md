---
title: Deploy using Remix
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

A Hello World style starter project. This tutorial aims to instruct how to deploy a smart contract with a message, and render it in the front-end. You can change the message using the interact panel.

This dapp implements a "Hello World" style application that echoes a message passed to the contract to the front end. This tutorial is intended to be followed using the online IDE available at [Remix IDE](https://remix.ethereum.org/).

## What you will learn

This guide introduces an online IDE for blockchain development called Remix. An easy-to-use platform that does not require any downloads, creating accounts or logins.
Here, the Remix team also provides some explanation about a smart contract typical structure, how to compile, deploy and verify a smart contract pushed into Elastos.

## What you will do

- Create a file on Remix
- Upload a pre-built smart contract into the IDE
- Compile the smart contract
- Connect the application to the Elastos Smart Chain (ESC) testnet via Metamask
- Deploy the smart contract
- Verify the smart contract

## Getting started with [Remix IDE](https://remix.ethereum.org/)

Remix is a Ethereum-focused IDE: an online platform to develop smart contracts. To start building a smart contract, click on **New File** and name it `HelloWorld.sol`:

<img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/new-file.png")} />

### The smart contract

Now copy and paste the Smart contract below into the newly created `HelloWorld.sol` file.

```js title="HelloWorld.sol"
// Specifies that the source code is for a version
// of Solidity greater than 0.5.10
pragma solidity ^0.5.10;

// A contract is a collection of functions and data (its state)
// that resides at a specific address on the Ethereum blockchain.
contract HelloWorld {

    // The keyword "public" makes variables accessible from outside a contract
    // and creates a function that other contracts or SDKs can call to access the value
    string public message;

    // A special function only run during the creation of the contract
    constructor(string memory initMessage) public {
        // Takes a string value and stores the value in the memory data storage area,
        // setting `message` to that value
        message = initMessage;
    }

    // A publicly accessible function that takes a string as a parameter
    // and updates `message`
    function update(string memory newMessage) public {
        message = newMessage;
    }
}
```

The first line `pragma solidity ^0.5.10` specifies that the source code is for a Solidity version greater than 0.5.10. [Pragmas](https://solidity.readthedocs.io/en/latest/layout-of-source-files.html#pragma) are common instructions for compilers about how to treat the source code (e.g., pragma once).

A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. The line `string public message` declares a public state variable called `message` of type `string`. You can think of it as a single slot in a database that you can query and alter by calling functions of the code that manages the database. The keyword `public` automatically generates a function that allows you to access the current value of the state variable from outside of the contract. Without this keyword, other contracts have no way to access the variable.

The [constructor](https://solidity.readthedocs.io/en/latest/contracts.html#constructor) is a special function run during the creation of the contract and cannot be called afterward. In this case, it takes a string value `initMessage`, stores the value in the [memory](https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html#storage-memory-and-the-stack) data storage area, and sets `message` to that value.

The `update` function is another public function that is similar to the constructor, taking a string as a parameter, and updating the `message` variable.

## Compile Smart Contract

- Go to Solidity Compiler <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/Screenshot_2020-02-14_at_1.00.03_PM.png")} />
- Select Compiler Version to 0.5.10
- Now, `Compile HelloWorld.sol`
- After Successful Compilation, it will show
  <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/Screenshot_2020-02-14_at_1.08.22_PM.png")} />
- Now, We have to deploy our smart contract on Elastos Network. For that, we have to connect to the web3 world, this can be done by using any of the services like Metamask, Brave, Portis etc. We will be using Metamask. Please follow this [tutorial](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask) to set up a Metamask Account.
- Open Metamask and select Custom RPC from the networks dropdown

<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/metamask-custom-rpc.png")} alt="RemixIDE_Step1"/>
</div>

- Put in a Network name - “WAX Testnet”
- In URL field you can add the URL as "https://api-testnet.elastos.io/esc"
- Enter the Chain ID: 21
- (Optional Fields) Currency Symbol: "ELA" and Block Explorer URL: "https://esc-testnet.elastos.io/"

<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/metamask_setup.png")} alt="RemixIDE_Step1"/>
</div>
- Go ahead and click **save**
- Copy your address from Metamask
<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/Screenshot_2020-01-09_at_1.24.49_PM.png")} alt="RemixIDE_Step1"/>
</div>

- Head over to [Faucet](https://esc-faucet.elastos.io/) and request test ether - you will need this pay for gas on ESC.
- Now, let's Deploy the Smart Contract on the Elasts network
- Select Injected Provider Metamask in the Environment dropdown and your contract

<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/injected-provider.png")} alt="RemixIDE_Step1"/>
</div>

- Accept the Connection Request.

<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/Screenshot_2020-02-14_at_1.59.10_PM.png")} alt="RemixIDE_Step1"/>
</div>

- Once Metamask is connected to Remix, the ‘Deploy’ transaction would generate another metamask popup that requires transaction confirmation.

<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/Screenshot_2020-02-14_at_1.45.23_PM.png")} alt="RemixIDE_Step1"/>
</div>

**Congratulations!** You have successfully deployed the **HelloWorld** Smart Contract. Now you can interact with the Smart Contract. Check the deployment status [here](https://esc-testnet.elastos.io/).

<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/Screenshot_2020-02-14_at_2.00.19_PM.png")} alt="RemixIDE_Step1"/>
</div>

# **Verifying your Contracts on Elastos Block Explorer**

The first and foremost step is to flatten the solidity contract into a single file.

## **Flatten your solidity contract**

Install [truffle-flattener](https://github.com/nomiclabs/truffle-flattener) or [sol-merger](https://github.com/RyuuGan/sol-merger)

Flatten using command

`sol-merger \"./contracts/*.sol\" ./build`

## **Verifying on Blockscout**

Navigate to your contract's Blockscout page and then click verify and publish

<img src={useBaseUrl("docs/assets/develop/smart-contracts/remix/verify-publish.png")} />

- Select `Solidity (Single File)` in compiler type
- Select appropriate compiler version
- Choose the license type of your contract

Onto the next section, paste your flattended contract there.

If you had enabled optimization then adjust the `optimization` section accordingly.

Constructor arguments should have been filled in automatically, if not, they can be retrieved from the trailing bytes of the deployment transaction, they resemble something like `000000000000000000000000a6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa`
